import "./EditPackage.css";
import React, { useState } from "react";
import jquery from "jquery";
import { useNavigate, useParams } from "react-router-dom";
import {Form,Button, Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// asdasdasd
var url;
var fullAddress;
var customer={id:"Loading...", phone: "Loading...", name: "Loading..." };
var packageinfo = {
    userID:"Loading...",
    city: "Loading...",
    district: "Loading...",
    ward: "Loading...",
    street: "Loading...",
    deliveryDate: "Loading...",
    receiveDate: "Loading...",
    price: 0,
    status: "Loading...",
  };;
function generator(quantity){
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({
    customerID:"c"+i,
    customerName:"userName"+i,
    customerAddress:"District"+i,
    customerPhone:"099492626"+i,
    });
  }
  return items;
}

var customerTable=[];
customerTable=generator(20);

export default function EditPackage() {
  return <Component navigate={useNavigate()} param={useParams()}/>;
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state={checked:false,customer:"Loading...",loadData:true}
    this.checkAddress=this.checkAddress.bind(this)
    this.savePackage=this.savePackage.bind(this)
    this.updatePackage=this.updatePackage.bind(this)
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
                  userID: res.response.userID,
                  city:address[0],
                  district:address[1],
                  ward:address[2],
                  street:address[3],
                  deliveryDate: res.response.deliveryDate,
                  receiveDate: res.response.receiveDate,
                  price:  res.response.price,
                  status:  res.response.status}
              customer={id: res.response.customerID,phone: res.response.customerPhone,name: res.response.customerName};
        display.setState({ customer: customer.name});
        display.setState({ loadData: false});
      }
  });
  }

  componentDidMount() {
    var display=this;
    // jquery.ajax({
    //   type: "GET",
    //   url: "http://localhost:8080/delivery/userlist",
    //   xhrFields: {
    //     withCredentials: true
    //     },
    //     crossDomain: true,
    //   success: function(res){
    //     if(res.result!="FAIL"){
    //        customerTable=[];
    //       for (let i = 0; i < res.response.length; i++) {
    //         customerTable.push({
    //           customerID:"c"+i,
    //           customerName:"userName"+i,
    //           customerAddress:"District"+i,
    //           customerPhone:"099492626"+i,
    //           });
    //       }
    //     }
    //     else{console.log("fail");
    //       //redirect
    //     }
    //     },
    //    error: function(){
    //      console.log("error");
    //    }
    // });
    this.updatePackage();
  }

  checkAddress(){
    fullAddress=jquery("#CityID").val()+","+jquery("#DistrictID").val()+","+jquery("#WardID").val()+","+jquery("#StreetID").val();
    console.log(fullAddress)
    this.setState({
      checked:true
    })
  }
  savePackage(event){
  var display=this;
  event.preventDefault();
    jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/editpackage",
      data: {
        packageID:display.props.param.id,
        userID:packageinfo.userID,
        customerID: customer.id,
        address: fullAddress,
        price: jquery("#PriceID").val(),
      },
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,

      success:function(){
        alert("Update complete")
      }
    });
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
    var display=this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let target=display.geturl(url);
      window.open("https://www.google.com/maps/dir/"+position.coords.latitude+","+position.coords.longitude+"/"+target);
    });
    
  }
  getForm(){
      
  }
  render() {
    const tableRowEvents = {
      onClick: (row,rowElement,rowIndex) => {
        customer.id= rowElement.customerID;
        this.setState({customer:rowElement.customerName});
      },
    }
    const columns = [
    { dataField: 'customerPhone', text: 'Customer Phone',filter: textFilter()},
    { dataField: 'customerName', text: 'Customer Name',filter: textFilter()},
    { dataField: 'customerAddress', text: 'Customer Address'},
    ];

    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      lastPageText: '>>',
      firstPageText: '<<',
      nextPageText: '>',
      prePageText: '<',
      showTotal: true,
      alwaysShowAllBtns: true,
      hideSizePerPage: true
    });

    return (
        
      <div id="add-package-container">
        <Row>
        <Col>
        {this.state.loadData?"Loading...":
        <Form className="add-package-form" onSubmit={this.savePackage}>
            <Form.Group className="add-package-group" controlId="CityID">
              <Form.Control defaultValue={packageinfo.city} placeholder="Province/City" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="DistrictID">
              <Form.Control defaultValue={packageinfo.district} placeholder="District" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="WardID">
              <Form.Control defaultValue={packageinfo.ward} placeholder="Ward" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="StreetID">
              <Form.Control defaultValue={packageinfo.street} placeholder="Street" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="PriceID">
              <Form.Control defaultValue={packageinfo.price} placeholder="Price" />
            </Form.Group>
            <Button onClick={this.checkAddress} variant="dark" className="add-package-btn">
              Check Address
            </Button >
            <Button disabled={this.state.checked?false:true} variant="dark" className="add-package-btn"  type="submit">
              Update
            </Button>
        </Form>
        }
        </Col>
        <Col>
        <div className="customer-list-container">
        <h1 className="packagelist-welcome">{this.state.customer}</h1>
          <Button style={{marginLeft: "30px",marginBottom:"20px",float:"left"}} variant="dark">Add Customer <FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faAdd}/></Button>
          <BootstrapTable 
          rowEvents={ tableRowEvents } 
          rowClasses="package-list-row"  
          bootstrap4 keyField='id' 
          data={customerTable} 
          columns={columns}   
          pagination={pagination}
          filter={ filterFactory() }
          />
        </div>
        </Col>
        
        </Row>
      </div>
    );
  }
}

