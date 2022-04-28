import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PackageDetail.css";
import jquery from "jquery";
import CurrentLocation from '../../Map';
import { Map, GoogleApiWrapper ,InfoWindow, Marker} from 'google-maps-react';
var packageinfo;
packageinfo = {
  pro: "Ho Chi Minh city",
  district: "Quan 1",
  ward: "Dakao",
  street: "Cong vien Le Van Tam",
  deliveryDate: "Not Delivery",
  receiveDate: "26/4/2022",
  price: 200000,
  status: false,
};
var customer;
customer = { phone: "0367751252", name: "cusName" };

export class PackageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: true, deliver: "pending" };
    this.delivered = this.delivered.bind(this);
    this.exception = this.exception.bind(this);
    this.pending = this.pending.bind(this);
  }
  componentDidMount() {
    var display = this;
    if (display.state.loadData) {
      jquery.ajax({
        type: "GET",
        url: "http://localhost:8080/delivery/package",
        data: { packageID: "p1" },
        xhrFields: {
          withCredentials: true,
        },
        crossDomain: true,
        success: function (res) {
          let address = res.response.address.split(",");
          packageinfo = {
            city: address[0],
            district: address[1],
            ward: address[2],
            detail: address[3],
            deliveryDate: res.response.deliveryDate,
            receiveDate: res.response.receiveDate,
            price: res.response.price,
            status: res.response.status,
          };
          customer = {
            phone: res.response.customerName,
            name: res.response.customerPhone,
          };
          display.setState({ loadData: false });
          display.setState({ deliver: res.response.status });
        },
      });
    }
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  delivered() {
    // this.setState({deliver:"delivered"});
    //   var display=this;
    //   jquery.ajax({
    //     type: "GET",
    //     url: "http://localhost:8080/delivery/package",
    //     data: {packageID:"p1"},
    //     xhrFields: {
    //         withCredentials: true
    //         },
    //         crossDomain: true,
    //     success: function(res){
    //         let address= res.response.address.split(",");
    //             packageinfo={
    //                 city:address[0],
    //                 district:address[1],
    //                 ward:address[2],
    //                 detail:address[3],
    //                 deliveryDate: res.response.deliveryDate,
    //                 receiveDate: res.response.receiveDate,
    //                 price:  res.response.price,
    //                 status:  res.response.status}
    //             customer={phone: res.response.customerName,name: res.response.customerPhone};
    //         display.setState({ loadData: false });display.setState({ deliver: res.response.status });
    //     }
    // });
  }
  exception() {
    this.setState({ deliver: "exception" });
  }
  pending() {
    this.setState({ deliver: "pending" });
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
                <td class="td">{packageinfo.pro}</td>
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
                <td class="td">{packageinfo.deliveryDate}</td>
              </tr>
              <tr class="tr">
                <td class="td">Receive Date</td>
                <td class="td">{packageinfo.receiveDate}</td>
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
                <td class="td">Phone</td>
                <td class="td">{customer.phone}</td>
              </tr>
              <tr class="tr">
                <td class="td">Name</td>
                <td class="td">{customer.name}</td>
              </tr>
            </table>
          </Col>

          {/* This is map  */}
          <Col md={6} id="map">
            <Row>
              <Col id="note" md={8}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Note của Khách hàng"
                    disabled="true"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <div id="group-btn">
                  <Button
                    class="btn"
                    onClick={this.delivered}
                    variant="success"
                    disabled={this.state.deliver == "pending" ? false : true}
                  >
                    Delivery Success
                  </Button>

                  <Button
                    class="btn"
                    onClick={this.exception}
                    variant="warning"
                    disabled={this.state.deliver == "pending" ? false : true}
                  >
                    Delivery Failure
                  </Button>
                </div>
              </Col>
            </Row>
            <Row class="">
              <img class="img-pack" src="pack.jpg"></img>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
