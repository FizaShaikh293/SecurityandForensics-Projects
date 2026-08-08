function Header({ missionTitle, xp, streak, answered, total }) {
  return (
    <header className="socHeader">
      <div>
        <span className="eyebrow">ACTIVE INCIDENT</span>
        <h1>{missionTitle}</h1>
      </div>

      <div className="headerStats">
        <div>
          <span>XP</span>
          <strong>{xp}</strong>
        </div>
        <div>
          <span>STREAK</span>
          <strong>{streak}</strong>
        </div>
        <div>
          <span>PROGRESS</span>
          <strong>{answered}/{total}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
