import React from 'react';
import './createButton.css';

export default class CreateButton extends React.Component {

    addNewNote = () => {
        console.warn("addNewNote");
        let create = document.querySelector(".rightContainerCreate");
        create.classList.add("visible");
        let info = document.querySelector(".rightContainerInfo");
        info.classList.remove("visible");
        let edit = document.querySelector(".rightContainerEdit");
        edit.classList.remove("visible");
    }

    render() {
        return (
            <div className="buttonBlock">
                <button type="button" className="buttonAddNote" name="buttonAddNote" onClick={this.addNewNote}>
                    Add new note
                </button>
            </div>
        );
    }
}
