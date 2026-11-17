# lab6实验笔记

本实验为使用wireshark对流量包.pcap分析<br>
前情提要：需了解application layer, transport layer, network layer, data transmission layer

## 基础步骤
 - **Step 1 Timeline**: 观察谁先开始通信，谁先发生**DNS**，什么时候建立连接，什么时候断开<br>
 - **Step 2 Communication Parties**: 哪些IP最活跃，哪些端口最关键，谁(host)像客户端，谁(host)像服务器<br>
 - **Step 3 Layer Analysis**: 看是Ethernet、ARP、IPv4、IPv6、WLAN等，还是TCP、UDP、ICMP、QUIC等，应用层是DNS、HTTP、TLS、Modbus等<br>
 - **Step 4 Find Anomaly**: 寻找异常流量，如ARP欺骗、异常证书SAN、奇怪的DNS查询、大量随机子域<br>
 - **Step 5 Reorganize and Extract**: 提取出追踪流、看证书、看DNS历史，是否存在文件（图像、视频）、凭据等，常常还需要相应的文件恢复技术

## 拓展视野
### 1. 流量指纹
 - TCP指纹: 初始TTL，窗口大小，MSS，TCP options顺序<br>
 - TLS指纹: TLS ClientHello的版本、扩展、套件组合，如JA4=a_b_c<br>
 - 网页特征与网页行为: 请求资源顺序、常见静态路径、User-Agent风格、Cookie模式、API请求节奏、WebSocket长连接<br>

### 2. 代理、反向代理、VPN、隧道与IPsec
 - **本地代理**: 常用于抓包、调试、转发<br>
 - **正向代理**: 代表客户端访问外部资源，客户端知道代理的存在<br>
 - **反向代理**: 代表服务器接收请求，Nginx、CDN、负载均衡都是常见的反代场景。这意味着你看到的前端机器不一定是真实后端<br>
 - **VPN与隧道**: VPN的核心是在公共网络上建立逻辑专用通道，影响路由、出口IP、DNS、网络可见性；隧道则是宽泛的概念，把一个协议包放进另一个通道里传输，如DNS隧道、SSH隧道、HTTP隧道等<br>
 - **IPsec**: 网络层安全协议族，常用于VPN。这意味着网络层也能保护<br>

### 3. QUIC
运行在UDP上，实现了很多传统上的TCP+TLS共同提供的能力，HTTP/3就基于QUIC。<br>
所以以后碰到UDP报文，并不只意味着小报文，可能是：浏览器与网站的现代加密通信、更快的握手、多路复用、新一代Web流量

### 4. 常见连接与报文类型
| 场景 | 协议 | 寻找的报文内容 |
| :---: | :---: | :---: |
| 蓝牙 | obex | Put请求报文 |
| 键鼠 | usb | URB_INTERRUPT in/URB_BULK |
| 无线WIFI | eapol/wlan | WPA四次握手包 |
| 工控协议 | modbus/s7comm | Write xx Registers |
| 隐蔽隧道 | dns/icmp | 异常长且无意义的子域名请求/ICMP尾异常Data载荷 |
| 数据库 | mysql/tds | 过滤mysql.query寻找带有注入特征的语句 |
| 邮件 | smtp/pop/imap/ftp | 查找USER、PASS等 |
| web攻击 | http.request.method == "POST" | 查找状态码为200且请求体包含大量Base64或URL编码 <br> 关注 z0、z1、@ini_set 等常见 Webshell 特征 |