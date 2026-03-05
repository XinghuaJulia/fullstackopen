const Notification = (props) => {
  if (props.message === null) {
    return null
  }

  if (props.messageType === "message") {
      return (
        <div className="notification">
            {props.message}
        </div>
  )
  } else {
      return (
        <div className="error">
            {props.message}
        </div>
  )
  }
}

export default Notification