import { ArrowLeft, LockKeyhole, Play, ShieldCheck } from "lucide-react";

function MissionSelect({
  missions,
  unlockedMission,
  onSelectMission,
  onBack,
}) {
  return (
    <main className="missionSelectScreen">
      <header className="missionSelectHeader">
        <div>
          <span className="eyebrow">SOC CAMPAIGN</span>
          <h1>Select Mission</h1>
          <p>Complete investigations to unlock the next case.</p>
        </div>

        <button type="button" className="secondaryButton compactButton" onClick={onBack}>
          <ArrowLeft size={17} />
          MAIN MENU
        </button>
      </header>

      <section className="missionGrid">
        {missions.map((mission) => {
          const unlocked = mission.id <= unlockedMission && mission.events.length > 0;

          return (
            <article
              key={mission.id}
              className={`missionCard ${unlocked ? "unlocked" : "locked"}`}
            >
              <div className="missionCardTop">
                <span>MISSION {String(mission.id).padStart(2, "0")}</span>
                {unlocked ? <ShieldCheck size={20} /> : <LockKeyhole size={20} />}
              </div>

              <h2>{mission.title}</h2>
              <p>{mission.description}</p>

              <div className="missionMeta">
                <div>
                  <span>DIFFICULTY</span>
                  <strong>{mission.difficulty}</strong>
                </div>
                <div>
                  <span>REWARD</span>
                  <strong>{mission.reward} XP</strong>
                </div>
                <div>
                  <span>EVIDENCE</span>
                  <strong>{mission.events.length || "—"}</strong>
                </div>
              </div>

              <button
                type="button"
                className={unlocked ? "missionPlayButton" : "missionLockedButton"}
                disabled={!unlocked}
                onClick={() => onSelectMission(mission)}
              >
                {unlocked ? (
                  <>
                    <Play size={17} fill="currentColor" />
                    START MISSION
                  </>
                ) : (
                  <>
                    <LockKeyhole size={17} />
                    LOCKED
                  </>
                )}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default MissionSelect;
