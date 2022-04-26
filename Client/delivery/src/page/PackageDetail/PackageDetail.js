import React from "react";
import {Card,ListGroup,ListGroupItem,Tab} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageDetail.css'
import jquery from "jquery";

var packageinfo;
packageinfo={
city:"",
district:"",
ward:"",
detail:"",
street:"",
deliveryDate: "",
receiveDate:""
,price: 0,
status: ""}
var customer;
customer={phone:"0993826268",name:"cusName"};

export class PackageDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = { loadData: true };
    }
    componentDidMount() {
    var display=this;
    if(display.state.loadData){
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/package",
            data: {packageID:"p1"},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
                let address= res.response.address.split(",");
                    packageinfo={
                        city:address[0],
                        district:address[1],
                        ward:address[2],
                        detail:address[3],
                        deliveryDate: res.response.deliveryDate,
                        receiveDate: res.response.receiveDate,
                        price:  res.response.price,
                        status:  res.response.status}
                    customer={phone: res.response.customerName,name: res.response.customerPhone};
                display.setState({ loadData: false });
            }
        });
    }
    }
    abort(){
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/exception",
            data: {status:"exception"},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
                let address= res.response.address.split(",");
                    packageinfo={
                        city:address[0],
                        district:address[1],
                        ward:address[2],
                        detail:address[3],
                        deliveryDate: res.response.deliveryDate,
                        receiveDate: res.response.receiveDate,
                        price:  res.response.price,
                        status:  res.response.status}
                    customer={phone: res.response.customerName,name: res.response.customerPhone};
                display.setState({ loadData: false });
            }
        });
    }
    confirm(){
        jquery.ajax({
            type: "GET",
            url: "http://localhost:8080/delivery/validate",
            data: {status:"delivered"},
            xhrFields: {
                withCredentials: true
                },
                crossDomain: true,
            success: function(res){
                if(res.result=="SUCCESS"){
                    let address= res.response.address.split(",");
                        packageinfo={
                            city:address[0],
                            district:address[1],
                            ward:address[2],
                            detail:address[3],
                            deliveryDate: res.response.deliveryDate,
                            receiveDate: res.response.receiveDate,
                            price:  res.response.price,
                            status:  res.response.status}
                        customer={phone: res.response.customerName,name: res.response.customerPhone};
                    display.setState({ loadData: false });
                }
                else{
                    console.log("fail");
                    //redirect
                }
            }
        });
    }
    render(){
         return(
            <div className="package-detail-container">
                <button onClick={this.abort}>abort</button><button onClick={this.confirm}>confirm</button>
            <Card  border="dark">
                <Tabs defaultActiveKey="infomation">
                    <Tab eventKey="infomation" title="Infomation">
                        <Card.Body className="package-detail-body">
                        <h1>Package Infomation</h1>
                            <ListGroup className="list-group-flush">
                                <Card.Title>City</Card.Title>
                                <ListGroupItem>{packageinfo.city}</ListGroupItem>
                                <Card.Title>District</Card.Title>
                                <ListGroupItem>{packageinfo.district}</ListGroupItem>
                                <Card.Title>Ward</Card.Title>
                                <ListGroupItem>{packageinfo.ward}</ListGroupItem>
                                <Card.Title>Detail</Card.Title>
                                <ListGroupItem>{packageinfo.detail}</ListGroupItem>

                                <Card.Title>Delivery Date</Card.Title>
                                <ListGroupItem>{packageinfo.deliveryDatee=="-1/-1/-1"?"Not Delivery":packageinfo.deliveryDate}</ListGroupItem>

                                <Card.Title>Receive Date</Card.Title>
                                <ListGroupItem>{packageinfo.receiveDate}</ListGroupItem>
                                <Card.Title>Price</Card.Title>
                                <ListGroupItem>{packageinfo.price}</ListGroupItem>

                                <Card.Title>Status</Card.Title>
                                
                                <ListGroupItem className="recive-date">{packageinfo.status}</ListGroupItem>
                            
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