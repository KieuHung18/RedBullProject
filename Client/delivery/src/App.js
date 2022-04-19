import React from 'react';
import logo from './logo.svg';
import './App.css';
import jquery  from 'jquery';
import { Login } from "./page/Login/Login";

function doAjaxPost() {
  jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/login",
      data: {taikhoan: jquery("sign-in-email-address"), matkhau: jquery("sign-in-password")},
      success: function(response){
        console.log(response.respone.taikhoan)
        console.log(response.respone.matkhau)
          console.log(response.result)
       },
  });
  
}
const login = {};
function App() {
  return (
    <button onClick={doAjaxPost} className='button' id='sign'>Submit</button>
  );
}

export default App;
