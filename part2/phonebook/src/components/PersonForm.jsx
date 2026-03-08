const PersonForm = (props) => {
    return (
    <form>
        <div>
          name: <input value={props.name} onChange={props.onChangeName}/>
        </div>
        <div>
          number: <input value={props.number} onChange={props.onChangeNumber}/>
        </div>
        <div>
          <button type="submit" onClick={props.onClick}>add</button>
        </div>
      </form>
    )
}

export default PersonForm