import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PackageDetail.css";
import $ from "jquery";
var packageinfo;
packageinfo = {
  pro: "Ho Chi Minh city",
  district: "Quan 1",
  ward: "Dakao",
  street: "Cong vien Le Van Tam",
  deliveryDate: "Not Delivery",
  receiveDate: "16/4/2022",
  price: 200000,
  status: false,
};
var customer;
customer = { phone: "0993826268", name: "cusName" };

$(function () {});

export class PackageDetail extends React.Component {
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
  render() {
    return (
      <Container id="container-detail">
        <Row class="">
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
                <td>{packageinfo.pro}</td>
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
                <td>{packageinfo.deliveryDate}</td>
              </tr>
              <tr>
                <td>Receive Date</td>
                <td>{packageinfo.receiveDate}</td>
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
            <div id="group-btn">
              <Button variant="success">
                successful delivery confirmation
              </Button>{" "}
              <Button variant="warning">delivery failure</Button>{" "}
            </div>
          </Col>

          {/* This is map  */}
          <Col md={6} id="map">
            This is map
            <img src="http://laptrinhphp.info/uploads//images/2019/google-maps-banner.jpg"></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
