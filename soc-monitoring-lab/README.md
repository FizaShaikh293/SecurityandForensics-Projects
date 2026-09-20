# 🛡️ SOC Monitoring Lab

A hands-on SOC lab built with **Wazuh, Windows 11, Sysmon, Kali Linux and VirtualBox**.

The aim was to build a controlled environment where I could practise **endpoint monitoring, security event analysis, threat hunting and investigation**.

## 🎯 What I Did

- Built a virtualised SOC environment
- Configured Windows 11 as a monitored endpoint
- Installed Sysmon for additional endpoint telemetry
- Connected the Windows endpoint to Wazuh
- Monitored and analysed security events
- Used Wazuh Threat Hunting to investigate activity
- Investigated Windows security events, including **Event ID 5157**
- Reviewed command-line activity and event details

## 🔍 Investigation Flow

**Windows Endpoint → Sysmon / Windows Events → Wazuh → Security Events → Threat Hunting → Investigation**

## 🔧 Tools

`Wazuh` `Windows 11` `Sysmon` `Kali Linux` `VirtualBox` `Windows Event Logs`

## 📚 Documentation

- [Installation Guide](docs/installation-guide.md)
- [Monitoring & Detection](docs/monitoring-and-detection.md)
- [Wazuh Rules & Events](docs/wazuh-rules.md)
- [Security Event Investigation](docs/investigation.md)

## 📸 Evidence

Screenshots from the completed lab are available in the `screenshots` folder.

## ⚠️ Disclaimer

Built for educational and defensive cybersecurity purposes in an isolated virtual environment.
