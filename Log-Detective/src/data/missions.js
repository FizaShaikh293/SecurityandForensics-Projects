const missions = [
  {
    id: 1,
    title: "The Midnight Breach",
    difficulty: "Rookie",
    reward: 500,
    description:
      "Investigate a privileged account compromise before the attacker establishes persistence.",
    options: [
      "Normal Activity",
      "Brute Force",
      "Credential Compromise",
      "New Admin Account",
      "Suspicious PowerShell"
    ],
    events: [
      {
        id: "M1-E01",
        time: "09:01:13",
        event: "EMAIL_SENT",
        user: "john",
        ip: "192.168.1.31",
        location: "Dublin",
        device: "JOHN-LT",
        details: "Internal email sent to the finance team.",
        answer: "Normal Activity",
        severity: "Low",
        explanation:
          "The activity came from a recognised employee, internal IP address and known device."
      },
      {
        id: "M1-E02",
        time: "09:04:22",
        event: "LOGIN_FAILED",
        user: "admin",
        ip: "185.210.44.10",
        location: "Moscow",
        device: "UNKNOWN",
        details: "Seven failed login attempts occurred within 48 seconds.",
        answer: "Brute Force",
        severity: "High",
        explanation:
          "Repeated failures from one external IP against a privileged account indicate password guessing."
      },
      {
        id: "M1-E03",
        time: "09:05:10",
        event: "LOGIN_SUCCESS",
        user: "admin",
        ip: "185.210.44.10",
        location: "Moscow",
        device: "UNKNOWN",
        details: "Successful authentication immediately followed the failed attempts.",
        answer: "Credential Compromise",
        severity: "Critical",
        explanation:
          "The same source succeeded after repeated failures, strongly suggesting the password was guessed or stolen."
      },
      {
        id: "M1-E04",
        time: "09:05:35",
        event: "USER_CREATED",
        user: "admin",
        ip: "185.210.44.10",
        location: "Moscow",
        device: "SERVER-DC01",
        details: "Created svc_backup2 and added it to Administrators.",
        answer: "New Admin Account",
        severity: "Critical",
        explanation:
          "A new privileged account created from the suspicious session is likely attacker persistence."
      },
      {
        id: "M1-E05",
        time: "09:06:12",
        event: "POWERSHELL_EXECUTION",
        user: "svc_backup2",
        ip: "185.210.44.10",
        location: "Moscow",
        device: "SERVER-DC01",
        details: "powershell.exe launched with an encoded command.",
        answer: "Suspicious PowerShell",
        severity: "High",
        explanation:
          "Encoded PowerShell executed by the newly created administrator account is highly suspicious."
      },
      {
        id: "M1-E06",
        time: "09:10:21",
        event: "POWERSHELL_EXECUTION",
        user: "it_support",
        ip: "192.168.1.5",
        location: "Dublin",
        device: "HELPDESK-01",
        details: "Get-Service executed during approved maintenance.",
        answer: "Normal Activity",
        severity: "Low",
        explanation:
          "This was approved support activity from a trusted account, device and internal IP."
      }
    ]
  },
  {
    id: 2,
    title: "Inbox Intruder",
    difficulty: "Easy",
    reward: 700,
    description:
      "Trace a phishing campaign from the first malicious email to mailbox persistence.",
    options: [
      "Normal Activity",
      "Phishing",
      "Credential Compromise",
      "Malicious Attachment",
      "Mail Forwarding Rule"
    ],
    events: [
      {
        id: "M2-E01",
        time: "10:02:11",
        event: "EMAIL_RECEIVED",
        user: "sarah",
        ip: "40.92.72.18",
        location: "External",
        device: "MAIL-GW",
        details: "Invoice email received from billing@micr0soft-support.com.",
        answer: "Phishing",
        severity: "High",
        explanation:
          "The lookalike sender domain and invoice lure are strong phishing indicators."
      },
      {
        id: "M2-E02",
        time: "10:04:29",
        event: "ATTACHMENT_OPENED",
        user: "sarah",
        ip: "192.168.1.42",
        location: "Dublin",
        device: "SARAH-LT",
        details: "Invoice_8841.xlsm opened and macros were enabled.",
        answer: "Malicious Attachment",
        severity: "Critical",
        explanation:
          "A macro-enabled spreadsheet from a suspicious sender is a common malware delivery method."
      },
      {
        id: "M2-E03",
        time: "10:06:55",
        event: "LOGIN_SUCCESS",
        user: "sarah",
        ip: "103.27.184.19",
        location: "Singapore",
        device: "UNKNOWN",
        details: "Mailbox login from a new device three minutes after the attachment opened.",
        answer: "Credential Compromise",
        severity: "Critical",
        explanation:
          "The unfamiliar location, device and timing indicate that Sarah's credentials were likely stolen."
      },
      {
        id: "M2-E04",
        time: "10:08:32",
        event: "MAIL_RULE_CREATED",
        user: "sarah",
        ip: "103.27.184.19",
        location: "Singapore",
        device: "UNKNOWN",
        details: "Created rule: forward finance emails to auditbox@proton.me.",
        answer: "Mail Forwarding Rule",
        severity: "Critical",
        explanation:
          "Attackers often create forwarding rules to steal messages and maintain silent access."
      },
      {
        id: "M2-E05",
        time: "10:12:08",
        event: "EMAIL_SENT",
        user: "john",
        ip: "192.168.1.31",
        location: "Dublin",
        device: "JOHN-LT",
        details: "Routine project update sent to an internal distribution list.",
        answer: "Normal Activity",
        severity: "Low",
        explanation:
          "This is expected internal mail activity from a known user and device."
      },
      {
        id: "M2-E06",
        time: "10:15:44",
        event: "EMAIL_RECEIVED",
        user: "michael",
        ip: "52.96.15.10",
        location: "External",
        device: "MAIL-GW",
        details: "Password expiry warning links to novacore-login.verify-user.net.",
        answer: "Phishing",
        severity: "High",
        explanation:
          "The urgent password warning and unrelated link domain are classic phishing indicators."
      }
    ]
  },
  {
    id: 3,
    title: "Ransomware Countdown",
    difficulty: "Medium",
    reward: 950,
    description:
      "Reconstruct a ransomware infection chain and separate attack activity from routine operations.",
    options: [
      "Normal Activity",
      "Suspicious PowerShell",
      "Ransomware",
      "Data Exfiltration",
      "Persistence"
    ],
    events: [
      {
        id: "M3-E01",
        time: "23:40:03",
        event: "POWERSHELL_EXECUTION",
        user: "michael",
        ip: "192.168.1.55",
        location: "Dublin",
        device: "MICHAEL-LT",
        details: "PowerShell downloaded payload.dat from an unknown domain.",
        answer: "Suspicious PowerShell",
        severity: "High",
        explanation:
          "PowerShell downloading an unknown payload is a strong execution-stage indicator."
      },
      {
        id: "M3-E02",
        time: "23:41:20",
        event: "SCHEDULED_TASK_CREATED",
        user: "michael",
        ip: "192.168.1.55",
        location: "Dublin",
        device: "MICHAEL-LT",
        details: "Task named WindowsUpdateCheck launches payload.dat at logon.",
        answer: "Persistence",
        severity: "High",
        explanation:
          "The scheduled task is designed to relaunch the malicious payload after restart or logon."
      },
      {
        id: "M3-E03",
        time: "23:45:49",
        event: "ARCHIVE_CREATED",
        user: "michael",
        ip: "192.168.1.55",
        location: "Dublin",
        device: "MICHAEL-LT",
        details: "Sensitive finance documents compressed into records.zip.",
        answer: "Data Exfiltration",
        severity: "High",
        explanation:
          "Staging sensitive documents in an archive commonly precedes data theft."
      },
      {
        id: "M3-E04",
        time: "23:47:18",
        event: "OUTBOUND_TRANSFER",
        user: "michael",
        ip: "45.12.88.201",
        location: "External",
        device: "MICHAEL-LT",
        details: "records.zip uploaded to an unapproved file-sharing service.",
        answer: "Data Exfiltration",
        severity: "Critical",
        explanation:
          "The archive was transferred to an external, unapproved destination."
      },
      {
        id: "M3-E05",
        time: "23:50:01",
        event: "MASS_FILE_RENAME",
        user: "michael",
        ip: "192.168.1.55",
        location: "Dublin",
        device: "MICHAEL-LT",
        details: "1,846 documents renamed with the .locked extension.",
        answer: "Ransomware",
        severity: "Critical",
        explanation:
          "Mass extension changes are a strong indicator of ransomware encryption."
      },
      {
        id: "M3-E06",
        time: "23:52:12",
        event: "ANTIVIRUS_SCAN",
        user: "system",
        ip: "127.0.0.1",
        location: "Local",
        device: "SERVER-DC01",
        details: "Scheduled antivirus scan completed with no detections.",
        answer: "Normal Activity",
        severity: "Low",
        explanation:
          "This is a scheduled system task and is unrelated to the compromised endpoint."
      }
    ]
  },
  {
    id: 4,
    title: "Password Spray",
    difficulty: "Medium",
    reward: 1100,
    description: "Detect low-and-slow authentication attempts across many user accounts.",
    options: [],
    events: []
  },
  {
    id: 5,
    title: "Insider After Hours",
    difficulty: "Hard",
    reward: 1350,
    description: "Investigate unusual access to sensitive files by a trusted employee.",
    options: [],
    events: []
  },
  {
    id: 6,
    title: "Cloud Control",
    difficulty: "Hard",
    reward: 1500,
    description: "Investigate suspicious administrator changes inside a cloud tenant.",
    options: [],
    events: []
  },
  {
    id: 7,
    title: "Lateral Movement",
    difficulty: "Expert",
    reward: 1800,
    description: "Track an attacker moving between internal systems using stolen credentials.",
    options: [],
    events: []
  },
  {
    id: 8,
    title: "Incident Zero",
    difficulty: "Expert",
    reward: 2200,
    description: "Combine authentication, endpoint and network evidence in a full incident response.",
    options: [],
    events: []
  }
];

export default missions;
