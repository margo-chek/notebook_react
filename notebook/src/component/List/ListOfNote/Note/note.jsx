import React from 'react';
import { format } from "date-fns";
import './note.css';

export default class Note extends React.Component {

	getNoteInfo = (id, event) => {
		this.props.notes.forEach(item => {
			if (id === item.id_note) {
				this.splitNote(item)
			}
		});
	}

	splitNote = (arr) => {
		const idUpdate = arr["id_note"];
		const name = arr["note_name"]; // или так arr.note_name;
		const date = arr["use_date"]; // или так arr.use_date;
		const content = arr["content"]; // или так arr.content;
		document.querySelector(".editName").value = name;
		document.querySelector(".editDate").value = date;
		document.querySelector(".editContent").innerHTML = content;
		document.querySelector(".id").value = idUpdate;
	}

	splitNoteShow = (arr) => {
		const name = arr["note_name"]; // или так arr.note_name;
		const date = arr["use_date"]; // или так arr.use_date;
		const content = arr["content"]; // или так arr.content;
		document.querySelector(".noteNameBlockInfo").innerHTML = name;
		document.querySelector(".noteDateBlockInfo").innerHTML = date;
		document.querySelector(".infoBlockInfo").innerHTML = content;
	}

	getNoteInfoShow = (id, event) => {
		this.props.notes.forEach(item => {
			if (id === item.id_note) {
				this.splitNoteShow(item)
			}
		});
	}

	showNote = (id, event) => {
		let info = document.querySelector(".rightContainerInfo");
		this.getNoteInfoShow(id, event);
		info.classList.add("visible");
		let create = document.querySelector(".rightContainerCreate");
		create.classList.remove("visible");
		let edit = document.querySelector(".rightContainerEdit");
		edit.classList.remove("visible");
	}

	editNote = (id, event) => {
		let edit = document.querySelector(".rightContainerEdit");
		this.getNoteInfo(id, event);
		edit.classList.add("visible");	
		let create = document.querySelector(".rightContainerCreate");
		create.classList.remove("visible");
		let info = document.querySelector(".rightContainerInfo");
		info.classList.remove("visible");

	}

	deleteNote = (id, event) => {
		event.preventDefault();
		const confirmationOfDeletion = window.confirm("Are you sure want to delete?");
		if (confirmationOfDeletion) {
			let data = new FormData();
			data.append("id_note", id);
			fetch("http://localhost/wdb-course-3/software/notebook/deleteNoteData.php", { method: "POST", body: data })
				.then(window.location.reload(true))
		}
	}

	render() {
		const { noteData } = this.props;
		const date = new Date(noteData.use_date);
		const formatDate = format(date, "dd.MM.yyyy");
		return (
			<div className="noteItemBlock visible">
				<button className="noteItemBlockInfo" onClick={this.showNote.bind(this, this.props.noteData.id_note)}>
					<div className="noteItemName searchName">{this.props.noteData.note_name}</div>
					<div className="noteItemDate">{formatDate}</div>
				</button>
				<div className="noteItemActions">
					<button className="editIcon" onClick={this.editNote.bind(this, this.props.noteData.id_note)}></button>
					<button className="deleteIcon" onClick={this.deleteNote.bind(this, this.props.noteData.id_note)}></button>
				</div>
			</div>
		);
	}
}
