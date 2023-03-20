const Logout = props => {
  const {logout} = props
  const onClickLogOutButton = () => {
    logout()
  }

  return (
    <button type="button" onClick={onClickLogOutButton}>
      Logout
    </button>
  )
}

export default Logout
