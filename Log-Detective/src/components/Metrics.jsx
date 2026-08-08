import { Activity, AlertTriangle, Radar, ShieldAlert } from "lucide-react";

function Metrics({ totalEvents, critical, high, accuracy }) {
  return (
    <section className="metricRow">
      <article className="metricCard">
        <Activity size={22} />
        <span>Total Events</span>
        <strong>{totalEvents}</strong>
      </article>

      <article className="metricCard danger">
        <ShieldAlert size={22} />
        <span>Critical</span>
        <strong>{critical}</strong>
      </article>

      <article className="metricCard warning">
        <AlertTriangle size={22} />
        <span>High Risk</span>
        <strong>{high}</strong>
      </article>

      <article className="metricCard safe">
        <Radar size={22} />
        <span>Accuracy</span>
        <strong>{accuracy}%</strong>
      </article>
    </section>
  );
}

export default Metrics;
