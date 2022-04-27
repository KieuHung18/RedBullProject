import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PackageDetail.css";
import jquery from "jquery";
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
    this.state = { loadData: true , deliver:"pending"};
    this.delivered=this.delivered.bind(this);
    this.exception=this.exception.bind(this);
    this.pending=this.pending.bind(this);
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
                display.setState({ loadData: false });display.setState({ deliver: res.response.status });
            }
        });
    }
  }
  delivered(){
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
  exception(){
    this.setState({deliver:"exception"});
  }
  pending(){
    this.setState({deliver:"pending"});
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
                  <Button class="btn" onClick={this.delivered} 
                  variant="success" 
                  disabled={this.state.deliver=="pending"?false:true}>
                  Delivery Success
                  </Button>

                  <Button class="btn" onClick={this.exception} 
                  variant="warning" 
                  disabled={this.state.deliver=="pending"?false:true}>
                    Delivery Failure
                  </Button>
                </div>
              </Col>
            </Row>
            <Row class="map">
              <img src="http://laptrinhphp.info/uploads//images/2019/google-maps-banner.jpg"></img>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
