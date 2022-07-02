import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import pageService from "./services/pageServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");

  useEffect(() => {
    pageService
      .retrieveData()
      .then((contactCard) => {
        setPersons(contactCard);
      })
      .catch(() => console.log("error"));
  }, []);

  const userExists = (arr, obj) => {
    return arr.some((el) => el.name === obj.name);
  };

  const addName = (e) => {
    e.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };

    let id = userExists(persons, newObject);
    if (id > 0) {
      if(window.confirm("Do you want to replace the old number with the new number?")) {
        pageService.update(id, newObject)
      }
    } else {
      pageService
        .add(newObject)
        .then((newContact) => {
          setPersons(persons.concat(newContact));
          setNewNumber("");
        })
        .catch(() => console.log("error"));
    }
    setNewName("");
  };

  const searchName = (e) => setFindName(e.target.value);
  const handleAddName = (e) => setNewName(e.target.value);
  const handleAddNumber = (e) => setNewNumber(e.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter findName={findName} searchName={searchName} />
      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleAddName={handleAddName}
        newNumber={newNumber}
        handleAddNumber={handleAddNumber}
      />
      <h2>Numbers</h2>
      <Persons findName={findName} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;