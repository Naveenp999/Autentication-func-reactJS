import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="list-container">
      <li className="item"> <Link to="/">Home</Link> </li>
    
      <li className="item"> <Link to="/about">About</Link> </li>
  </ul>
)

export default Header
