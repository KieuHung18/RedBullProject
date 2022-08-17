import React from "react";
import {Card,Row,Col,Form,Button } from 'react-bootstrap';//{Card,ListGroupItem,ListGroup} 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile2.css';
import jquery  from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faCancel,faSave} from '@fortawesome/free-solid-svg-icons'
import Delivered from "./Delivered";

var user;
user={
    FirstName:"Loading...",
    LastName:"Loading...",
    PhoneNumber:"Loading...",
    Account:"Loading...",
    City: "Loading...",
    District:"Loading...",
    Ward:"Loading...",
    Street:"Loading..."
};
var fullAddress=user.City+","+user.District+","+user.Ward+","+user.Street;
export default function Profile2(){
    return(
        <Component />
    );
}
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadData: true,update:false,wrong:false,phone:false,format:false,account:false};
        this.switchUpdate=this.switchUpdate.bind(this);
        this.saveUser=this.saveUser.bind(this);
        this.checkPhone=this.checkPhone.bind(this);
        this.updateUser=this.updateUser.bind(this);
      }
    updateUser(){
        var display=this;
        
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/user",
            data:{userID: JSON.parse(localStorage.getItem("user")).userID},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
            let address= res.response.address.split(",");
            if(res.result=="SUCCESS"){
                if(display.state.loadData){
                    user={
                        FirstName:res.response.firstName,
                        LastName:res.response.lastName,
                        PhoneNumber:res.response.phoneNumber,
                        City:address[0],
                        District:address[1],
                        Ward:address[2],
                        Street:address[3],
                        Account:res.response.userName
                    };
                fullAddress=user.City+","+user.District+","+user.Ward+","+user.Street;
                display.setState({ loadData: display.loadData?false:true });
            }
                
            }
            else{console.log("fail");
                //redirect
            }
            },
            error: function(){
                console.log("error");
            }
        });
    }
    componentDidMount() {
        this.updateUser();
    }
    saveUser(event){
        event.preventDefault();
        var display=this;
         fullAddress=jquery("#picity").val()+","+jquery("#pidistrict").val()+","+jquery("#piward").val()+","+jquery("#pistreet").val();
        
        if(jquery("#pipassword").val()===jquery("#picpassword").val()
        ){
        jquery.ajax({
            type: "POST",
            url: "http://localhost:8080/delivery/updateinfo",
            data:{
                id: JSON.parse(localStorage.getItem("user")).userID,
                name:jquery("#pifname").val()+" "+jquery("#pilname").val(),
                phone:jquery("#piphone").val(),
                address:fullAddress,
                password:jquery("#pipassword").val(),
                account:jquery("#piaccount").val(),
            },
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
            if(res.result=="SUCCESS"){
                display.setState({update:display.state.update?false:true})
                display.setState({wrong:false})
                display.setState({phone:false})
                display.setState({account:false})
                display.updateUser();
                alert("Update success")
            }
            else{
                if(res.response=="PHONE"){console.log(res.response);
                    display.setState({phone:true})
                    display.setState({account: false})
                    display.setState({wrong:false})
                }
                if(res.response=="ACCOUNT"){
                    display.setState({account: true})
                    display.setState({phone:false})
                    display.setState({wrong:false})
                }
                
            }
            },
            error: function(){
                console.log("error");
            }
        });
            
        }else{
            this.setState({wrong:true})
        }
        
    }
    checkPhone(event){
        event.preventDefault();
        let phone=jquery("#piphone").val()
        if(!isNaN(phone)&&phone>=0){
            this.setState({format:false})
            this.saveUser()
        return true;
        }
        else{
            this.setState({format:true})
        return false;
        }
    }
    switchUpdate(){
        this.setState({update:this.state.update?false:true})
    }
    render() {
        const profileLeft=[
            ["First Name","First Name",user.FirstName,"pifname"],
            ["Last Name","Last Name",user.LastName,"pilname"],
        ];
        const profileRight=[
            ["Account","Account",user.Account,"piaccount"],
            ["Phone Number","Phone Number",user.PhoneNumber,"piphone"]
        ];
        
        const profileUpdate=[
            ["New Password","New Password","pipassword"],
            ["Confirm Password","Confirm Password","picpassword"]
        ];


        
        return (
            <div className="profile-container">
                <h2 className="profile-title">Profile</h2>
                <div className="profile-card-container">
                {this.state.update?
                <Form onSubmit={this.saveUser}>
                    <Row>
                {profileLeft.map(
                    (p)=>(
                    <Col>
                    <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                {p[0]}
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row className="profile-card-row">
                                <Col className="profile-card-col">{p[1]}{": "}</Col>
                                <Col className="profile-card-colinfo">
                                <Form.Group className="" controlId={p[3]}>
                                <Form.Control required defaultValue={p[2]}/>
                                </Form.Group>
                                </Col>
                                {/* <Col className="profile-card-colinfo">{p[2]}</Col> */}
                            </Row>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    )
                )}
                </Row>
                
                <Row>
                {profileRight.map(
                    (p)=>(
                    <Col>
                    <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                {p[0]}
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row className="profile-card-row">
                                <Col className="profile-card-col">{p[1]}{": "}</Col>
                                <Col className="profile-card-colinfo">
                                <Form.Group className="" controlId={p[3]}>
                                <Form.Control required defaultValue={p[2]}/>
                                </Form.Group>
                                </Col>
                            </Row>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    )
                )}
                </Row>
                <Row>
                <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                Address
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row>
                                <Col>
                                    <Row className="profile-card-row">
                                    <Col className="profile-card-col">City{": "}</Col>
                                    <Col className="profile-card-colinfo">
                                    <Form.Group className="" controlId="picity">
                                    <Form.Control required defaultValue={user.City}/>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row className="profile-card-row">
                                    <Col className="profile-card-col">Ward{": "}</Col>
                                    <Col className="profile-card-colinfo">
                                    <Form.Group className="" controlId="piward">
                                    <Form.Control required defaultValue={user.Ward}/>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="profile-card-row">
                                    <Col className="profile-card-col">District{": "}</Col>
                                    <Col className="profile-card-colinfo">
                                    <Form.Group className="" controlId="pidistrict">
                                    <Form.Control required defaultValue={user.District}/>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row className="profile-card-row">
                                    <Col className="profile-card-col">Street{": "}</Col>
                                    <Col className="profile-card-colinfo">
                                    <Form.Group className="" controlId="pistreet">
                                    <Form.Control required defaultValue={user.Street}/>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                            
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Row>
                <Row>
                {profileUpdate.map(
                    (p)=>(
                    <Col>
                    <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                {p[0]}
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row className="profile-card-row">
                                <Col className="profile-card-col">{p[1]}{": "}</Col>
                                <Col className="profile-card-colinfo">
                                <Form.Group className="" controlId={p[2]}>
                                <Form.Control type="password"/>
                                </Form.Group>
                                </Col>
                            </Row>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    )
                )}
                </Row>
                {this.state.wrong&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Confirmation password is not correct</div>}
                {this.state.phone&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate phone number</div>}
                {this.state.account&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Duplicate account</div>}
                {this.state.format&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Illegal phone number format</div>}
                    <Button variant="dark" className="profile-edit-btn" onClick={this.switchUpdate}>CANCEL<FontAwesomeIcon style={{paddingLeft:"5px"}} icon={faCancel}/></Button>
                    <Button variant="dark" className="profile-edit-btn" style={{marginLeft: "10px"}} type="submit">SAVE<FontAwesomeIcon style={{paddingLeft:"5px"}} icon={faSave}/></Button>
                </Form>
                :
                <>
                <Row>
                {profileLeft.map(
                    (p)=>(
                    <Col>
                    <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                {p[0]}
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row className="profile-card-row">
                                <Col className="profile-card-col">{p[1]}{": "}</Col>
                                <Col className="profile-card-colinfo">{p[2]}</Col>
                            </Row>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    )
                )}
                </Row>
                <Row>
                {profileRight.map(
                    (p)=>(
                    <Col>
                    <Card className="profile-card">
                        <Card.Header className="profile-card-header">
                            <Card.Title className="profile-card-title">
                                {p[0]}
                            </Card.Title>
                        </Card.Header >
                        <Card.Body className="profile-card-body">
                            <Card.Text className="profile-card-text">
                            <Row className="profile-card-row">
                                <Col className="profile-card-col">{p[1]}{": "}</Col>
                                <Col className="profile-card-colinfo">{p[2]}</Col>
                            </Row>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    </Col>
                    )
                )}
                </Row>
                <Row>
                <Col>
                <Card className="profile-card">
                    <Card.Header className="profile-card-header">
                        <Card.Title className="profile-card-title">
                            Address
                        </Card.Title>
                    </Card.Header >
                    <Card.Body className="profile-card-body">
                        <Card.Text className="profile-card-text">
                        <Row className="profile-card-row">
                            <Col className="profile-card-col">Address{": "}</Col>
                            <Col className="profile-card-colinfo">{fullAddress}</Col>
                        </Row>
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Col>
                </Row>
                
                <Button variant="dark" className="profile-edit-btn" onClick={this.switchUpdate}>UPDATE<FontAwesomeIcon style={{paddingLeft:"5px"}} icon={faPen}/></Button>
                <Delivered></Delivered>
                </>
                }
                
                
                
                </div>
                
            </div>
            
        );
    }
}