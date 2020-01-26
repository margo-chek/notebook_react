import React from 'react';
import Note from './Note/note.jsx'
import './listOfNote.css';

export default class ListOfNote extends React.Component {
  render () {
    return (
      <div class="listOfNotesBlock">
        <Note />
      </div>
    );
  }
}
