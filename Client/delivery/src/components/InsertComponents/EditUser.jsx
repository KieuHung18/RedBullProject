import styled from "styled-components";
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate,useParams} from 'react-router-dom';
import {useEffect,useState} from "react";
import jquery from "jquery"
import { textValiDate } from "../../Validate";

var fullAddress;
var userInfo={
    id:"Loading...",
    FName:"Loading...",
    LName:"Loading...",
    city: "Loading...",
    district: "Loading...",
    ward: "Loading...",
    street: "Loading...",
    phone: "Loading...",
    role: "Loading...",
    account:"Loading...",
    password:"Loading..."
}

function validate(){
    if(textValiDate(jquery("#uidCity").val()+jquery("#uidDistrict").val()+jquery("#uidWard").val()+jquery("#uidStreet").val()+jquery("#uidAccount").val()+jquery("#uidPassword").val()+jquery("#uidFName").val()+" "+jquery("#uidLName").val())){
      return true
    }
    return false    
}
function EditUser(){
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
            url: "http://localhost:8080/delivery/editUser",
            data: {
                id:param.id,
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
                    alert("User Updated")
                    setAccount(false)
                    setPhone(false)
                }
                else{
                    if(res.response=="PHONE"){
                        setPhone(true)
                    }
                    if(res.response=="ACCOUNT"){
                        setAccount(true)
                    }
                }
            }
          });
    }
    function convert(coordinate){
        let degrees = Math.floor(coordinate)
        let minutes = Math.floor((coordinate-degrees)*60)
        let seconds = ((coordinate-degrees)*60 - minutes)*60000
         return degrees+"°"+minutes+"'"+Math.round(seconds)/1000
    }
    function getUrl(latitude,longitude){
        return "https://www.google.com/maps/place/"+convert(latitude)+"+"+convert(longitude)
    }
    function CheckAddress(){
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/getlocation",
            data: {userID:param.id},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
                if(res.result=="SUCCESS"){
                    window.open(getUrl(res.response.latitude,res.response.longitude))
                }
                else{
                    alert("No location found")
                }
            }
        });
    }
    function getUser(){
        jquery.ajax({
          type: "GET",
          url: "http://localhost:8080/delivery/fulluser",
          data: {userID:param.id},
          xhrFields: {
              withCredentials: true
              },
              crossDomain: true,
          success: function(res){
            fullAddress=res.response.address;
              let address= res.response.address.split(",");
                  userInfo={
                    FName:res.response.firstName,
                    LName:res.response.lastName,
                    phone:res.response.phoneNumber,
                    city:address[0],
                    district:address[1],
                    ward:address[2],
                    street:address[3],
                    role: res.response.role,
                    account:res.response.userName,
                    password:res.response.password
                    }
                setUser(userInfo);
          }
      });
      }
    useEffect(()=>{
        getUser()
    },[]);
    const param=useParams();
    const navigate=useNavigate();
    const [age, setAge] = useState();
    const [user, setUser] = useState();
    const [phone=false,setPhone] = useState();
    const [account=false,setAccount] = useState();
    // Chỉ nhập được kiểu số
    const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge(value);
    };
    return(
        <Section>
            <div style={{display:"flex"}}>
            <h1 className="packagelist-welcome">Edit User</h1>
            <button style={{width: "fit-content",height: "fit-content",alignSelf: "flex-end"}}
                 className="add-package-btn btn btn-dark" onClick={(event)=>{event.preventDefault();CheckAddress()}}>Check Address</button>
            </div>
            <div className="insertCustomer">
                <div className="Content_Insert">
                        <form onSubmit={
                        (event)=>{event.preventDefault()
                        if(validate()){saveUser()}else{alert("invalid data")}}
                        } className="mainForm" action="">
                        {!!user?<>
                            <Row>
                            <Col>
                            <div className="YourName form_items">
                                    <div className="firtname">
                                        <p>First name</p>
                                        <input defaultValue={user.FName} type="text" placeholder="First name" required name="" id="uidFName" />
                                    </div>
                                    <div className="Lastname">
                                        <p>Last name</p>
                                        <input defaultValue={user.LName} id="uidLName" required placeholder="Last name" type="text" />
                                    </div>
                                    <div className="PhoneNumber">
                                    <p>Phone Number</p>
                                    <input defaultValue={user.phone} id="uidPhone" type="text" value={age} required placeholder="Phone number" />
                                    {phone&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate phone number</div>}
                                </div>
                            </div>
                        
                            <div className="YourAccount form_items">
                                <div className="Username">
                                    <p>Username</p>
                                    <input defaultValue={user.account} type="text" name="" required placeholder="username" id="uidAccount" />
                                    {account&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate User name</div>}
                                </div>
                                <div className="password">
                                    <p>Password</p>
                                    <input defaultValue={user.password} type="text" name="" required placeholder="password" id="uidPassword" />
                                </div>
                            </div>
                            </Col>

                            <Col>
                            <div className="address form_items">
                            <p>City</p>
                            <input defaultValue={user.city} type="text" name="" required placeholder="City" id="uidCity" />
                            <p>District</p>
                            <input defaultValue={user.district} type="text" name="" required placeholder="District" id="uidDistrict" />
                            <p>Ward</p>
                            <input defaultValue={user.ward} type="text" name="" required placeholder="Ward" id="uidWard" />
                            <p>Street</p>
                            <input defaultValue={user.street} type="text" name="" required placeholder="Street" id="uidStreet" />
                            </div>

                            <div className="Role form_items">
                                <div className="user_role ">
                                    <input disabled={true} checked={user.role=="ROLE_USER"} name="gender" type="radio" value="User" />
                                    <span>User</span>
                                </div>
                                <div className="admin_role">
                                    <input disabled={true} checked={user.role=="ROLE_ADMIN"} name="gender" type="radio" value="Admin" />
                                    <span>Admin</span>
                                </div>
                            </div>
                            </Col>
                            </Row>
                            <Row style={{maxWidth:"300px"}}>
                                <Col>
                                <div className="btn_addUser">
                                    <button  type="submit">Save</button>
                                </div>
                                </Col>
                                <Col>
                                <div className="btn_addUser">
                                    <button onClick={(event)=>{event.preventDefault();navigate(-1)}}>Back</button>
                                </div>
                                </Col>
                            </Row>
                        </>:
                        "Loading..."}
                            
                        </form>
                    </div>
            </div>
        </Section>
    )
}
export default EditUser
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