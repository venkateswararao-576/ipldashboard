import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = details
  const change = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="opponent-card">
      <img
        src={competingTeamLogo}
        className="image-card"
        alt={`competing team ${competingTeam}`}
      />
      <p className="title">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={change}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
