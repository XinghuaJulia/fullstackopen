const Persons = (props) => {
    return (
      <div>
        {props.persons.filter(person => person.name.toLowerCase().includes(props.search))
                    .map(person => 
                            <li key={person.name}>{person.name} {person.number} 
                              <button onClick={() => props.onDelete(person.id)}>delete</button> 
                            </li>)}
      </div>
    )
}

export default Persons