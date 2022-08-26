import React from "react";
import styled from "styled-components";
import {Row,Col,Form,Button,FormGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate,useParams} from 'react-router-dom';
import {useEffect,useState} from "react";
import jquery from "jquery"
import { textValiDate } from "../../Validate";

var fullAddress
var customerInfo={
    id:"Loading...",
    FName:"Loading...",
    LName:"Loading...",
    city: "Loading...",
    district: "Loading...",
    ward: "Loading...",
    street: "Loading...",
    phone: "Loading...",
}
function validate(){
    if(textValiDate(jquery("#cidCity").val()+jquery("#cidDistrict").val()+jquery("#cidWard").val()+jquery("#cidStreet").val()+jquery("#cidFName").val()+" "+jquery("#cidLName").val())){
      return true
    }
    return false    
}
function EditCustomer(){
    const [customer, setCustomer] = useState();
    function getCustomer(){
        jquery.ajax({
          type: "GET",
          url: "http://localhost:8080/delivery/customer",
          data: {id:param.id},
          xhrFields: {
              withCredentials: true
              },
              crossDomain: true,
          success: function(res){
            fullAddress=res.response.address;
              let address= res.response.address.split(",");
              customerInfo={
                    FName:res.response.firstName,
                    LName:res.response.lastName,
                    phone:res.response.phoneNumber,
                    city:address[0],
                    district:address[1],
                    ward:address[2],
                    street:address[3],
                    }
                    setCustomer(customerInfo);
          }
      });
      }
    useEffect(()=>{
        getCustomer()
    },[]);
    const param=useParams();
    function saveCustomer(event){
        event.preventDefault();
        fullAddress=jquery("#cidCity").val()+","+jquery("#cidDistrict").val()+","+jquery("#cidWard").val()+","+jquery("#cidStreet").val();
          jquery.ajax({
            type: "POST",
            url: "http://localhost:8080/delivery/editcustomer",
            data: {
                id:param.id,
                address: fullAddress,
                fullName: jquery("#cidFName").val()+" "+jquery("#cidLName").val(),
                phoneNumber: jquery("#cidPhone").val(),
            },
            xhrFields: {
              withCredentials: true
              },
              crossDomain: true,
            success:function(res){
                if(res.result=="SUCCESS"){
                    alert("Customer Updated")
                    setPhone(false)
                }
                else{
                    setPhone(true)
                }
            }
          });
    }
    const navigate=useNavigate();
    const [age, setAge] = useState();
    const [phone=false,setPhone] = useState();

    // Chỉ nhập được kiểu số
    const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge(value);
};
    return (
        <Div>
             <h1 className="packagelist-welcome">Edit Customer</h1>
             <div className="insertCustomer">
                <div className="Content_Insert">
                        <form onSubmit={
                                (event)=>{event.preventDefault()
                                if(validate()){saveCustomer()}else{alert("invalid data")}}
                            } className="mainForm" action="">
                        {!!customer?<>
                        <Row>
                            <Col>
                           <div className="YourName form_items">
                                <div className="firtname">
                                    <p>First name</p>
                                    <input defaultValue={customer.FName} placeholder="FisrtName" required type="text" name="" id="cidFName" />
                                </div>
                                <div placeholder="LastName" required className="Lastname">
                                    <p>Last name</p>
                                    <input defaultValue={customer.LName} type="text" required placeholder="Last name" id="cidLName"/>
                                </div>
                                <div className="PhoneNumber">
                                   <p>Phone Number</p>
                                   <input defaultValue={customer.phone} type="text" required value={age} onChange={handleChange} placeholder="Phone number" id="cidPhone"/>
                                   {phone&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate phone number</div>}
                               </div>
                           </div>
                           <Row style={{maxWidth:"300px"}}>
                            <Col>
                           <div className="btn_addUser">
                                 <button  type="submit">Save</button>
                            </div>
                            </Col>
                            <Col>
                            <div className="btn_addUser">
                                 <button onClick={(event)=>{event.preventDefault();navigate(-1)}} >Back</button>
                            </div>
                            </Col>
                            </Row>
                           </Col>
                           <Col>
                           <div className="address form_items">
                                <p>City</p>
                               <input defaultValue={customer.city} type="text" required name="" placeholder="City" id="cidCity" />
                               <p>District</p>
                               <input defaultValue={customer.district} type="text" required name="" placeholder="District" id="cidDistrict" />
                               <p>Ward</p>
                               <input defaultValue={customer.ward} type="text" required name="" placeholder="Ward" id="cidWard" />
                               <p>Street</p>
                               <input defaultValue={customer.street} type="text" required name="" placeholder="Street" id="cidStreet" />
                           </div>
                           </Col>
                           </Row>
                           </>:
                        "Loading..."}
                        </form>
                    </div>
            </div>
        </Div>
    )
}
export default EditCustomer;
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