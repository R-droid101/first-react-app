import React, { useState } from 'react'
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
  const [findName, setFindName] = useState('')

  const userExists= (arr, obj) => {
    return arr.some(function (el) {
      return el.name === obj.name;
    });
  }

  const addName = (e) => {
    e.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    if (userExists(persons, newObject)) {
      alert(`${newName} has already been added to the phone book`);
    } else {
      setPersons(persons.concat(newObject));
      setNewNumber("");
    }
    setNewName("");
  };

  const searchName = e => setFindName(e.target.value)
  const handleAddName = e => setNewName(e.target.value)
  const handleAddNumber = e => setNewNumber(e.target.value)

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter findName={findName} searchName={searchName}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleAddName={handleAddName} newNumber={newNumber} handleAddNumber={handleAddNumber}/>
      <h2>Numbers</h2>
      <Persons findName={findName} persons={persons}/>
    </div>
  )
}

export default App