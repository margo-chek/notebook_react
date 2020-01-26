import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render () {
    return (
        <div className="header">
            <div>SUPER NOTEBOOK</div>
            <div className="link">Welcome, Alex .
                {/* <a className="linkName" href='register.php'>
                    {username}
                </a> . */}
                <a className="linkName" href='input.php'>
                    Logout
                </a>
            </div>
        </div>
    );
  }
}
