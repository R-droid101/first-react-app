import React from 'react'

function Persons(props) {
    return (
        <div>
            {(props.findName.length <= 0) ? (props.persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)) : props.persons.filter(person => person.name.toLowerCase().startsWith(props.findName.toLowerCase())).map(person => <div key={person.id}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Persons
