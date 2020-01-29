import React from 'react';
import Note from './Note/note.jsx'
import './listOfNote.css';

export default class ListOfNote extends React.Component {

  render () {
    return (
      <div className="listOfNotesBlock">
        {this.props.notes && this.props.notes.map(itemNote => (
          <Note noteData={itemNote} />
        ))}
      </div>
    );
  }
}

// <Note key={itemNote.id_note} noteData={itemNote} />  // ошибка