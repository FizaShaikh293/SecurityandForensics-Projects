import { ChevronRight } from "lucide-react";

function ClassificationPanel({
  options,
  selectedEvent,
  answer,
  onSubmitAnswer,
  onNext,
  allAnswered,
}) {
  return (
    <div className="classificationBox">
      <span className="eyebrow">CLASSIFY THIS EVENT</span>

      <div className="optionGrid">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className="choiceButton"
            disabled={Boolean(answer)}
            onClick={() => onSubmitAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {answer && (
        <div className={`answerBox ${answer.correct ? "success" : "failure"}`}>
          <strong>
            {answer.correct ? "Correct classification" : "Incorrect classification"}
          </strong>
          <p>{selectedEvent.explanation}</p>
          <span>{answer.earned > 0 ? "+" : ""}{answer.earned} XP</span>
        </div>
      )}

      {answer && (
        <button type="button" className="nextButton" onClick={onNext}>
          {allAnswered ? "VIEW RESULTS" : "NEXT UNREVIEWED EVENT"}
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}

export default ClassificationPanel;
