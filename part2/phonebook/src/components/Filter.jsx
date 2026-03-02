const Filter = (props) => {
    return (
      <form>
        filter shown with <input value={props.search} onChange={props.onChange}/>
      </form>
    )
}

export default Filter