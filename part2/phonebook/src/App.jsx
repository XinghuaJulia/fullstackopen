import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import noteService from '../services/notes'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('message')

  useEffect(() => {
    console.log('getting all notes...')
    noteService
      .getAll()
      .then(data => setPersons(data))
  }, [])
  console.log('render', persons.length, 'persons', persons)

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
    console.log("adding new names & numbers...", newName)

    const person = {
                    name: newName,
                    number: newNumber,
                  }
    
    const onlyName = persons.map(person => person.name)
    console.log(onlyName);
    

    if (onlyName.indexOf(newName) === -1) {
      // does not exist, safe to add
      
      noteService
        .create(person)
        .then(data => {
          console.log(data)
          setPersons(persons.concat(data))
          setMessage(`${person.name} successfully added to the server`)
          setMessageType('message')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    } else {
      // exists, shows confirmation if want to update or not
      confirm(`${person.name} is alr in the phone book liao, replace old number with new one?`)

      console.log('updating person...')

      const oldPerson = persons.find(person => person.name === newName)
      const changedPerson = {...oldPerson, number: newNumber}

      noteService
        .updatePerson(changedPerson.id, changedPerson)
        .then(response => {
          setPersons(persons.map(person => person.name === newName ? response : person))
          setMessage(`${person.name} successfully updated the number to ${newNumber}`)
          setMessageType('message')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

    }

    setNewName('')
    setNewNumber('')
  }

  const handlePersonDelete = id => {
    const filtered = persons.filter(person => person.id === id)[0]
    console.log(filtered)
    confirm(`You damn sure you wanna delete this guy: ${filtered.name}`)

    console.log('deleting person...')

    noteService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        setMessage(
          `Person '${filtered.name}' already removed from server liao`
        )
        setMessageType('error')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <Notification message={message} messageType={messageType}/>

      <h2>Phonebook</h2>
      <Filter value={search} onChange={handleSearchChange} />

      <h2>add a new</h2>

      <PersonForm name={newName} onChangeName={handleNoteChange}
            number={newNumber} onChangeNumber={handleNumberChange}
            onClick={addNames}/>

      <h2>Numbers</h2>

      <Persons persons={persons} search={search} onDelete={handlePersonDelete} />

      ...
    </div>
  )
}

export default App