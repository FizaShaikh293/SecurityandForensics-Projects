# 🔍 Monitoring & Detection

## Overview

Wazuh was used as the central security monitoring platform for the lab.

The Windows endpoint generated security telemetry that was collected and reviewed through Wazuh.

## Wazuh Dashboard

The Wazuh dashboard provided an overview of the monitored environment and security activity.

![Wazuh Dashboard](../screenshots/04-wazuh-dashboard.png)

## Threat Hunting

The Threat Hunting interface was used to search and review security events collected from the Windows endpoint.

![Threat Hunting Dashboard](../screenshots/05-threat-hunting-dashboard.png)

## Security Events

Security events recorded from the Windows environment were reviewed through the Wazuh event interface.

![Security Events](../screenshots/06-security-events.png)

![Event Overview](../screenshots/07-event-overview.png)

## Windows Event Monitoring

The lab included investigation of Windows security events, including Windows Filtering Platform Event ID 5157.

Event ID 5157 represents a connection that was blocked by Windows Filtering Platform.

The event was reviewed through Wazuh as part of the monitoring and investigation process.

## Endpoint Activity

Command-line activity on the Windows endpoint was also reviewed as part of the lab.

![Command Line Activity](../screenshots/09-command-line-activity.png)

## Detection Workflow

The monitoring process followed this workflow:

**Windows Endpoint → Security Telemetry → Wazuh → Security Events → Threat Hunting → Investigation**

## Skills Demonstrated

- SIEM monitoring
- Endpoint monitoring
- Security event analysis
- Threat hunting
- Windows security telemetry
- Event investigation
