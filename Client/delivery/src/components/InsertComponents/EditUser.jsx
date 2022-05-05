import styled from "styled-components";
import {Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate,useParams} from 'react-router-dom';
import {useEffect,useState} from "react";
function update(event){
    event.preventDefault();
    }
function EditUser(){
    const navigate=useNavigate();
        const [age, setAge] = useState();
       
    
        // Chỉ nhập được kiểu số
        const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAge(value);
    };
    return(
        <Section>
            <h1 className="packagelist-welcome">Edit User</h1>
            <div className="insertCustomer">
                <div className="Content_Insert">
                        <form className="mainForm" action="">
                            <Row>
                            <Col>
                           <div className="YourName form_items">
                                <div className="firtname">
                                    <p>First name</p>
                                    <input type="text" placeholder="First name" required name="" id="" />
                                </div>
                                <div className="Lastname">
                                    <p>Last name</p>
                                    <input required placeholder="Last name" type="text" />
                                </div>
                                <div className="PhoneNumber">
                                   <p>Phone Number</p>
                                   <input type="text" value={age} required placeholder="Phone number" />
                               </div>
                           </div>
                           
                           <div className="YourAccount form_items">
                                <div className="Username">
                                    <p>Username</p>
                                    <input type="text" name="" required placeholder="username" id="" />
                                </div>
                                <div className="password">
                                    <p>Password</p>
                                    <input type="text" name="" required placeholder="password" id="" />
                                </div>
                            </div>
                           
                           </Col>

                            <Col>

                            <div className="address form_items">
                               <p>City</p>
                               <input type="text" name="" required placeholder="City" id="" />
                               <p>District</p>
                               <input type="text" name="" required placeholder="District" id="" />
                               <p>Ward</p>
                               <input type="text" name="" required placeholder="Ward" id="" />
                               <p>Street</p>
                               <input type="text" name="" required placeholder="Street" id="" />
                           </div>

                            <div className="Role form_items">
                                <form>
                                    <div className="user_role ">
                                        <input name="gender" type="radio" value="User" />
                                        <span>User</span>
                                    </div>
                                    <div className="admin_role">
                                        <input name="gender" type="radio" value="Admin" />
                                        <span>Admin</span>
                                    </div>
                                </form>
                             </div>
                             </Col>
                             </Row>
                             <Row style={{maxWidth:"300px"}}>
                                <Col>
                                <div className="btn_addUser">
                                    <button>Save</button>
                                </div>
                                </Col>
                                <Col>
                                <div className="btn_addUser">
                                    <button>Cancel</button>
                                </div>
                                </Col>
                             </Row>
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