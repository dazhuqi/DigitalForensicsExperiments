# Lab 6 Notes

This lab uses Wireshark to analyze a .pcap capture. Familiarity with the application, transport, network, and data-link layers is useful.

## Basic Workflow

- **Step 1: Timeline** — Identify who started communicating, when DNS activity occurred, and when connections were established and closed.
- **Step 2: Communication Parties** — Find the busiest IP addresses and important ports. Determine which hosts appear to be clients and servers.
- **Step 3: Layer Analysis** — Identify protocols such as Ethernet, ARP, IPv4, IPv6, and WLAN; TCP, UDP, ICMP, and QUIC; and application protocols such as DNS, HTTP, TLS, and Modbus.
- **Step 4: Find Anomalies** — Look for traffic such as ARP spoofing, unusual certificate SANs, unexpected DNS queries, or large numbers of random-looking subdomains.
- **Step 5: Reassemble and Extract** — Follow streams, inspect certificates and DNS history, and check for files (such as images or video) and credentials. File-recovery techniques may also be needed.

## Further Topics

### 1. Traffic Fingerprints

- **TCP fingerprint:** Initial TTL, window size, MSS, and the order of TCP options.
- **TLS fingerprint:** The TLS ClientHello version, extensions, and cipher-suite combination, such as JA4=a_b_c.
- **Web characteristics and behavior:** Resource request order, common static paths, User-Agent style, cookie patterns, API request timing, and persistent WebSocket connections.

### 2. Proxies, VPNs, Tunnels, and IPsec

- **Local proxy:** Often used for packet capture, debugging, or forwarding.
- **Forward proxy:** Makes requests to external resources on behalf of a client; the client knows the proxy is present.
- **Reverse proxy:** Receives requests on behalf of a server. Nginx, CDNs, and load balancers are common examples, so the front-end host may not be the actual back end.
- **VPNs and tunnels:** A VPN creates a logical private channel over a public network and can affect routing, egress IP, DNS, and network visibility. A tunnel is a broader concept in which one protocol is carried inside another, such as DNS, SSH, or HTTP tunneling.
- **IPsec:** A family of network-layer security protocols often used for VPNs. It can protect traffic at the network layer.

### 3. QUIC

QUIC runs over UDP and provides capabilities traditionally supplied by TCP together with TLS. HTTP/3 is based on QUIC.

Therefore, UDP traffic is not necessarily limited to small messages. It may carry modern encrypted browser-to-website traffic, faster handshakes, multiplexing, and other web traffic.

### 4. Common Connections and Packet Types

| Scenario | Protocol | Packets or content to look for |
| :---: | :---: | :---: |
| Bluetooth | OBEX | Put request packets |
| Keyboard and mouse | USB | URB_INTERRUPT in / URB_BULK |
| Wi-Fi | EAPOL/WLAN | WPA four-way handshake packets |
| Industrial control | Modbus/S7comm | Write xx Registers |
| Covert tunnel | DNS/ICMP | Unusually long, meaningless subdomain queries or anomalous trailing ICMP data payloads |
| Database | MySQL/TDS | Filter mysql.query and look for statements with SQL-injection characteristics |
| Email and file transfer | SMTP/POP/IMAP/FTP | Look for strings such as USER and PASS |
| Web attacks | http.request.method == POST | Look for status code 200 and request bodies containing large amounts of Base64 or URL-encoded data; watch for common webshell indicators such as z0, z1, and @ini_set |
