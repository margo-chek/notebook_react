import React from 'react';
import './note.css';

let idUpdate;

export default class Note extends React.Component {

  getNoteInfo = (id, event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("id_note", id);
    fetch("/reactNotebook/getNoteData.php", {method: "POST", body: data})
        .then(response => response.json())
        .then(noteInfo  => {
            JSON.parse(JSON.stringify(noteInfo));
            this.splitNote(noteInfo)})
  }

  splitNote = (arr) => {
    idUpdate = arr["id_note"];
    const name = arr["note_name"]; // или так arr.note_name;
    const date = arr["use_date"]; // или так arr.use_date;
    const content = arr["content"]; // или так arr.content;
    document.querySelector(".editName").value = name;
    document.querySelector(".editDate").value = date;
    document.querySelector(".editContent").innerHTML = content;
}

  editNote = (id, event) => {
    let edit = document.querySelector(".rightContainerEdit");
    id = 2;
    this.getNoteInfo(id, event);
    edit.classList.add("visible");
  }

  deleteNote = (id, event) => {
    event.preventDefault();
    const confirmationOfDeletion = window.confirm("Are you sure want to delete?");
    if(confirmationOfDeletion) {
        let data = new FormData();
        data.append("id_note", id);
        fetch("/reactNotebook/deleteNoteData.php", {method: "POST", body: data})
          .then(window.location.reload(true))
    }
  }

  render () {
    // onClick={this.showNote.bind(this, this.props.noteData.id_note)}
    return (
      <div className="noteItemBlock visible">
        <button className="noteItemBlockInfo" >  {/* нужен id */}
          <div className="noteItemName searchName">{this.props.noteData.note_name}</div>
          <div className="noteItemDate">{this.props.noteData.use_date}</div>
        </button>
        <div className="noteItemActions">
          <button className="editIcon" onClick={this.editNote.bind(this, this.props.noteData.id_note)}></button> {/* нужен id */}
          <button className="deleteIcon" onClick={this.deleteNote.bind(this, this.props.noteData.id_note)}></button> {/* нужен id */}
        </div>
      </div>
    );
  }
}
