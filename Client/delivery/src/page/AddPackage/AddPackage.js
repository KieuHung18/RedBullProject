import "./AddPackage.css";
import React, { useState } from "react";
import jquery from "jquery";
import { useNavigate } from "react-router-dom";
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
var customerID;
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

export default function AddPackage() {
  return <Component navigate={useNavigate()} />;
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state={checked:false,loadData: true,customer:""}
    this.checkAddress=this.checkAddress.bind(this)
    this.savePackage=this.savePackage.bind(this)
  }
  componentDidMount() {
    var display=this;
    if(display.state.loadData){
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/userlist",
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(res){
        url=res.response.address;
        if(res.result!="FAIL"){
           customerTable=[];
          for (let i = 0; i < res.response.length; i++) {
            customerTable.push({
              customerID:"c"+i,
              customerName:"userName"+i,
              customerAddress:"District"+i,
              customerPhone:"099492626"+i,
              });
          }
          display.setState({ loadData: false });
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
  }

  checkAddress(){
    fullAddress=jquery("#CityID").val()+","+jquery("#DistrictID").val()+","+jquery("#WardID").val()+","+jquery("#StreetID").val();
    console.log(fullAddress)
    this.setState({
      checked:true
    })
  }
  savePackage(event){
    event.preventDefault();
    if(this.state.customer==""){
      alert("Customer is empty. Please select customer")
    }else{
      jquery.ajax({
        type: "POST",
        url: "http://localhost:8080/delivery/addpackage",
        data: {
          customerID: customerID,
          address: fullAddress,
          price: jquery("#PriceID").val(),
        },
        xhrFields: {
          withCredentials: true
          },
          crossDomain: true,
        success:function(){
          alert("Package Added")
        }
      });
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
    var display=this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let target=display.geturl(url);
      window.open("https://www.google.com/maps/dir/"+position.coords.latitude+","+position.coords.longitude+"/"+target);
    });
    
  }


  render() {

    const tableRowEvents = {
      onClick: (row,rowElement,rowIndex) => {
        customerID= rowElement.customerID;
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
        <Form className="add-package-form" onSubmit={this.savePackage}>
            <Form.Group className="add-package-group" controlId="CityID">
              <Form.Control placeholder="Province/City" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="DistrictID">
              <Form.Control placeholder="District" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="WardID">
              <Form.Control placeholder="Ward" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="StreetID">
              <Form.Control placeholder="Street" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="PriceID">
              <Form.Control placeholder="Price" />
            </Form.Group>
            <Button onClick={this.checkAddress} variant="dark" className="add-package-btn">
              Check Address
            </Button >
            <Button disabled={this.state.checked?false:true} variant="dark" className="add-package-btn"  type="submit">
              Add
            </Button>
        </Form>
        </Col>
        <Col>
        <div className="customer-list-container">
        <h1 className="packagelist-welcome">{this.state.customer==""?"Please select customer":this.state.customer}</h1>
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

