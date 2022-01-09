import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("New note added!")
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = e => {
    e.preventDefault();
    const noteObj = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString()
    }
    setNotes(notes.concat(noteObj))
    setNewNote('')
  }

  const handleNewNote = e => {
    setNewNote(e.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNewNote}/>
          <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App