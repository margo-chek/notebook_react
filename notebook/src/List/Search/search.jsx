import React from 'react';
import './search.css';

export default class Search extends React.Component {
  render () {
    return (
      <div class="searchBlock">
        <input class="inputSearchBlock" type="text" onkeyup="searchNote()" placeholder="Search" />
        <div class="searchIcon"></div>
      </div>
    );
  }
}
