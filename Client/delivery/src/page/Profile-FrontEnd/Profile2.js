import React from "react";
import {Card } from 'react-bootstrap';//{Card,ListGroupItem,ListGroup} 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile2.css';
import jquery  from 'jquery';
import {useNavigate } from 'react-router-dom'; 
var user;
user={
    FirstName:"Tang Kieu",LastName:"Hung",PhoneNumber:"0937446809",Address:"tphcm,binh duong, dian, dian",
};
export default function Profile2(){
    return(
        <Component />
    );
}
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadData: true };
      }
    componentDidMount() {
        var display=this;
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/user",
            data:{userID: localStorage.getItem("user")},
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
    
    render() {
        const profileInfo=[
            ["First Name","First Name",user.FirstName],
            ["Last Name","Last Name",user.LastName],
            ["Address","Address",user.Address],
            ["Phone Number","Phone Number",user.PhoneNumber]
        ];

        
        return (
            <div className="profile-container">
                <h2>Prifile</h2>
                {profileInfo.map(
                    (p)=>(
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                {p[0]}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            {p[1]}{": "}{p[2]}
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>)
                )}
                
            </div>
            
        );
    }
}