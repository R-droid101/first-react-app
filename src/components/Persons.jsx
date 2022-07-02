import React from 'react'
import pageService from '../services/pageServices'

function Persons(props) {
    return ( 
        <div>
            {(props.findName.length <= 0) ? (props.persons.map(person => <div key={person.id}>{person.name} {person.number} <button onClick={
                () => {
                    if (window.confirm(`Do you want to delete ${person.name}`)) {
                        pageService.edit(person.id)
                        props.setPersons(props.persons.filter(p => p.id !== person.id))
                    }
                }

            }>delete</button></div>)) : props.persons.filter(person => person.name.toLowerCase().startsWith(props.findName.toLowerCase())).map(person => <div key={person.id}>{person.name} {person.number} <button onClick={
                () => {
                    if (window.confirm(`Do you want to delete ${person.name}`)) {
                        pageService.edit(person.id)
                        props.setPersons(props.persons.filter(p => p.id !== person.id))
                    }
                }
            }>delete</button></div>)}
        </div>
    )
}

export default Persons
