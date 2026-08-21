
# 🕵️ Log Detective

### 🚨 Turn security logs into a game.

**Log Detective** is a browser-based **SOC investigation game** where players step into the role of a security analyst, investigate noisy security events, identify suspicious activity, classify threats, and make the right calls without drowning in false positives.

Instead of simply reading logs, players **investigate them like a real SOC analyst** — with missions, XP, rankings, and a little neon lighting. 💚

---

## 🧠 What Is Log Detective?

Security Operations Centres deal with huge amounts of events every day. The challenge isn't simply finding *something unusual* — it's determining whether that activity is:

> **🚨 A real threat or ✅ legitimate behaviour?**

Log Detective was built to practise exactly that skill.

Players analyse simulated security events and investigate scenarios involving:

* 🔨 Brute-force attacks
* 🎣 Phishing activity
* ⚡ Suspicious PowerShell execution
* 👤 Rogue administrator accounts
* 🦠 Ransomware indicators
* 👨‍💻 Legitimate user behaviour
* 🚨 Suspicious authentication activity

The game deliberately mixes malicious and legitimate activity to simulate the **noise and uncertainty analysts encounter during real SOC investigations.**

---

## 🎯 Gameplay

Each investigation presents the player with a collection of security events.

The objective is to:

1. 🔍 Analyse the available events
2. 🧩 Identify suspicious patterns
3. 🚨 Determine whether the activity represents a threat
4. 🏷️ Classify the incident
5. ⚠️ Avoid unnecessary false positives
6. ⭐ Earn XP based on investigation accuracy
7. 🏆 Progress through SOC analyst ranks

The better your investigation decisions, the higher your score.

---

## 🕹️ Features

### 🔎 Security Investigation

Explore simulated security events and investigate activity from different users, systems, IP addresses, and event types.

### 🚨 Threat Classification

Identify different types of security incidents and distinguish them from legitimate activity.

### 🧠 SOC Decision Making

The game focuses on **analytical thinking rather than simply clicking suspicious-looking events.**

Players need to consider context, event patterns, timing, and behaviour before making a decision.

### ⭐ XP & Ranking System

Successful investigations reward players with XP and allow them to progress through different analyst levels.

**Can you reach Elite Threat Hunter?**

### ❌ False Positive Penalties

Not every unusual event is malicious.

Incorrectly flagging legitimate behaviour can affect your score, encouraging players to think like real SOC analysts.

### 🎮 Mission-Based Scenarios

Different missions simulate common security incidents and investigation situations encountered by blue teams and SOC analysts.

---

## 🛠️ Tech Stack

| Technology        | Purpose                          |
| ----------------- | -------------------------------- |
| **React**         | Frontend application             |
| **JavaScript**    | Game logic and functionality     |
| **Vite**          | Development and build tooling    |
| **Framer Motion** | Animations and interactions      |
| **Lucide React**  | Icons and interface elements     |
| **HTML**          | Application structure            |
| **CSS**           | Styling and visual design        |
| **JSON**          | Scenario and security event data |
| **Vercel**        | Deployment                       |

---

## 🏗️ Architecture

```text
Security Event Data
        │
        ▼
   Scenario Engine
        │
        ▼
  Investigation UI
        │
        ▼
 Player Analysis
        │
        ├──────────────┐
        ▼              ▼
 Threat Decision    False Positive
        │              │
        └──────┬───────┘
               ▼
         Scoring Engine
               │
               ▼
            XP / Rank
               │
               ▼
       SOC Analyst Progress
```

---

## 🚀 Running Locally

### Clone the repository

```bash
git clone https://github.com/FizaShaikh293/SecurityandForensics-Projects.git
```

### Navigate to Log Detective

```bash
cd SecurityandForensics-Projects/Log-Detective
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide a local development URL where you can launch the game.

---

## 🧪 What I Wanted to Practise

This project was built around a simple question:

> **Can learning SOC investigation feel more like solving a mystery than reading a spreadsheet?**

Through Log Detective, I wanted to practise and demonstrate:

* Security event analysis
* Log investigation
* Threat identification
* Incident classification
* False-positive reduction
* Authentication analysis
* Attack-pattern recognition
* SOC analyst decision-making
* Blue-team investigation concepts
* Interactive security application development

---

## 🤖 Development

The project was developed using **React, JavaScript and Vite**, with **Claude Code** assisting with scaffolding, UI iteration, debugging, and development workflows.

The security scenarios, investigation logic, gameplay mechanics, and overall concept were designed around practising SOC investigation skills.

---

## 🔮 Future Improvements

Potential future additions include:

* [ ] Realistic SIEM-style log ingestion
* [ ] MITRE ATT&CK technique mapping
* [ ] Threat intelligence integration
* [ ] Real-time event streams
* [ ] More complex investigation chains
* [ ] Multi-stage incidents
* [ ] Leaderboards
* [ ] Daily SOC challenges
* [ ] Multiplayer investigation mode
* [ ] AI-generated investigation scenarios
* [ ] Analyst performance dashboards

---

## 🛡️ Project Goal

Log Detective is ultimately about learning to **think like a SOC analyst**.

Real security environments aren't filled exclusively with obvious attacks. Analysts have to work through enormous amounts of normal activity while identifying the small number of events that actually matter.

**Log Detective turns that challenge into a game.**

> 🕵️ **Investigate. Classify. Don't overreact. Hunt the threat.**

---

## 👩‍💻 Author

### Fiza Shaikh

**Cybersecurity • Digital Forensics • Blockchain Security • Machine Learning**

📧 [fiza.sk293@gmail.com](mailto:fiza.sk293@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/fizashaikh293/)
🔗 [GitHub](https://github.com/FizaShaikh293)

---

## ⭐ Try It

🎮 **[Play Log Detective]([https://lnkd.in/dPRZWcTK](https://log-detective.vercel.app/))**

**Think you can beat the game?**

Start as a **SOC Rookie**.

Finish as an **Elite Threat Hunter.** 🕵️‍♀️🚨
