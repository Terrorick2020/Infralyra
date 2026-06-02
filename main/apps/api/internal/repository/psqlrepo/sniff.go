package psqlrepo

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/jmoiron/sqlx"

	"InfralyraApi/pkg/scan"
)

type SniffPsqlRepos struct {
	db *sqlx.DB
}

func nullIfEmpty(s string) any {
	if strings.TrimSpace(s) == "" {
		return nil
	}
	return s
}

func NewSniffPsqlRepos(db *sqlx.DB) *SniffPsqlRepos {
	return &SniffPsqlRepos{db: db}
}

func (spr *SniffPsqlRepos) SetPacket(ctx context.Context, inface string, pkt scan.PacketInfo) error {
	query := `
		INSERT INTO packets (
			timestamp, eth_src_mac, eth_dst_mac, net_version,
			net_src_ip, net_dst_ip, net_protocol, trans_proto,
			trans_src_port, trans_dst_port, app_payload, app_payload_size, interface_name
		) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
	`

	ts := time.UnixMilli(pkt.Timestamp)
	payloadSize := len(pkt.Application)

	var netVersion any
	if pkt.Network.Version == "IPv6" {
		netVersion = 6
	} else if pkt.Network.Version == "IPv4" {
		netVersion = 4
	} else {
		netVersion = nil
	}

	_, err := spr.db.ExecContext(ctx, query,
		ts,
		nullIfEmpty(pkt.Ethernet.SrcMAC),
		nullIfEmpty(pkt.Ethernet.DstMAC),
		netVersion,
		nullIfEmpty(pkt.Network.SrcIP),
		nullIfEmpty(pkt.Network.DstIP),
		nullIfEmpty(pkt.Network.Protocol),
		nullIfEmpty(pkt.Transport.Proto),
		pkt.Transport.SrcPort,
		pkt.Transport.DstPort,
		pkt.Application,
		payloadSize,
		inface,
	)

	if err != nil {
		return fmt.Errorf("ошибка вставки пакета в БД: %w", err)
	}

	return nil
}

func (spr *SniffPsqlRepos) GetPackets(
	ctx context.Context,
	inface string,
	count int16,
	step int16,
) ([]scan.PacketInfo, error) {
	if count <= 0 {
		count = 15
	}
	if step <= 0 {
		step = 1
	}

	offset := (int(step) - 1) * int(count)

	query := `
		SELECT 
			timestamp, 
			COALESCE(eth_src_mac::text, ''), 
			COALESCE(eth_dst_mac::text, ''), 
			COALESCE(net_version, 0),
			COALESCE(net_src_ip::text, ''), 
			COALESCE(net_dst_ip::text, ''), 
			COALESCE(net_protocol, ''), 
			COALESCE(trans_proto, ''),
			COALESCE(trans_src_port, 0), 
			COALESCE(trans_dst_port, 0), 
			COALESCE(app_payload, '\x'::bytea)
		FROM packets
		WHERE interface_name = $1
		ORDER BY timestamp DESC
		LIMIT $2 OFFSET $3
	`

	rows, err := spr.db.QueryContext(ctx, query, inface, count, offset)
	if err != nil {
		return nil, fmt.Errorf("ошибка запроса пакетов из БД: %w", err)
	}
	defer rows.Close()

	packets := make([]scan.PacketInfo, 0)

	for rows.Next() {
		var p scan.PacketInfo
		var ts time.Time
		var netVersion int
		var payload []byte

		err := rows.Scan(
			&ts,
			&p.Ethernet.SrcMAC,
			&p.Ethernet.DstMAC,
			&netVersion,
			&p.Network.SrcIP,
			&p.Network.DstIP,
			&p.Network.Protocol,
			&p.Transport.Proto,
			&p.Transport.SrcPort,
			&p.Transport.DstPort,
			&payload,
		)
		if err != nil {
			return nil, fmt.Errorf("ошибка сканирования строки БД: %w", err)
		}

		p.Timestamp = ts.UnixMilli()
		if netVersion == 6 {
			p.Network.Version = "IPv6"
		} else if netVersion == 4 {
			p.Network.Version = "IPv4"
		} else {
			p.Network.Version = ""
		}
		p.Application = payload

		packets = append(packets, p)
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("ошибка итерации по строкам БД: %w", err)
	}

	return packets, nil
}
