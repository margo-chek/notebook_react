import React from 'react';
import Header from './Header/header.jsx';
import Footer from './Footer/footer.jsx';
import Info from './Info/info.jsx';
import List from './List/list.jsx';
import './App.css';

export default class App extends React.Component {
  render () {
    return (
        <div class="mainContainer">
          <Header />
          <div class="content">
            <List />
            <div class="betweenContainer"></div>
            <Info />
          </div>
          <Footer />
        </div>
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}
