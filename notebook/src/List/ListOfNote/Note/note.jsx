import React from 'react';
import './note.css';

let idUpdate;

export default class Note extends React.Component {

  getNoteInfo = (event, id) => {
    event.preventDefault();
    let data = new FormData();
    data.append("note_id", id);
    fetch("/reactNotebook/getNoteData.php", {method: "POST", body: data})
        .then(response => response.json())
        .then(noteInfo  => {
            JSON.parse(JSON.stringify(noteInfo));
            this.splitNote(noteInfo)})
  }

  splitNote = (arr) => {
    idUpdate = arr["note_id"];
    const name = arr["note_name"]; // или так arr.note_name;
    const date = arr["use_date"]; // или так arr.use_date;
    const content = arr["content"]; // или так arr.content;
    document.querySelector(".editName").value = name;
    document.querySelector(".editDate").value = date;
    document.querySelector(".editContent").innerHTML = content;
}

  editNote = (event, id) => {
    let edit = document.querySelector(".rightContainerEdit");
    id = 2;
    this.getNoteInfo(event, id);
    edit.classList.add("visible");
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    const confirmationOfDeletion = window.confirm("Are you sure want to delete?");
    if(confirmationOfDeletion) {
        let data = new FormData();
        data.append("note_id", id);
        fetch("/reactNotebook/deleteNoteData.php", {method: "POST", body: data})
          .then(window.location.reload(true))
    }
  }

  render () {
    return (
      <div class="noteItemBlock visible">
        <button className="noteItemBlockInfo" onClick={this.showNote}>
          <div class="noteItemName searchName">Arta</div>
          <div class="noteItemDate">12.06.2020</div>
        </button>
        <div class="noteItemActions">
          <button class="editIcon" onClick={this.editNote}></button>
          <button class="deleteIcon" onClick={this.deleteNote}></button>
        </div>
      </div>
    );
  }
}
