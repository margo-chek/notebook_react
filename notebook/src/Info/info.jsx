import React from 'react';
import './info.css';

export default class Info extends React.Component {
  render () {
    return (
      <div class="rightContainerInfo visible">
        <div class="noteHeaderBlockInfo">
            <div class="noteNameBlockInfo">Note 3</div>
            <div class="noteDateBlockInfo">02.10.2019</div>
        </div>
      <div class="infoBlockInfo">Some note text here!</div>
  </div>
    );
  }
}
