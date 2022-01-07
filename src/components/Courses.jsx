import React from 'react'

function Courses({ course }) {
    const total = course.parts.reduce((sum, element) => ({exercises: sum.exercises + element.exercises}))
    return (
      <div>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
        <b>total number of exercise {total.exercises}</b>
      </div>
    )
  }

export default Courses