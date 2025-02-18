import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`} className="card">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="card-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
