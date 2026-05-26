module.exports = [
"[project]/src/pages/Devices/model/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Devices/model/useDevices.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_DEVICES",
    ()=>MOCK_DEVICES,
    "useDevices",
    ()=>useDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
const MOCK_DEVICES = [
    // 1. Ubuntu PC
    {
        device: {
            ip: "192.168.10.1",
            mac: "00:1A:2B:3C:4D:10",
            alive: true,
            hostname: "personal-computer-01",
            os: "Ubuntu 22.04",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.0",
                    banner: "SSH-2.0-OpenSSH_9.0"
                },
                {
                    port: 631,
                    protocol: "TCP",
                    product: "CUPS",
                    version: "2.4",
                    banner: "IPP Printing"
                }
            ],
            iot: "",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        10
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                10
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 2. Windows laptop
    {
        device: {
            ip: "192.168.10.2",
            mac: "00:1A:2B:3C:4D:11",
            alive: true,
            hostname: "laptop-01",
            os: "Windows 11/10",
            osTtl: 128,
            osMethod: "ICMP Echo",
            services: [
                {
                    port: 445,
                    protocol: "TCP",
                    product: "SMB",
                    version: "3.1.1",
                    banner: "Windows SMB"
                }
            ],
            iot: "",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "IIS"
        },
        interface: {
            name: "wifi0",
            description: "Wi-Fi",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        11
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                11
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 3. Android phone
    {
        device: {
            ip: "192.168.10.3",
            mac: "AA:BB:CC:DD:EE:01",
            alive: true,
            hostname: "mobile-phone-01",
            os: "Android 14",
            osTtl: 64,
            osMethod: "ICMP",
            services: [],
            iot: "mobile",
            snmp: "disabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: ""
        },
        interface: {
            name: "wlan0",
            description: "Wi-Fi",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        20
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                20
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    {
        device: {
            ip: "192.168.10.4",
            mac: "AA:BB:CC:DD:EE:02",
            alive: true,
            hostname: "iot-signal-sensor-01",
            os: "RTOS",
            osTtl: 255,
            osMethod: "ARP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Embedded HTTP",
                    version: "1.0",
                    banner: "IoT Web UI"
                }
            ],
            iot: "sensor",
            snmp: "limited",
            mdns: "enabled",
            ssdp: "disabled",
            webStack: "lighttpd"
        },
        interface: {
            name: "eth0",
            description: "IoT Ethernet",
            flags: 4099,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        30
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                30
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 5. Network printer
    {
        device: {
            ip: "192.168.10.5",
            mac: "DE:AD:BE:EF:00:01",
            alive: true,
            hostname: "printer-01",
            os: "Embedded Linux",
            osTtl: 255,
            osMethod: "SNMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Web UI",
                    version: "2.0",
                    banner: "Printer Admin"
                },
                {
                    port: 9100,
                    protocol: "TCP",
                    product: "JetDirect",
                    version: "1.0",
                    banner: "RAW Printing"
                }
            ],
            iot: "printer",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        40
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                40
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    {
        device: {
            ip: "192.168.10.6",
            mac: "DE:AD:BE:EF:00:02",
            alive: true,
            hostname: "scanner-01",
            os: "Embedded Linux",
            osTtl: 255,
            osMethod: "SNMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Scan Web UI",
                    version: "1.3",
                    banner: "Scanner Admin"
                }
            ],
            iot: "scanner",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "lighttpd"
        },
        interface: {
            name: "eth0",
            description: "Ethernet",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        41
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                41
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 7. File server
    {
        device: {
            ip: "192.168.10.7",
            mac: "00:AA:BB:CC:DD:50",
            alive: true,
            hostname: "file-server-01",
            os: "Ubuntu Server 22.04",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.0",
                    banner: "SSH"
                },
                {
                    port: 445,
                    protocol: "TCP",
                    product: "Samba",
                    version: "4.15",
                    banner: "SMB File Share"
                },
                {
                    port: 2049,
                    protocol: "TCP",
                    product: "NFS",
                    version: "4",
                    banner: "NFS Share"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: "nginx"
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        50
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                50
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 8. Web server (Debian)
    {
        device: {
            ip: "192.168.10.8",
            mac: "00:AA:BB:CC:DD:60",
            alive: true,
            hostname: "web-server-01",
            os: "Debian 12",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "nginx",
                    version: "1.24",
                    banner: "HTTP Server"
                },
                {
                    port: 443,
                    protocol: "TCP",
                    product: "nginx",
                    version: "1.24",
                    banner: "HTTPS Server"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: "nginx + node"
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        60
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                60
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 9. Remote access server
    {
        device: {
            ip: "192.168.10.9",
            mac: "00:AA:BB:CC:DD:70",
            alive: true,
            hostname: "remote-access-server-01",
            os: "Debian 12",
            osTtl: 64,
            osMethod: "TCP SYN",
            services: [
                {
                    port: 22,
                    protocol: "TCP",
                    product: "OpenSSH",
                    version: "9.2",
                    banner: "SSH VPN Gateway"
                },
                {
                    port: 1194,
                    protocol: "UDP",
                    product: "OpenVPN",
                    version: "2.6",
                    banner: "VPN Service"
                }
            ],
            iot: "",
            snmp: "enabled",
            mdns: "disabled",
            ssdp: "disabled",
            webStack: ""
        },
        interface: {
            name: "eth0",
            description: "Server NIC",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        70
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                70
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    },
    // 10. Gateway / router
    {
        device: {
            ip: "192.168.10.10",
            mac: "00:11:22:33:44:55",
            alive: true,
            hostname: "router",
            os: "RouterOS",
            osTtl: 255,
            osMethod: "ICMP",
            services: [
                {
                    port: 80,
                    protocol: "TCP",
                    product: "Router UI",
                    version: "1.0",
                    banner: "Admin Panel"
                },
                {
                    port: 53,
                    protocol: "UDP",
                    product: "DNS",
                    version: "1.0",
                    banner: "DNS Resolver"
                }
            ],
            iot: "gateway",
            snmp: "enabled",
            mdns: "enabled",
            ssdp: "enabled",
            webStack: "embedded"
        },
        interface: {
            name: "wan0",
            description: "Router WAN/LAN",
            flags: 4163,
            addresses: [
                {
                    ip: new Uint8Array([
                        192,
                        168,
                        1,
                        1
                    ]),
                    netmask: new Uint8Array([
                        255,
                        255,
                        255,
                        0
                    ])
                }
            ]
        },
        net: {
            IP: new Uint8Array([
                192,
                168,
                1,
                1
            ]),
            Mask: new Uint8Array([
                255,
                255,
                255,
                0
            ])
        }
    }
];
function useDevices() {
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const asyncSetDevices = async ()=>{
        try {
            const respose = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/scan/get-devices");
            if (respose.status === 200) {
                setDevices(MOCK_DEVICES);
            }
        } catch (error) {
            console.log(error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        asyncSetDevices();
    }, []);
    return {
        idKey,
        devices
    };
}
}),
"[project]/src/pages/Devices/model/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/pages/Devices/ui/Page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Page-module-scss-module__QDGgUq__body",
  "body__item": "Page-module-scss-module__QDGgUq__body__item",
  "devices-page": "Page-module-scss-module__QDGgUq__devices-page",
  "empty": "Page-module-scss-module__QDGgUq__empty",
  "section": "Page-module-scss-module__QDGgUq__section",
});
}),
"[project]/src/pages/Devices/ui/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/pages/Devices/ui/Page.tsx'\n\nExpected '</', got 'jsx text (\n          )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=src_pages_Devices_e8017ce4._.js.map