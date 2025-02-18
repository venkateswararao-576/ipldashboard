import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isloading: true, listOfTeams: {}}

  componentDidMount() {
    this.getiplteams()
  }

  getiplteams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const update = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isloading: false, listOfTeams: update})
  }

  render() {
    const {isloading, listOfTeams} = this.state
    return (
      <div className="container">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="heading">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="head">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {listOfTeams.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
