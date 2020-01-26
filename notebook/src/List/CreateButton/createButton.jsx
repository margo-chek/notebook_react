import React from 'react';
import './createButton.css';

export default class CreateButton extends React.Component {
  render () {
    return (
      <div class="buttonBlock">
        <button type="button" class="buttonAddNote" name="buttonAddNote" onclick="addNewNote()">
            Add new note
        </button>
      </div>
    );
  }
}
