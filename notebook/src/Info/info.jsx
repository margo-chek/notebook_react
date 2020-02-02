import React from 'react';
import './info.css';

let idUpdate;

export default class Info extends React.Component {

  // send = (event) => { // event: React.KeyboardEvent<HTMLInputElement>
    // event.preventDefault();
    // fetch("insertNoteData.php", {method: "POST", body: new FormData(document.forms[0])})
    //     .then(response => response.text())
    //     .then(errorResult => {document.querySelector(".output").innerHTML = errorResult;})
    //     .then(window.location.reload(true))
  // }
  
  onClose = () => {
    let edit = document.querySelector(".rightContainerEdit");
    edit.classList.remove("visible");
  }

  render () {
    return (
      <div className="rightContainer" >
        <div className="rightContainerInfo">
          <div className="noteHeaderBlockInfo">
            <div className="noteNameBlockInfo"></div>
            <div className="noteDateBlockInfo"></div>
          </div>
          <div className="infoBlockInfo"></div>
        </div>
        <div className="rightContainerCreate">
          <div className="noteHeaderBlockCreate">
            <span className="noteEditBlock">Create mode</span>
          </div>
          <form className="formBlock" method="post">
            <input type="hidden" name="username" value="Alex" />
            <input placeholder="Note 3" className="noteNameBlockEdit inputForm" name="inputNoteName" type="text" required />
            <input placeholder="08.02.2020" className="noteDateBlockEdit inputForm" name="inputNoteDate" type="date" required />
            <textarea placeholder="Line 1" className="infoBlockEdit inputForm" name="inputNoteContent" required></textarea>
            <div className="buttonBlock">
              <input className="buttonSave" type="submit" name="buttonSave" onClick={this.props.updateNote} value="Save"/>
            </div>
          </form>
        </div>
        <div className="rightContainerEdit">
          <div className="noteHeaderBlockEdit">
            <span className="noteEditBlock">Edit mode</span>
          </div>
          <form className="formBlock" method="post">
            <input type="hidden" className="id" name="id_note"/>
            <input placeholder="Note 3" className="noteNameBlockEdit editName inputForm" name="inputNoteName" type="text" required />
            <input placeholder="02.10.2019" className="noteDateBlockEdit editDate inputForm" name="inputNoteDate" type="date" required />
            <textarea placeholder="Line 1" className="infoBlockEdit editContent inputForm" name="inputNoteContent" required></textarea>
            <div className="buttonBlock">
              <button className="buttonCancel" onClick={this.onClose}>Cancel</button>
              <input className="buttonSave" type="submit" name="buttonSaveChanges" onClick={this.props.editNote} value="Save changes"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
