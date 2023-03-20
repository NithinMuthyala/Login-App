import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  logout = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  login = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isloggedin={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.logout} />
          ) : (
            <Login login={this.login} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
