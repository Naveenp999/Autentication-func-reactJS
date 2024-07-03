import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const login = async () => {
    const {history} = props
    console.log(history)
    const p = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const obj = {
      method: 'POST',
      body: JSON.stringify(p),
    }
    const response = await fetch('https://apis.ccbp.in/login', obj)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    history.replace('/')
  }

  return Cookies.get('jwt_token') === undefined ? (
    <div className="container">
      <h1 className="main-heading">Please Login</h1>
      <button className="button" type="button" onClick={login}>
        Login with Sample Creds
      </button>
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default Login
