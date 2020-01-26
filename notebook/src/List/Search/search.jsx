import React from 'react';
import './search.css';

export default class Search extends React.Component {

  searchNote = () => {
    let inputValue = document.querySelector(".inputSearchBlock").value;
    const nameArr = document.querySelectorAll(".noteItemBlock");
    nameArr.forEach(note => {
        let noteName = note.querySelector(".noteItemName").innerText;
        if (noteName.includes(inputValue)) {
            note.classList.add("visible");
        } else {
            note.classList.remove("visible");
        }
    })
  }

  render () {
    return (
      <div class="searchBlock">
        <input class="inputSearchBlock" type="text" onKeyUp={this.searchNote} placeholder="Search" />
        <div class="searchIcon"></div>
      </div>
    );
  }
}
