import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PackageDetail.css";
import jquery from "jquery";

import {useParams,useNavigate} from 'react-router-dom';

import CurrentLocation from '../../Map';
import { Map, GoogleApiWrapper ,InfoWindow, Marker} from 'google-maps-react';

var packageinfo;
var requestRemove=false;
var packageUID="";
packageinfo = {
  city: "Loading...",
  district: "Loading...",
  ward: "Loading...",
  street: "Loading...",
  deliveryDate: "Loading...",
  receiveDate: "Loading...",
  price: 0,
  status: "Loading...",
};
var customer;
customer = { phone: "Loading...", name: "Loading..." };
export default function PackageDetail (){
  return (
    <Component param={useParams()} navigate={useNavigate()}/>
  );
}
var url="";
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deliver:"empty"};
    this.delivered=this.delivered.bind(this);
    this.exception=this.exception.bind(this);
    this.pending=this.pending.bind(this);
    this.updatePackage=this.updatePackage.bind(this);
    this.toList=this.toList.bind(this)
    this.toGoogleMap=this.toGoogleMap.bind(this)
    this.recivePackage=this.recivePackage.bind(this)
    this.requestRemove=this.requestRemove.bind(this)
    this.undoRequest=this.undoRequest.bind(this)
  }
  
  updatePackage(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/package",
      data: {packageID:display.props.param.id},
      xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
      success: function(res){
          url=res.response.address;
          let address= res.response.address.split(",");
              packageinfo={
                  city:address[0],
                  district:address[1],
                  ward:address[2],
                  street:address[3],
                  deliveryDate: res.response.deliveryDate,
                  receiveDate: res.response.receiveDate,
                  price:  res.response.price,
                  status:  res.response.status
              }
              customer={phone: res.response.customerPhone,name: res.response.customerName};
              packageUID=res.response.userID
              if(res.result=="REQUEST"){requestRemove=true}else(requestRemove=false)
          display.setState({ deliver: res.response.status });
      }
      
  });
  }
  componentDidMount() {
    if(this.state.deliver=="empty"){
      this.updatePackage();
    }
  }
  transform(address){
    let url="";
    let addressArr=address.split(" ");
    for(let i=0;i< addressArr.length-1;i++){
      url+=addressArr[i]+"+";
    }
    url+=addressArr[addressArr.length-1];
    return url;
  }
  geturl(address){
    let url ="";
    let addressArr=this.transform(address).split(",");
    for(let i=addressArr.length-1;i>=1 ;i--){
      url+=addressArr[i]+",+";
    }
    url+=addressArr[0]+"/";
    return url;
  }
  recivePackage(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/asignpackage",
      data: {packageID:display.props.param.id,userID: JSON.parse(localStorage.getItem("user")).userID},
      xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
      success: function(res){
        if(res.result=="SUCCESS"){
          alert("package recived")
          display.props.navigate("/packagelist");
        }else{
          alert("maximum package")
        }
      }
  });
  }
  toGoogleMap(){
    var display=this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let target=display.geturl(url);
      window.open("https://www.google.com/maps/dir/"+position.coords.latitude+","+position.coords.longitude+"/"+target);
    });
    
  }

  delivered(){
    var display=this;
    jquery.ajax({
    type: "GET",
    url: "http://localhost:8080/delivery/delivered",
    data: {packageID:display.props.param.id},
    xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
    success: function(){
      display.updatePackage();
    }
  });
  }
  requestRemove(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/requestremove",
      data: {packageID:display.props.param.id
      },
      xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
      success: function(){
        display.updatePackage();
      }
    });
  }
  undoRequest(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/undorequest",
      data: {packageID:display.props.param.id
      },
      xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
      success: function(){
        display.updatePackage();
      }
    });
  }
  exception(){
    var display=this;
    jquery.ajax({
    type: "GET",
    url: "http://localhost:8080/delivery/exception",
    data: {packageID:display.props.param.id},
    xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
    success: function(){
      display.updatePackage();
    }
  });
  }
  pending(){
    var display=this;
    jquery.ajax({
    type: "GET",
    url: "http://localhost:8080/delivery/pending",
    data: {packageID:display.props.param.id},
    xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
    success: function(){
      display.updatePackage();
    }
  });
  }
  toList(){
    this.props.navigate("/packagelist")
  }
  
  render() {
    return (
      <Container id="container-detail">
        <Row id="ta">
          <Col md={6}>
            <table class="table">
              <thead class="thead">
                <tr class="tr">
                  <th class="th">
                    <h1>Package Info</h1>
                  </th>
                  <th></th>
                </tr>
              </thead>


              <tr class="tr">
                <td class="td">Province/City</td>
                <td class="td">{packageinfo.city}</td>

              </tr>
              <tr class="tr">
                <td class="td">District</td>
                <td class="td">{packageinfo.district}</td>
              </tr>
              <tr class="tr">
                <td class="td">Wards</td>
                <td class="td">{packageinfo.ward}</td>
              </tr>
              <tr class="tr">
                <td class="td">Street/House</td>
                <td class="td">{packageinfo.street}</td>
              </tr>

              <tr class="tr">
                <td class="td">Delivery</td>
                <td class="td">{packageinfo.deliveryDate=="-1/-1/-1"?
                "Not Deliver":
                packageinfo.deliveryDate
                }</td>
              </tr>
              
              <tr class="tr">
                <td class="td">Price</td>
                <td class="td">{packageinfo.price}</td>

              </tr>
              <tr class="tr">
                <td class="td">Status</td>
                <td class="td">{packageinfo.status}</td>
              </tr>
              <tr class="tr">
                <td class="td">Customer Phone</td>
                <td class="td">{customer.phone}</td>
              </tr>
              <tr class="tr">
                <td class="td">Customer Name</td>
                <td class="td">{customer.name}</td>
              </tr>
            </table>
          </Col>

          {/* This is map  */}
          <Col md={6} id="map">
            <Row>
              <Col id="note" md={8}>
                {/* <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Note của Khách hàng"
                    disabled="true"
                  ></Form.Control>
                </Form.Group> */}
                <Button className="packagelist-btn" onClick={this.toList} 
                variant="dark" >
                Package List
                </Button>
                {packageUID==JSON.parse(localStorage.getItem("user")).userID&&
                <Button className="packagelist-btn"
                variant="danger"
                style={{marginTop:"10px"}}
                onClick={requestRemove?this.undoRequest:this.requestRemove}
                disabled={this.state.deliver=="pending"?false:true}
                >
                {requestRemove?"Undo Request":"Request Remove"}
                </Button>}
              </Col>
              {packageUID!=JSON.parse(localStorage.getItem("user")).userID?
              <Button class="btn"
              onClick={this.recivePackage}
              style={{width:"fit-content",marginLeft:"10px"}}
              variant="success"
              disabled={packageUID!=""?true:false}
              >
              Recive Package
              </Button>
              :
              (<Col md={4}>
                {this.state.deliver=="pending"?
                <div id="group-btn">
                <Button class="btn"
                onClick={this.delivered}
                disabled={requestRemove}
                variant="success" >
                Delivery Success
                </Button>

                <Button class="btn" onClick={this.exception} 
                variant="warning"
                disabled={requestRemove}>
                Delivery Failure
                </Button>
                </div>:
                <div id="group-btn">
                <Button class="btn" onClick={this.pending} 
                variant="primary"
                >
                Undo
                </Button>
                <input class="btn"  type="hidden"/>
                </div>
                }
              </Col>)
              }
            </Row>

            <Row class="map">
              <img className="gg-map-img" onClick={this.toGoogleMap} src="http://laptrinhphp.info/uploads//images/2019/google-maps-banner.jpg"></img>

            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

