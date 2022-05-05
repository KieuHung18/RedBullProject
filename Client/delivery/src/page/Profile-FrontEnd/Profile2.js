import React from "react";
import {Card,Row,Col,Form,Button } from 'react-bootstrap';//{Card,ListGroupItem,ListGroup} 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile2.css';
import jquery  from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faCancel,faSave} from '@fortawesome/free-solid-svg-icons'
var user;
user={
    FirstName:"Loading...",LastName:"Loading...",PhoneNumber:"Loading...",Address:"Loading...",
};
export default function Profile2(){
    return(
        <Component />
    );
}
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadData: true,update:false,wrong:false,phone:false,format:false};
        this.switchUpdate=this.switchUpdate.bind(this);
        this.saveUser=this.saveUser.bind(this);
        this.checkPhone=this.checkPhone.bind(this);
      }
    componentDidMount() {
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
            if(res.result=="SUCCESS"){
                if(display.state.loadData){
                    user={
                        FirstName:res.response.firstName,LastName:res.response.lastName,PhoneNumber:res.response.phoneNumber,Address:res.response.address
                    };
                display.setState({ loadData: false });
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
    saveUser(event){
        var display=this;
        event.preventDefault();
        if(jquery("#pipassword").val()===jquery("#picpassword").val()
        ){
        jquery.ajax({
            type: "POST",
            url: "http://localhost:8080/delivery/updateinfo",
            data:{
                id: JSON.parse(localStorage.getItem("user")).userID,
                password:jquery("#pipassword").val(),
                name:jquery("#pifname").val()+" "+jquery("#pilname").val(),
                phone:jquery("#piphone").val(),
                address:jquery("#piaddress").val()
            },
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
            if(res.result=="SUCCESS"){
                this.setState({update:this.state.update?false:true})
                this.setState({wrong:false})
                alert("Update success")
            }
            else{
                this.setState({phone:true})
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
            ["Address","Address",user.Address,"piaddress"],
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
                <Form onSubmit={this.checkPhone}>
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
                                <Form.Control type="password" required/>
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
                
                <Button variant="dark" className="profile-edit-btn" onClick={this.switchUpdate}>UPDATE<FontAwesomeIcon style={{paddingLeft:"5px"}} icon={faPen}/></Button>
                </>
                }
                
                
                
                </div>
                
            </div>
            
        );
    }
}