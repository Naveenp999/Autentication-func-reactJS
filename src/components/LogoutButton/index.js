import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const {history} = props
  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="button" type="button" onClick={logout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
