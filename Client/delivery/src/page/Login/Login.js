import Container from 'react-bootstrap/Container';
import {Form,Button} from 'react-bootstrap';
import './Login.css';
import React,{useState} from 'react';
import  logo from '../../assets/images/img.svg'
import jquery from 'jquery';
// asdasdasd
function doLogin(event) {
  event.preventDefault();
  jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/authenticateUser",
      data: {account: jquery("#account").val(), password: jquery("#password").val()},
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(response){
        if(response.result=="SUCCESS"){
          localStorage.setItem("user",response.response);
        }
        else{
          alert("Wrongg user name or password")
        }
        
      },
      error: function(){
        console.log("error");
      }
  });
  // 
}
function logout() {
  console.log("logout");
  localStorage.clear();
}
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return (
    <>
    <Container id="main-container" className="d-grid h-10">
      <button onClick={logout}>logout</button>
    <div className="header1">Login</div>
    <div className="col-sm-3.5 offset-s-4">
    <div>
      <img src={logo}/>
    </div>
    <Form onSubmit={doLogin}>
      <Form.Group className="mb-2" id="sign-in-email-address"></Form.Group>
        <input  id="account"  onChange={(e) =>setEmail(e.target.value)} className="form-control" placeholder="Enter your email"></input>
        <br />
      <Form.Group className="mb-2" id="sign-in-password"></Form.Group>
        <input id="password" type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
        <br />
        <div className="d-grid">
        <button variant="primary" type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </Form>
    </div>
    </Container>
    </>
  );
}


export default Login;