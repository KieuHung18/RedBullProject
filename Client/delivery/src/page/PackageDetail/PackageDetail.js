import React from "react";
import {Card,ListGroup,ListGroupItem,Tab} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageDetail.css'
import jquery from "jquery";

var packageinfo;
packageinfo={address:"Viet Nam/Binh Duong/Di an",deliveryDate: "Not Delivery",receiveDate:"16/4/2022",price: 200000,status: false}
var customer;
customer={phone:"0993826268",name:"cusName"};

export class PackageDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = { loadData: true };
      }
    // componentDidMount() {
    // var display=this;
    // jquery.ajax({
    //     type: "GET",
    //     url: "http://localhost:8080/delivery/package",
    //     data: {packageID:"p1"},
    //     success: function(res){
    //     if(res.result=="SUCCESS"){
    //         if(display.state.loadData){
    //             packageinfo={address: res.response.address,deliveryDate: res.response.deliveryDate,receiveDate: res.response.receiveDate,price:  res.response.price,status:  res.response.status}
    //             customer={phone: res.response.customerName,name: res.response.customerPhone};
    //         display.setState({ loadData: false });
    //     }
            
    //     }
    //     else{console.log("fail");
    //         //redirect
    //     }
    //     },
    //     error: function(){
    //         console.log("error");
    //     }
    // });
    // }
    render(){
         return(
            <div className="package-detail-container">
            <Card  border="dark">
                <Tabs defaultActiveKey="infomation">
                    <Tab eventKey="infomation" title="Infomation">
                        <Card.Body className="package-detail-body">
                        <h1>Package Infomation</h1>
                            <ListGroup className="list-group-flush">
                                <Card.Title>Address</Card.Title>
                                <ListGroupItem>{packageinfo.address}</ListGroupItem>

                                <Card.Title>Delivery Date</Card.Title>
                                <ListGroupItem>{packageinfo.deliveryDate}</ListGroupItem>

                                <Card.Title>Receive Date</Card.Title>
                                <ListGroupItem>{packageinfo.receiveDate}</ListGroupItem>
                                <Card.Title>Price</Card.Title>
                                <ListGroupItem>{packageinfo.price}</ListGroupItem>

                                <Card.Title>Status</Card.Title>
                                {packageinfo.status?
                                <ListGroupItem className="recive-date">Delivered</ListGroupItem>:
                                <ListGroupItem className="recive-date">Pedding...</ListGroupItem>
                                }
                                <Card.Title>Contact</Card.Title>
                                <ListGroupItem >
                                    <div>Customer: {customer.name}</div>
                                    <div>Phone number: {customer.phone}</div>
                                </ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="map" title="Map">
                        <h1>MAP</h1>
                    </Tab>
                </Tabs>

            
            </Card>
          </div>
         );
     }
 }