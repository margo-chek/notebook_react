import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render () {
    return (
        <div class="header">
            <div>SUPER NOTEBOOK</div>
            <div class="link">Welcome, Alex .
                {/* <a class="linkName" href='register.php'>
                    {username}
                </a> . */}
                <a class="linkName" href='input.php'>
                    Logout
                </a>
            </div>
        </div>
    );
  }
}
