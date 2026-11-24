# lab7实验笔记

本实验为Windows应急响应

## Windows运行常用命令
```cmd
eventvwr         // 系统运行日志
lusrmgr.msc      // 系统用户查看
msconfig         // 系统启动项查看
ncpa.cpl         // 网络连接
firewall.cpl     // 防火墙状态
taskschd.msc     // 定时任务

netstat -ano     // 查看开放的tcp和udp端口
nbtstat -n       // 查看Windows设备名
doskey/history   // 查看历史记录（关闭终端进程后清空）

// 查找时间戳
forfiles /c "cmd /c echo @file @fdate @ftime"
Get-Item "filename.txt" | Select-Object Name, CreationTime, LastWriteTime, LastAccessTime
Get-Item “PSTools.zip” | Select-Object Name, CreationTime, LastWriteTime, LastAccessTime
```

### 系统安全登录日志
eventvwr
 - 4624表示登陆成功
 - 4625表示登陆失败
 - 4648使用显式凭据尝试登录

例如`Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4624} -MaxEvents 10`

### 系统日志
41 kernel-power 计算机蓝屏

### 系统用户排查
net user <用户名> // 无法看到$隐藏用户，加上特定用户名查看用户的详细信息
lusrmgr.msc
regedit.msc      // machine->sam该项->权限->替代所有子对象的权限项目

### 启动项排查
msconfig->services.msc->服务属性
regedit->machine->microsoft->windows->currentversion->run