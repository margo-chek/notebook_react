import React from 'react';
import './note.css';

export default class Note extends React.Component {
  render () {
    return (
      <div class="noteItemBlock visible">
        <div class="noteItemName searchName">Arta</div>
        <div class="noteItemDate">12.06.2020</div>
        <div class="noteItemActions">
          <button class="editIcon" onclick="showNote(event, 1)"></button>
          <button class="deleteIcon" onclick="deleteNote(event, 1)"></button>
        </div>
      </div>
    );
  }
}
