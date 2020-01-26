import React from 'react';
import './info.css';

export default class Info extends React.Component {
  render () {
    return (
      <div className="rightContainerInfo visible">
        <div className="noteHeaderBlockInfo">
            <div className="noteNameBlockInfo">Note 3</div>
            <div className="noteDateBlockInfo">05.02.2020</div>
        </div>
      <div className="infoBlockInfo">Some note text here!</div>
  </div>
    );
  }
}
