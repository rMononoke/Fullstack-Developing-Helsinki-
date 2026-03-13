import { useState, useEffect } from 'react'
import PersonForm from './components/personsForm'
import Persons from './components/personsShow'
import Filter from './components/filterComponent'
import personServices from './services/serverCommunication'
import Notification from './components/notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)



  useEffect(() => {
    personServices
      .getAll()
      .then(responsedData => {
        setPersons(responsedData)
      })
  }, [])



  const changeNameList = (event) => {
    setNewName(event.target.value)
  }

  const changeNumberList = (event) => {
    setNewNumber(event.target.value)
  }

  const changeFilterValue = (event) => {
  setFilterValue(event.target.value)
}

const personsToShow =
  filterValue.trim() === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      )

      
  
  const addNewName = (event) => {
    event.preventDefault()
    const personId = persons.map(person => parseInt(person.id))
    const nameObject = {name: newName, number: newNumber, id: String(Math.max(...personId) + 1)}

    if (persons.some(person => person.name === nameObject.name)) {
      if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with this one?`)) {
        const oldPersonalId = persons.find(person => person.name === nameObject.name)
        const changedObject = {...oldPersonalId, number: newNumber}

      
        personServices
          .update(changedObject.id, changedObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === changedObject.id ? returnedPerson : person))
            setErrorMessage(`${changedObject.name}'s number updated`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
          .catch(() => {
            setErrorMessage(`${changedObject.name} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
      }
    } else {
      personServices
        .create(nameObject)
        .then(inputData => {
          setPersons(persons.concat(inputData))
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Added ${nameObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    }
  }

  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personServices
      .deleteData(id)
      .then(() => {
        setPersons(persons => persons.filter(person => String(person.id) !== String(id)))
        setErrorMessage(`${name} successfully deleted!`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
      .catch(() => {
            setErrorMessage(`${name} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage}/>

      <Filter currentValue={filterValue} changeCurrentValue={changeFilterValue}/>

      <h2>add a new</h2>

      <PersonForm 
        onSubmit={addNewName}
        nameValue={newName}
        numberValue={newNumber}
        nameInputChange={changeNameList}
        numberInputChange={changeNumberList}
      />

      <h2>Numbers</h2>
      
      <Persons persons={personsToShow} deleteButton={deleteName}/>
    </div>
    
  )
}

export default App
