import './index.css'

const Message = props => {
  const {isloggedin} = props

  return (
    <h1 className="heading">{isloggedin ? 'Welcome user' : 'Please Login'}</h1>
  )
}

export default Message
