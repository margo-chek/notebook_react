import React from 'react';
import './register.css';

export default class Register extends React.Component {

    send = (event) => {
        event.preventDefault();
        fetch("http://localhost/wdb-course-3/software/notebook/reactRegister.php", { method: "POST", body: new FormData(document.forms[0]) })
            .then(response => response.text())
            .then(outputResult => {
                alert(outputResult);
                if (outputResult !== "Проверьте введенный пароль!" ||
                    outputResult !== "Заполните все обязательные поля:<br />Username, Password, Confirm password") {
                    this.props.goOverLogin();
                }
            })
            // .catch(event => {});
            .catch(error => { alert(error) });
    }

    render() {
        return (
            <form className="formBlock" method="post">
                <input placeholder="Username" className="inputForm" name="inputUsername" type="text" required />
                <input placeholder="Password" className="inputForm" name="inputPassword" type="password" required />
                <input placeholder="Confirm password" className="inputForm" name="inputConfirmPassword" type="password" required />
                <input placeholder="EMail" className="inputForm" name="inputEMail" type="text" />
                <input className="buttonReg" name="button" type="submit" onClick={this.send} value="Register" />
            </form>
        );
    }
}
