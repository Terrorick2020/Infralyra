module.exports = [
"[project]/.next-internal/server/app/(main)/devices/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/pages/Devices/model/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/src/pages/Devices/model/useDevices.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_DEVICES",
    ()=>MOCK_DEVICES,
    "useDevices",
    ()=>useDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
    const idKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useId"])();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const asyncSetDevices = async ()=>{
        setDevices(MOCK_DEVICES);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        asyncSetDevices();
    }, []);
    return {
        idKey,
        devices
    };
}
}),
"[project]/src/pages/Devices/model/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/pages/Devices/ui/Page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Page-module-scss-module__QDGgUq__body",
  "devices-page": "Page-module-scss-module__QDGgUq__devices-page",
});
}),
"[project]/src/pages/Devices/ui/Page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevicesPage",
    ()=>DevicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/model/useDevices.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/ui/Page.module.scss [app-rsc] (css module)");
;
;
;
function DevicesPage() {
    const { idKey, devices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$model$2f$useDevices$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDevices"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]["devices-page"]
    }, void 0, false, {
        fileName: "[project]/src/pages/Devices/ui/Page.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/pages/Devices/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/ui/Page.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/app/(main)/devices/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages/Devices/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/Devices/ui/Page.tsx [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Devices$2f$ui$2f$Page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DevicesPage"];
}),
"[project]/app/(main)/devices/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/devices/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61f824a9._.js.map