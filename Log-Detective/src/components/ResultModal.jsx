import { RotateCcw, SearchCheck } from "lucide-react";

function ResultModal({
  xp,
  accuracy,
  correct,
  total,
  onReview,
  onRestart,
  onMissions,
}) {
  const rank =
    accuracy >= 95
      ? "Elite Threat Hunter"
      : accuracy >= 80
        ? "SOC Detective"
        : accuracy >= 60
          ? "Junior SOC Analyst"
          : "SOC Rookie";

  return (
    <section className="resultsCard">
      <div className="statusBadge">MISSION COMPLETE</div>
      <h1>{rank}</h1>
      <p>Your investigation report has been generated.</p>

      <div className="resultStats">
        <div>
          <span>FINAL XP</span>
          <strong>{xp}</strong>
        </div>
        <div>
          <span>ACCURACY</span>
          <strong>{accuracy}%</strong>
        </div>
        <div>
          <span>CORRECT</span>
          <strong>{correct}/{total}</strong>
        </div>
      </div>

      <div className="resultActions">
        <button type="button" className="secondaryButton" onClick={onReview}>
          <SearchCheck size={18} />
          REVIEW
        </button>
        <button type="button" className="secondaryButton" onClick={onRestart}>
          <RotateCcw size={18} />
          RETRY
        </button>
        <button type="button" className="playButton noMargin" onClick={onMissions}>
          MISSIONS
        </button>
      </div>
    </section>
  );
}

export default ResultModal;
