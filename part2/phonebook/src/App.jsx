import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)    
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)    
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    
  }

  const addNames = (event) => {
    event.preventDefault()
    console.log("new name added", newName)

    const person = {
                    name: newName,
                    number: newNumber,
                    id: persons.length
                  }
    
    const onlyName = persons.map(person => person.name)
    console.log(onlyName);
    

    if (onlyName.indexOf(newName) === -1) {
      // does not exist, safe to add
      setPersons(persons.concat(person))
    } else {
      // exists, shows alert
      alert(`${newName} in the phonebook liao!`)
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={search} onChange={handleSearchChange} />

      <h2>add a new</h2>

      <PersonForm name={newName} onChangeName={handleNoteChange}
            number={newNumber} onChangeNumber={handleNumberChange}
            onClick={addNames}/>

      <h2>Numbers</h2>

      <Persons persons={persons} search={search} />

      ...
    </div>
  )
}

export default App