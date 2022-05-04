import Container from "react-bootstrap/Container";
import { Form, Button, Row } from "react-bootstrap";
import "./Login.css";
import React, { useState } from "react";
import logo from "../../assets/LogoCompany.png";
import accountimg from "../../assets/images/account.svg";
import passimg from "../../assets/images/password.svg";
import jquery from "jquery";
import { useNavigate } from "react-router-dom";
// asdasdasd
function Login() {
  // const [account,setAccount]=useState("")
  // const [password,setPassword]=useState("")
  return <Component navigate={useNavigate()} />;
}
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
  }
  doLogin(event) {
    event.preventDefault();
    var display = this;
    jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/authenticateUser",
      data: {
        account: jquery("#account").val(),
        password: jquery("#password").val(),
      },
      xhrFields: {
        withCredentials: true,
      },
      crossDomain: true,
      success: function (response) {
        if (response.result != "FAIL") {
          let user={userID:response.response.userID,userRole:response.response.userRole};
          localStorage.setItem("user", JSON.stringify(user));
          display.props.navigate("/profile");
          window.location.reload(false);
        } else {
          alert("Wrongg user name or password");
        }
      },
      error: function () {
        console.log("error");
      },
    });
    //
  }
  render() {
    return (
      <div id="container-login">
        <Row sm={12} id="row-login">
          <Form onSubmit= {this.doLogin} id="form-login">
            <Form.Group className="mb-3" controlId="account">
              <Form.Control required placeholder="User name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check id="checkbox" type="checkbox" label="Remember" />
          </Form.Group> */}
            <Button class="btn-submit" id="btn-submit" type="submit">
              Login
            </Button>
          </Form>
        </Row>
      </div>
    );
  }
}

export default Login;
