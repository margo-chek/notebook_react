import React from 'react';
import Search from './Search/search.jsx';
import ListOfNote from './ListOfNote/listOfNote.jsx';
import CreateButton from './CreateButton/createButton.jsx';
import './list.css';

export default class List extends React.Component {
  render () {
    return (
      <div class="leftContainer">
        <Search />
        <ListOfNote />
        <CreateButton />
      </div>
    );
  }
}