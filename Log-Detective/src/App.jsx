import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header.jsx";
import Metrics from "./components/Metrics.jsx";
import EventList from "./components/EventList.jsx";
import EvidencePanel from "./components/EvidencePanel.jsx";
import ClassificationPanel from "./components/ClassificationPanel.jsx";
import ResultModal from "./components/ResultModal.jsx";
import MissionSelect from "./pages/MissionSelect.jsx";
import missions from "./data/missions.js";

const bootMessages = [
  "Initializing analyst workstation...",
  "Connecting to SIEM...",
  "Loading threat intelligence...",
  "Validating detection rules...",
  "Decrypting case files...",
  "Access granted."
];

function App() {
  const [screen, setScreen] = useState("home");
  const [bootStep, setBootStep] = useState(0);
  const [unlockedMission, setUnlockedMission] = useState(() => {
    const saved = Number(localStorage.getItem("logDetectiveUnlocked"));
    return Number.isFinite(saved) && saved > 0 ? saved : 1;
  });
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState("");

  const events = selectedMission?.events ?? [];
  const selectedEvent =
    events.find((event) => event.id === selectedId) ?? events[0] ?? null;

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((answer) => answer.correct).length;
  const accuracy =
    answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  const alertCounts = useMemo(
    () => ({
      critical: events.filter((event) => event.severity === "Critical").length,
      high: events.filter((event) => event.severity === "High").length,
    }),
    [events],
  );

  useEffect(() => {
    if (screen !== "boot") return undefined;

    if (bootStep === bootMessages.length - 1) {
      const timer = window.setTimeout(() => setScreen("missions"), 650);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(
      () => setBootStep((current) => current + 1),
      500,
    );

    return () => window.clearTimeout(timer);
  }, [screen, bootStep]);

  const beginBoot = () => {
    setBootStep(0);
    setScreen("boot");
  };

  const chooseMission = (mission) => {
    setSelectedMission(mission);
    setSelectedId(mission.events[0].id);
    setAnswers({});
    setXp(0);
    setStreak(0);
    setFeedback("");
    setScreen("briefing");
  };

  const submitAnswer = (choice) => {
    if (!selectedEvent || answers[selectedEvent.id]) return;

    const correct = choice === selectedEvent.answer;
    const earned = correct ? 100 + Math.min(streak * 15, 75) : -25;

    setAnswers((current) => ({
      ...current,
      [selectedEvent.id]: { choice, correct, earned },
    }));

    setXp((current) => Math.max(0, current + earned));
    setStreak(correct ? streak + 1 : 0);
    setFeedback(correct ? `Threat identified · +${earned} XP` : "Incorrect classification · -25 XP");

    window.setTimeout(() => setFeedback(""), 2000);
  };

  const nextEvent = () => {
    const currentIndex = events.findIndex((event) => event.id === selectedEvent.id);

    for (let offset = 1; offset <= events.length; offset += 1) {
      const candidate = events[(currentIndex + offset) % events.length];

      if (!answers[candidate.id]) {
        setSelectedId(candidate.id);
        return;
      }
    }

    const nextUnlock = Math.min(missions.length, Math.max(unlockedMission, selectedMission.id + 1));
    setUnlockedMission(nextUnlock);
    localStorage.setItem("logDetectiveUnlocked", String(nextUnlock));
    setScreen("results");
  };

  const retryMission = () => {
    setSelectedId(selectedMission.events[0].id);
    setAnswers({});
    setXp(0);
    setStreak(0);
    setFeedback("");
    setScreen("briefing");
  };

  return (
    <div className="app">
      <div className="grid" />
      <div className="scanline" />

      <AnimatePresence mode="wait">
        {screen === "home" && (
          <motion.main
            key="home"
            className="homeScreen"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="homeBadge">SYSTEM ONLINE</div>
            <h1>LOG DETECTIVE</h1>
            <p>SOC investigation training disguised as a cyber mystery game.</p>

            <div className="homeFeatures">
              <span>ANALYSE</span>
              <span>CLASSIFY</span>
              <span>RESPOND</span>
            </div>

            <button type="button" className="playButton" onClick={beginBoot}>
              ENTER THE SOC
            </button>
          </motion.main>
        )}

        {screen === "boot" && (
          <motion.section
            key="boot"
            className="bootScreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="eyebrow">LOG DETECTIVE // SECURE BOOT</span>
            <h2>{bootMessages[bootStep]}</h2>

            <div className="bootLines">
              {bootMessages.slice(0, bootStep + 1).map((message) => (
                <p key={message}>✓ {message}</p>
              ))}
            </div>

            <div className="bootProgress">
              <motion.div
                className="bootProgressFill"
                animate={{
                  width: `${((bootStep + 1) / bootMessages.length) * 100}%`,
                }}
              />
            </div>
          </motion.section>
        )}

        {screen === "missions" && (
          <motion.div
            key="missions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MissionSelect
              missions={missions}
              unlockedMission={unlockedMission}
              onSelectMission={chooseMission}
              onBack={() => setScreen("home")}
            />
          </motion.div>
        )}

        {screen === "briefing" && selectedMission && (
          <motion.main
            key="briefing"
            className="briefingScreen"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="briefingTop">
              <span className="statusBadge">INCOMING TRANSMISSION</span>
              <span>CASE #{String(selectedMission.id).padStart(3, "0")}</span>
            </div>

            <h1>{selectedMission.title}</h1>
            <p>{selectedMission.description}</p>

            <div className="missionDetails">
              <div>
                <span>DIFFICULTY</span>
                <strong>{selectedMission.difficulty}</strong>
              </div>
              <div>
                <span>REWARD</span>
                <strong>{selectedMission.reward} XP</strong>
              </div>
              <div>
                <span>EVIDENCE</span>
                <strong>{selectedMission.events.length} EVENTS</strong>
              </div>
            </div>

            <div className="briefingObjectives">
              <span className="eyebrow">MISSION OBJECTIVES</span>
              <p>01 · Review every event in the queue.</p>
              <p>02 · Separate malicious activity from normal operations.</p>
              <p>03 · Reconstruct the attack chain with minimal false positives.</p>
            </div>

            <div className="resultActions">
              <button type="button" className="secondaryButton" onClick={() => setScreen("missions")}>
                BACK
              </button>
              <button type="button" className="playButton noMargin" onClick={() => setScreen("investigation")}>
                ACCEPT MISSION
              </button>
            </div>
          </motion.main>
        )}

        {screen === "investigation" && selectedMission && selectedEvent && (
          <motion.main
            key="investigation"
            className="socShell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header
              missionTitle={selectedMission.title}
              xp={xp}
              streak={streak}
              answered={answeredCount}
              total={events.length}
            />

            <Metrics
              totalEvents={events.length}
              critical={alertCounts.critical}
              high={alertCounts.high}
              accuracy={accuracy}
            />

            <section className="dashboardGrid">
              <EventList
                events={events}
                selectedId={selectedId}
                answers={answers}
                onSelectEvent={setSelectedId}
              />

              <EvidencePanel event={selectedEvent}>
                <ClassificationPanel
                  options={selectedMission.options}
                  selectedEvent={selectedEvent}
                  answer={answers[selectedEvent.id]}
                  onSubmitAnswer={submitAnswer}
                  onNext={nextEvent}
                  allAnswered={answeredCount === events.length}
                />
              </EvidencePanel>
            </section>
          </motion.main>
        )}

        {screen === "results" && selectedMission && (
          <motion.main
            key="results"
            className="resultsScreen"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultModal
              xp={xp}
              accuracy={accuracy}
              correct={correctCount}
              total={events.length}
              onReview={() => setScreen("investigation")}
              onRestart={retryMission}
              onMissions={() => setScreen("missions")}
            />
          </motion.main>
        )}
      </AnimatePresence>

      {feedback && <div className="toast">{feedback}</div>}
    </div>
  );
}

export default App;
