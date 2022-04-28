import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PackageDetail.css";
import jquery from "jquery";
import {useParams,useNavigate} from 'react-router-dom';
var packageinfo;
packageinfo = {
  city: "Ho Chi Minh city",
  district: "Quan 1",
  ward: "Dakao",
  street: "Cong vien Le Van Tam",
  deliveryDate: "Not Delivery",
  receiveDate: "26/4/2022",
  price: 200000,
  status: "",
};
var customer;
customer = { phone: "0367751252", name: "cusName" };
var address="153 Nguyễn Du,Dĩ An,Bình Dương";
export default function PackageDetail (){
  return (
    <Component param={useParams()} navigate={useNavigate()}/>
  );
}
let url="";
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
                  status:  res.response.status}
              customer={phone: res.response.customerName,name: res.response.customerPhone};
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

  toGoogleMap(){
    let location="10.9071568,106.7433273";
    let target=this.geturl(url);
    window.open("https://www.google.com/maps/dir/"+location+"/"+target);
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
            <table>
              <thead>
                <tr>
                  <th>
                    <h1>Package Info</h1>
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tr>
                <td>Province/City</td>
                <td>{packageinfo.city}</td>
              </tr>
              <tr>
                <td>District</td>
                <td>{packageinfo.district}</td>
              </tr>
              <tr>
                <td>Wards</td>
                <td>{packageinfo.ward}</td>
              </tr>
              <tr>
                <td>Street/House</td>
                <td>{packageinfo.street}</td>
              </tr>
              <tr>
                <td>Delivery</td>
                <td>{packageinfo.deliveryDate=="-1/-1/-1"?
                "Not Deliver":
                packageinfo.deliveryDate
                }</td>
              </tr>
              
              <tr>
                <td>Price</td>
                <td>{packageinfo.price}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{packageinfo.status}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{customer.phone}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{customer.name}</td>
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
                <Button class="btn" onClick={this.toList} 
                variant="dark" >
                Package List
                </Button>
              </Col>
              <Col md={4}>
                {this.state.deliver=="pending"?
                <div id="group-btn">
                <Button class="btn" onClick={this.delivered} 
                variant="success" >
                Delivery Success
                </Button>

                <Button class="btn" onClick={this.exception} 
                variant="warning">
                Delivery Failure
                </Button>
                </div>:

                <div id="group-btn">
                <Button class="btn" onClick={this.pending} 
                variant="primary" >
                Undo
                </Button>
                </div>
                }
                
              </Col>
            </Row>
            <Row class="map">
              <img onClick={this.toGoogleMap} src="http://laptrinhphp.info/uploads//images/2019/google-maps-banner.jpg"></img>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
