import Container from 'react-bootstrap/Container';
import {Form,Button} from 'react-bootstrap';
import './Login.css';
import React,{useState} from 'react';
import  logo from '../../assets/LogoCompany.png'
import accountimg from '../../assets/images/account.svg'
import passimg from '../../assets/images/password.svg'
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

  
  <Container id="main-container" className="main-container">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={logo} alt="logo" className="logo"/>
      </div>
    </div>
    <form class="box" action="login.js" method="post">
    <h1 className="header">Login Page</h1>
    <Form onSubqmit={doLogin()}>
      <Form.Group  id="sign-in-account"></Form.Group>
      <div class="txt-field1">
        <img src={accountimg} alt="accountimg" className="accountandpass"/>
        <input  type="text" id="account"  onChange={(e) =>setAccount(e.target.value)} className="account" placeholder="Enter your account"></input>
        <span></span>

        </div>
      <Form.Group  id="sign-in-password"></Form.Group>
      <div class="txt-field2">
      <div className="distance">
        <img src={passimg} alt="passimg" className="accountandpass"/>  
          <input id="password" type="password"  onChange={(e) =>setPassword(e.target.value)} className="pass" placeholder="Enter your password"></input>
          <span></span>
        </div>
        </div>
        
      <div>
      <div className='signup-button'>
        <button variant="primary" type="submit">Sign up</button>
       </div>
      </div>
      </Form>
      </form>
    </div>
    </Container>
  
  );
}


export default Login;