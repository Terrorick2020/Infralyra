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
"use client";
;
const MOCK_DEVICES = [
    // 1. Ubuntu PC
    {
        device: {
            ip: "192.168.1.10",
            mac: "00:1A:2B:3C:4D:10",
            alive: true,
            hostname: "ubuntu-pc",
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
            ip: "192.168.1.11",
            mac: "00:1A:2B:3C:4D:11",
            alive: true,
            hostname: "win-laptop",
            os: "Windows 11",
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
            ip: "192.168.1.20",
            mac: "AA:BB:CC:DD:EE:01",
            alive: true,
            hostname: "android-phone",
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
    // 4. IoT sensor
    {
        device: {
            ip: "192.168.1.30",
            mac: "AA:BB:CC:DD:EE:02",
            alive: true,
            hostname: "iot-sensor-01",
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
            ip: "192.168.1.40",
            mac: "DE:AD:BE:EF:00:01",
            alive: true,
            hostname: "printer-office",
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
    // 6. Network scanner
    {
        device: {
            ip: "192.168.1.41",
            mac: "DE:AD:BE:EF:00:02",
            alive: true,
            hostname: "scanner-office",
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
            ip: "192.168.1.50",
            mac: "00:AA:BB:CC:DD:50",
            alive: true,
            hostname: "file-server",
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
            ip: "192.168.1.60",
            mac: "00:AA:BB:CC:DD:60",
            alive: true,
            hostname: "web-server",
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
            ip: "192.168.1.70",
            mac: "00:AA:BB:CC:DD:70",
            alive: true,
            hostname: "vpn-server",
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
            ip: "192.168.1.1",
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
        setDevices(MOCK_DEVICES);
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
  "section": "Page-module-scss-module__QDGgUq__section",
});
}),
"[project]/src/pages/Devices/ui/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevicesPage",
    ()=>DevicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/ui/Page.module.scss [app-ssr] (css module)");
"use client";
;
;
;
function DevicesPage() {
    const { idKey, devices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDevices"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["devices-page"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["body"],
            children: devices.map((item, index)=>{
                const { device, interface: iface, net } = item;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["body__item"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: [
                                "Хост: ",
                                device.hostname
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 17,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Основная информация"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.ip
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "MAC:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.mac
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Статус:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.alive ? "Online" : "Offline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "OS:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.os
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "TTL:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.osTtl
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Метод определения:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.osMethod
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 19,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Сетевой интерфейс"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Интерфейс:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        iface.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Описание:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        iface.description
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Flags:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        iface.flags
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Сервисы"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                device.services.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["services"],
                                    children: device.services.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["service"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Порт:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        service.port
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Протокол:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        service.protocol
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Продукт:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        service.product
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Версия:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        service.version
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Banner:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        service.banner
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, `${service.port}-${idx}`, true, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Сервисы отсутствуют"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Дополнительно"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IoT:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.iot || "Не определено"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SNMP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.snmp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "mDNS:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.mdns
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SSDP:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.ssdp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Web Stack:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        device.webStack
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["section"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "RAW Network"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "IP bytes:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        Array.from(net.IP).join(".")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mask:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        Array.from(net.Mask).join(".")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    ]
                }, `${idKey}-${index}`, true, {
                    fileName: "[project]/src/pages/Devices/ui/Page.tsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/pages/Devices/ui/Page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Devices/ui/Page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_pages_Devices_e8017ce4._.js.map