const Login = props => {
  const {login} = props
  const onClickLoginButton = () => {
    login()
  }
  return (
    <button type="button" onClick={onClickLoginButton}>
      login
    </button>
  )
}

export default Login
