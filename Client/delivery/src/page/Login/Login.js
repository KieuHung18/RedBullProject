import Container from 'react-bootstrap/Container';
import {Form,Button} from 'react-bootstrap';
import './Login.css';
import React,{useState} from 'react';
import  logo from '../../assets/LogoCompany.png'
import accountimg from '../../assets/images/account.svg'
import passimg from '../../assets/images/password.svg'
import jquery from 'jquery';
import {useNavigate } from 'react-router-dom'; 
// asdasdasd
function Login() {
  // const [account,setAccount]=useState("")
  // const [password,setPassword]=useState("")
  return (
    <Component navigate={useNavigate()}/>
  );
}
class Component extends React.Component{
  constructor(props){
    super(props);
    this.doLogin=this.doLogin.bind(this);
  }
  doLogin(event) {
    event.preventDefault();
    var display=this;
    jquery.ajax({
        type: "POST",
        url: "http://localhost:8080/delivery/authenticateUser",
        data: {account: jquery("#account").val(), password: jquery("#password").val()},
        xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
        success: function(response){
          if(response.result!="FAIL"){
            localStorage.setItem("user",response.response);
            display.props.navigate("/profile");
            window.location.reload(false);
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
  render(){
    return(
      <Container id="main-container" className="main-container">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={logo} alt="logo" className="logo"/>
      </div>
    </div>
    <h1 className="header">Login Page</h1>
    <Form onSubmit={this.doLogin}>
      <Form.Group  id="sign-in-account"></Form.Group>
      <div class="txt-field1">
        <img src={accountimg} alt="accountimg" className="accountandpass"/>
        <input  type="text" id="account" className="login-input account" placeholder="Enter your account"></input>
        <span></span>

        </div>
      <Form.Group  id="sign-in-password"></Form.Group>
      <div class="txt-field2">
      <div className="distance">
        <img src={passimg} alt="passimg" className="accountandpass"/>  
          <input id="password" type="password" className="login-input pass" placeholder="Enter your password"></input>
          <span></span>
        </div>
        </div>
        
      <div>
      <div >
        <button className='login-button' variant="primary" type="submit">Login</button>
       </div>
      </div>
      </Form>
    </div>
    </Container>
    );
  }
}

export default Login;