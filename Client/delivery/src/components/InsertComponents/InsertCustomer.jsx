import React from "react";
import styled from "styled-components";
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

function add(event){
    event.preventDefault();
}

function InsertCustomer(){
    const navigate =useNavigate();
    function cancel(event){
        event.preventDefault();
        navigate(-1)
    }
    return (
        <Div>
             <h1 className="packagelist-welcome">Add Customer</h1>
            <div className="insertCustomer">
                <div className="Content_Insert">
                        <form className="mainForm" action="">
                        <Row>
                            <Col>
                           <div className="YourName form_items">
                                <div className="firtname">
                                    <p>First name</p>
                                    <input placeholder="FisrtName" type="text" name="" id="" />
                                </div>
                                <div placeholder="LastName" className="Lastname">
                                    <p>Last name</p>
                                    <input type="text" />
                                </div>
                                <div className="PhoneNumber">
                                   <p>Phone Number</p>
                                   <input type="text" placeholder="Phone number" />
                               </div>
                           </div>
                           <Row style={{maxWidth:"300px"}}>
                            <Col>
                           <div className="btn_addUser">
                                 <button>Add</button>
                            </div>
                            </Col>
                            <Col>
                            <div className="btn_addUser">
                                 <button onClick={cancel}>Cancel</button>
                            </div>
                            </Col>
                            </Row>
                           </Col>
                           <Col>
                           <div className="address form_items">
                                <p>City</p>
                               <input type="text" name="" placeholder="City" id="" />
                               <p>District</p>
                               <input type="text" name="" placeholder="District" id="" />
                               <p>Ward</p>
                               <input type="text" name="" placeholder="Ward" id="" />
                               <p>Street</p>
                               <input type="text" name="" placeholder="Street" id="" />
                           </div>
                           </Col>
                           </Row>
                             
                        </form>
                    </div>
            </div>
        </Div>
    )
}
export default InsertCustomer;
const Div = styled.div`
  border: 1px solid #c2c2c23b;
    border-radius: 10px ;
    text-align: left;
    box-shadow:  5px 5px #8888883d;
    background-color: #dfdbdb3c;
    .insertCustomer{
        p{
            margin-top: 10px;

        }
        input{
            width: 80%;
            height: 39px;
            border-radius: 7px;
            border: 1px solid #24242434;
            padding-left:20px;
        }
        .mainForm{
            margin-left: 70px;
            margin-top: 30px;
            .form_items{
                text-align: left;
                z-index: 999;
                color: #000000;
                border-radius: 5px !important;
                background-color: #FFFF ;
                width: 95%;
                padding-bottom: 20px;
                box-shadow: 10px 5px 5px #afaeae;
                p,input{
                    margin-left: 30px;
                }
               
         }
         
         .btn_addUser{
            margin: 50px auto;
             button{
                 padding: 10px 20px 10px 20px;
                 border-radius: 5px;
                 border: 1px solid #2260e7;
                 font-weight: 500;
                 background-color: #FFFF;
                 :hover{
                     color: #FFFF;
                     background-color: #2260e7;
                     border: 1px solid #ff0000 !important;
                     transition: 0.5s all;
                 }
                }
         }
        }
        .address{
            input{
                margin-top:10px;
            }
        }
       
    }
    
`;