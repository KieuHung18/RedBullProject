import styled from "styled-components";
import {Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import jquery from "jquery"
import { textValiDate } from "../../Validate";
var fullAddress;
    function validate(){
    if(textValiDate(jquery("#uidCity").val()+jquery("#uidDistrict").val()+jquery("#uidWard").val()+jquery("#uidStreet").val()+jquery("#uidAccount").val()+jquery("#uidPassword").val()+jquery("#uidFName").val()+" "+jquery("#uidLName").val())){
      return true
    }
    return false    
    }
    function InsertUsers(){
        function saveUser(){
            fullAddress=jquery("#uidCity").val()+","+jquery("#uidDistrict").val()+","+jquery("#uidWard").val()+","+jquery("#uidStreet").val();
            let userRole;
            if(jquery('input[name="gender"]:checked').val()=="User"){
                userRole="ROLE_USER"
            }
            if(jquery('input[name="gender"]:checked').val()=="Admin"){
                userRole="ROLE_ADMIN"
            }
              jquery.ajax({
                type: "POST",
                url: "http://localhost:8080/delivery/addUser",
                data: {
                    account: jquery("#uidAccount").val(),
                    role: userRole,
                    password: jquery("#uidPassword").val(),
                    name: jquery("#uidFName").val()+" "+jquery("#uidLName").val(),
                    phone: jquery("#uidPhone").val(),
                    address: fullAddress,
                },
                xhrFields: {
                  withCredentials: true
                  },
                  crossDomain: true,
                success:function(res){
                    if(res.result=="SUCCESS"){
                        alert("User Added")
                        setAccount(false)
                        setPhone(false)
                        navigate(-1)
                    }
                    else{
                        if(res.response=="PHONE"){
                            setPhone(true)
                            setAccount(false)
                        }
                        if(res.response=="ACCOUNT"){
                            setAccount(true)
                            setPhone(false)
                        }
                    }
                }
              });
        }
        
        const navigate=useNavigate();
        const [age, setAge] = useState();
        const [phone=false,setPhone] = useState();
        const [account=false,setAccount] = useState();
    
        // Chỉ nhập được kiểu số
        const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAge(value);
    };

    return(
        <Section>
            <h1 className="packagelist-welcome">Add User</h1>
            <div className="insertCustomer">
                <div className="Content_Insert">
                        <form onSubmit={
                        (event)=>{event.preventDefault()
                        if(validate()){saveUser()}else{alert("invalid data")}}
                        } className="mainForm" action="" >
                            <Row>
                            <Col>
                           <div className="YourName form_items">
                                <div className="firtname">
                                    <p>First name</p>
                                    <input  type="text" id="uidFName" required  placeholder="First name" name=""/>
                                </div>
                                <div className="Lastname">
                                    <p>Last name</p>
                                    <input type="text" id="uidLName" required placeholder="Last name" />
                                </div>
                                <div className="PhoneNumber">
                                   <p>Phone Number</p>
                                   <input value={age} id="uidPhone" required  placeholder="Your phone number" onChange={handleChange} />
                                   {phone&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate phone number</div>}
                               </div>
                           </div>
                           
                           <div className="YourAccount form_items">
                                <div className="Username">
                                    <p>User name</p>
                                    <input type="text" id="uidAccount" required name=""  placeholder="username"  />
                                    {account&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate User name</div>}
                                </div>
                                <div className="password">
                                    <p>Password</p>
                                    <input type="text" id="uidPassword"  required name="" placeholder="password" />
                                </div>
                                
                            </div>
                           
                           </Col>

                            <Col>

                            <div className="address form_items">
                               <p>City</p>
                               <input type="text" id="uidCity" required name="" placeholder="City"   />
                               <p>District</p>
                               <input type="text" id="uidDistrict" required name="" placeholder="District"   />
                               <p>Ward</p>
                               <input type="text" id="uidWard" required name="" placeholder="Ward" />
                               <p>Street</p>
                               <input type="text" id="uidStreet" required  name="" placeholder="Street"/>
                           </div>

                            <div className="Role form_items">
                                <div className="user_role ">
                                    <input name="gender"   type="radio" value="User" checked/>
                                    <span>User</span>
                                </div>
                                <div className="admin_role">
                                    <input name="gender"   type="radio" value="Admin" />
                                    <span>Admin</span>
                                </div>
                             </div>
                             </Col>
                             </Row>
                             <Row style={{maxWidth:"300px"}}>
                            <Col>
                           <div className="btn_addUser">
                                 <button type="submit" >Add</button>
                            </div>
                            </Col>
                            <Col>
                            <div className="btn_addUser">
                                 <button onClick={(event)=>{event.preventDefault();navigate(-1)}}>Back</button>
                            </div>
                            </Col>
                            </Row>
                        </form>
                    </div>
            </div>
        </Section>
    )
}
export default InsertUsers;
const Section = styled.section`
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
                z-index: 999;
                color: #000000;
                border-radius: 5px !important;
                background-color: #FFFF ;
                width: 95%;
                padding-bottom: 20px;
                box-shadow: 10px 5px 5px #afaeae;
                text-align: left;
                p,input{
                    margin-left: 30px;
                }
               
         }
         .Role{
             margin-top: 10px;
             height: 85px;
             input{
                 margin-left: 30px;
                 width: 20px;
             }
             span{
                 margin-left: 10px;
                 position: absolute;
                margin-top: 7px;
             }
         }
         .btn_addUser{
             margin-top: 10px;
             margin-left: 55%;
             margin-bottom: 10px;
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