# Lab 7 Notes

This lab covers Windows incident response.

## Common Windows Commands

~~~cmd
eventvwr         // View system event logs
lusrmgr.msc      // View system users
msconfig          // View startup items
ncpa.cpl          // Network connections
firewall.cpl      // Firewall status
taskschd.msc      // Scheduled tasks

netstat -ano      // View open TCP and UDP ports
nbtstat -n        // View the Windows device name
doskey/history    // View command history (cleared when the terminal process closes)

// Find timestamps
forfiles /c "cmd /c echo @file @fdate @ftime"
Get-Item "filename.txt" | Select-Object Name, CreationTime, LastWriteTime, LastAccessTime
Get-Item "PSTools.zip" | Select-Object Name, CreationTime, LastWriteTime, LastAccessTime
~~~

### Security Logon Events

In Event Viewer:

- **4624:** Successful logon.
- **4625:** Failed logon.
- **4648:** A logon was attempted using explicit credentials.

Example: Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4624} -MaxEvents 10

### System Log

Event ID **41 (Kernel-Power)** is associated with an unexpected shutdown or restart.

### System User Investigation

~~~text
net user <username>   // Does not list hidden accounts ending in $; specify an account to view its details
lusrmgr.msc
regedit.msc           // machine -> SAM item -> Permissions -> replace permissions on all child objects
~~~

### Startup Investigation

- msconfig → services.msc → service properties.
- Registry: HKEY_LOCAL_MACHINE → SOFTWARE → Microsoft → Windows → CurrentVersion → Run.
