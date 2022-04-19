import React from "react";
import {Card,ListGroup,ListGroupItem,Tab} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageDetail.css'
import jquery from "jquery";
function getPakageData(){
    // jquery.ajax({
    //     type: "POST",
    //     url: "http://localhost:8080/delivery/package-infomation",
    //     data: {packageID: "id"},
    //     success: function(response){
    //         console.log(response.respone.name)
    //          console.log(response.respone.sdt)
    //         console.log(response.result)
    //         console.log(response)
            
    //      },
    // });
    return {address:"Viet Nam/Binh Duong/Di an",deliveryDate: "Not Delivery",receiveDate:"16/4/2022",price: 200000,status: false};
}
function getCustomerData(){
    return {phone:"0993826268",name:"cusName"}
}
const packageinfo=getPakageData();
const customer= getCustomerData();

export class PackageDetail extends React.Component{
    
    render(){
         return(
            <div className="package-detail-container">
            <Card  border="dark">
                <Tabs defaultActiveKey="infomation">
                    <Tab eventKey="infomation" title="Infomation">
                        <Card.Body>
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