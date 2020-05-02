import React from 'react';
import Header from './component/Header/header.jsx';
import Footer from './component/Footer/footer.jsx';
import Info from './component/Info/info.jsx';
import List from './component/List/list.jsx';
import Login from './component/Login/login.jsx';
import Register from './component/Register/register.jsx';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isRegister: false,
            isMainPage: false,
        };
        this.goOverMainPage = this.goOverMainPage.bind(this);
        this.goOverRegister = this.goOverRegister.bind(this);
        this.goOverLogin = this.goOverLogin.bind(this);
    };

    async loadNotes() {
        // let response = await fetch("http://localhost/wdb-course-3/software/notebook/load_notes.php", {method: "POST", body: data});
        // let response = await fetch("http://localhost/wdb-course-3/software/notebook/loadNotes.php", {credentials: "include"});
        let response = await fetch("http://localhost/wdb-course-3/software/notebook/loadNotes.php");
        let responseData = await response.json();
        // console.dir(responseData); // не забыть удалить потом!!!
        // http://127.0.0.1:8000/notes // for laragon
        this.setState({
            notes: responseData
        })
    }

    async componentDidMount() {
        this.loadNotes();
    }

    // componentDidUpdate(prevProps) {
    //     // Популярный пример (не забудьте сравнить пропсы):
    //     if (this.props.notes !== prevProps.notes) {
    //       this.fetchData(this.props.notes);
    
    //     }
    // }

    goOverRegister = () => {
        this.setState({
            isLogin: false,
            isRegister: true,
        })
    }

    goOverMainPage = () => {
        this.setState({
            isLogin: false,
            isMainPage: true,
        })
    }

    goOverLogin = () => {
        this.setState({
            isLogin: true,
            isRegister: false,
        })
    }

    updateNote(event) {
        event.preventDefault();
        fetch("http://localhost/wdb-course-3/software/notebook/insertNoteData.php", { method: "POST", body: new FormData(document.forms[0]) })
            .then(response => response.text())
            .then(errorResult => {
                // document.querySelector(".output").innerHTML = errorResult;
                this.setState({
                    notes: errorResult
                })
            })
            .then(
                document.querySelector(".rightContainerCreate").classList.remove("visible")
            )
            .then(this.loadNotes()) //.then(window.location.reload(true))
    }

    editNote(event) {
        event.preventDefault();
        fetch("http://localhost/wdb-course-3/software/notebook/updateNoteData.php", { method: "POST", body: new FormData(document.forms[1]) })
            .then(response => response.text())
            .then(errorResult => {
                // document.querySelector(".output").innerHTML = errorResult;
                this.setState({
                    notes: errorResult
                })
            })
            .then(
                document.querySelector(".rightContainerEdit").classList.remove("visible")
            )
            .then(this.loadNotes()) //.then(window.location.reload(true))
    }

    render() {
        const stateNotes = this.state && this.state.notes;
        return (
            <div className="mainContainer">
                <Header />
                <div className="content">
                    {this.state.isLogin && <Login goOverRegister={this.goOverRegister} goOverMainPage={this.goOverMainPage} />}
                    {this.state.isRegister && <Register goOverLogin={this.goOverLogin} />}
                    {this.state.isMainPage &&
                        <>
                            <List notes={stateNotes} />
                            <div className="betweenContainer" />
                            <Info notes={stateNotes} updateNote={this.updateNote.bind(this)} editNote={this.editNote.bind(this)} />
                        </>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}
