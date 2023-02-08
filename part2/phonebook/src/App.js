import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsServer from './services/PersonsServer'
import './index.css'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
// import Course from './components/Subcomponents'


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    PersonsServer
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handlefilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handelDeleted = (id) => {
    const personToDelete = persons.find(element => element.id == id)
    console.log("handelDeleted name: ", personToDelete)
    if (window.confirm(`Delete ${ personToDelete.name} ?`)) {
      PersonsServer.deletePerson(id)
      .then(() => {
        setPersons(
          persons.filter(person => (person.id !== id ) )
        )
        setSuccessMessage(`Delete ${ personToDelete.name} went well`)
        setTimeout(() => 
          setSuccessMessage(null), 5000
        )
      })
      .catch(error => {
        setErrorMessage(
          `something went wrong ${error}'`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      // window.location.reload()
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const found = persons.find(element => element.name == newName);
    // person with the same name is already in phonebook
    if(found !== undefined) {
      console.log("!undefined: ", found);
      if (window.confirm(`${newName} is alrady added to phonebook, replace the old number with a new one?`)) {
        const personUpdate = {
          name: newName,
          number: newNumber,
          id: found.id,
        }
        PersonsServer
        .update(found.id, personUpdate)
        .then(returnedPerson => {
          setPersons(
            persons.map(person => (person.id !== found.id ? person : personUpdate) )
          )
          setSuccessMessage(`Uppdated ${returnedPerson.name} phonenumber`)
          setTimeout(() => 
            setSuccessMessage(null), 5000
          )
          setNewName("")
          setNewNumber("")
          console.log(persons);
          
        })
        .catch(error => {
          setErrorMessage(
            `Information of '${newName}' has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
          
      }
    }
    // add new person
    else {
      console.log("found: ", found);

      const personCreate = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      PersonsServer
        .create(personCreate)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccessMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => 
            setSuccessMessage(null), 5000
          )
          console.log("setAdded 2")
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setErrorMessage(
            `something went wrong: ${error.response.data.error}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlefilterChange={handlefilterChange} />

      <h2>add a new</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage}/>
      <PersonForm addPerson={addPerson} newName={newName} handleNewNameChange={handleNewNameChange} newNumber={newNumber} handleNewNumberChange={handleNewNumberChange} />
      
      <h2>Numbers</h2>
        <Persons persons={persons} filter={filter} handelDeleted={handelDeleted}/>
    </div>
  )
}

export default App
