import { Search } from "lucide-react";

function EvidencePanel({ event, children }) {
  return (
    <section className="panel evidencePanel">
      <div className="panelTitle">
        <div>
          <Search size={19} />
          <span>Evidence Inspector</span>
        </div>

        <small>{event.id}</small>
      </div>

      <div className="evidenceHero">
        <div className="eventSignal">01</div>

        <div>
          <span className={`severityTag ${event.severity.toLowerCase()}`}>
            {event.severity}
          </span>

          <h2>{event.event}</h2>
          <p>{event.details}</p>
        </div>
      </div>

      <div className="detailsGrid">
        <div>
          <span>User</span>
          <strong>{event.user}</strong>
        </div>

        <div>
          <span>IP Address</span>
          <strong>{event.ip}</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>{event.location}</strong>
        </div>

        <div>
          <span>Device</span>
          <strong>{event.device}</strong>
        </div>

        <div>
          <span>Timestamp</span>
          <strong>{event.time}</strong>
        </div>

        <div>
          <span>Event ID</span>
          <strong>{event.id}</strong>
        </div>
      </div>

      {children}
    </section>
  );
}

export default EvidencePanel;