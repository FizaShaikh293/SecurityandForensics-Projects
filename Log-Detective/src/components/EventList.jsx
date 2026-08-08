import {
  CheckCircle2,
  CircleDot,
  FileSearch,
  LockKeyhole,
  MailWarning,
  TerminalSquare,
  UserPlus,
} from "lucide-react";

function eventIcon(type) {
  if (type.includes("LOGIN_FAILED")) return <LockKeyhole size={18} />;
  if (type.includes("LOGIN_SUCCESS")) return <CheckCircle2 size={18} />;
  if (type.includes("USER_CREATED")) return <UserPlus size={18} />;
  if (type.includes("POWERSHELL")) return <TerminalSquare size={18} />;
  if (type.includes("EMAIL") || type.includes("MAIL")) return <MailWarning size={18} />;
  return <CircleDot size={18} />;
}

function EventList({ events, selectedId, answers, onSelectEvent }) {
  return (
    <section className="panel logPanel">
      <div className="panelTitle">
        <div>
          <FileSearch size={19} />
          <span>Event Queue</span>
        </div>
        <small>Select evidence to inspect</small>
      </div>

      <div className="eventList">
        {events.map((event) => {
          const answer = answers[event.id];

          return (
            <button
              type="button"
              key={event.id}
              className={`eventRow ${selectedId === event.id ? "active" : ""}`}
              onClick={() => onSelectEvent(event.id)}
            >
              <span className="eventIcon">{eventIcon(event.event)}</span>

              <span className="eventPrimary">
                <strong>{event.event}</strong>
                <small>{event.id} · {event.user}</small>
              </span>

              <span className="eventTime">{event.time}</span>

              <span
                className={`reviewState ${
                  answer ? (answer.correct ? "correct" : "wrong") : ""
                }`}
              >
                {answer ? (answer.correct ? "✓" : "×") : "•"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default EventList;
