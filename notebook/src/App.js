import React from 'react';
import Header from './Header/header.jsx';
import Footer from './Footer/footer.jsx';
import Info from './Info/info.jsx';
import List from './List/list.jsx';
import './App.css';

export default class App extends React.Component {

async componentDidMount() {
  // let response = await fetch("http://localhost/wdb-course-3/software/notebook/load_notes.php", {method: "POST", body: data});
  // let response = await fetch("http://localhost/wdb-course-3/software/notebook/loadNotes.php", {credentials: "include"});
  let response = await fetch("http://localhost/wdb-course-3/software/notebook/loadNotes.php");
  let responseData= await response.json();
  console.dir(responseData);
  // http://127.0.0.1:8000/notes // for laragon
  this.setState({
    notes: responseData
  })
}

updateNote(event) {
  event.preventDefault();
  fetch("insertNoteData.php", {method: "POST", body: new FormData(document.forms[0])})
      .then(response => response.json())
      .then(errorResult => {
        // document.querySelector(".output").innerHTML = errorResult;
        this.setState({
          notes: errorResult
        })
      })
      // .then(window.location.reload(true))
}

  render () {
    return (
      <div className="mainContainer">
        <Header />
        <div className="content">
          <List notes={this.state && this.state.notes} />
          <div className="betweenContainer"></div>
          <Info updateNote={this.updateNote.bind(this)}/>
        </div>
        <Footer />
      </div>
    );
  }
}
