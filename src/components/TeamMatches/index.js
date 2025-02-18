import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import Piechart from '../piechart'
import './index.css'

class TeamMatches extends Component {
  state = {
    isloading: true,
    matchdetails: {},
    banner: {},
    matchcards: {},
  }

  componentDidMount() {
    this.getiplteams()
  }

  getiplteams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const matchdetails = data.latest_match_details
    const matchinfo = {
      competingTeam: matchdetails.competing_team,
      competingTeamLogo: matchdetails.competing_team_logo,
      date: matchdetails.date,
      firstInnings: matchdetails.first_innings,
      manoftheMatch: matchdetails.man_of_the_match,
      result: matchdetails.result,
      secondInnings: matchdetails.second_innings,
      umpires: matchdetails.umpires,
      venue: matchdetails.venue,
      id: matchdetails.id,
    }
    const recentmatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      result: each.result,
      id: each.id,
    }))

    this.setState({
      matchdetails: matchinfo,
      matchcards: recentmatches,
      banner: data.team_banner_url,
      isloading: false,
    })
  }

  render() {
    const {isloading, matchdetails, banner, matchcards} = this.state

    return (
      <div className="team-match-container">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match">
            <img src={banner} className="banner" alt="team banner" />
            <LatestMatch latestItems={matchdetails} />
            <ul className="match-cards">
              {matchcards.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>

            <Piechart matches={matchcards} />
            <Link to="/">
              <button className="back-btn" type="button">
                Back
              </button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
