import React from 'react';
import './login.css';

export default class Login extends React.Component {

    login = () => {
        fetch("http://localhost/wdb-course-3/software/notebook/reactLogin.php", {method: "POST", body: new FormData(document.forms[0])})
        .then(response => response.json())
        .then(echo => {
            if (echo === "true") {
                this.props.goOverMainPage(); //переходим на main, передавая username
            } else {
                alert("error!");// даём сообщение об ошибке
            }
        })
    }

  render () {
    return (
        <form className="formBlock" method="post">
            <input placeholder="Username" className="inputForm" name="inputUsername" type="text" />
            <input placeholder="Password" className="inputForm" name="inputPassword" autoComplete="off" type="password" />
            <input className="buttonInput" type="submit" name="buttonLogin" value="Login" onClick={this.login} />
            <input className="buttonInput buttonReg" name="buttonRegister" onClick={this.props.goOverRegister} value="Register" />
        </form>
    );
  }
}
