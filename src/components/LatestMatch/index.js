import './index.css'

const LatestMatch = props => {
  const {latestItems} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manoftheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestItems
  return (
    <div className="latest-match-card">
      <div className="team-name-date">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="status">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="detail-container">
        <p className="date">First Innings</p>
        <p className="venue">{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p className="venue">{secondInnings}</p>
        <p className="date">Man of the Match</p>
        <p className="venue">{manoftheMatch}</p>
        <p className="date">Umpires</p>
        <p className="venue">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
