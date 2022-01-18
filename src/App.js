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
    pageService.retrieveData().then((contactCard) => {
      console.log("recieving data");
      setPersons(contactCard);
    });
  }, []);

  const userExists = (arr, obj) => {
    return arr.some(function (el) {
      return el.name === obj.name;
    });
  };

  const addName = (e) => {
    e.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    if (userExists(persons, newObject)) {
      alert(`${newName} has already been added to the phone book`);
    } else {
      pageService.add(newObject).then((newContact) => {
        console.log("Posting data to server");
        setPersons(persons.concat(newContact));
        setNewNumber("");
      });
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
      <Persons findName={findName} persons={persons} />
    </div>
  );
};

export default App;
