import './index.css'
import LogoutButton from '../LogoutButton'
import {withRouter} from 'react-router-dom'
import Header from '../Header'

const Home = () => (
  <div className="container">
    <Header />
    <h1 className="main-heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default withRouter(Home)
