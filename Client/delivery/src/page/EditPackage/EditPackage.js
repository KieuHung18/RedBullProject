import "./EditPackage.css";
import React, { useState } from "react";
import jquery from "jquery";
import { useNavigate, useParams } from "react-router-dom";
import {Form,Button, Row,Col,FormCheck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { textValiDate } from "../../Validate";
// asdasdasd
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
  };
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
    this.toGoogleMap=this.toGoogleMap.bind(this)
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
        fullAddress=res.response.address;
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
        display.setState({ loadData: false });
      }
  });
  }
  
  componentDidMount() {
    var display=this;
    if(display.state.loadData){
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/customerlist",
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(res){
        if(res.result!="FAIL"){
           customerTable=[];
          for (let i = 0; i < res.response.length; i++) {
            customerTable.push({
              customerID:res.response[i].id,
              customerName:res.response[i].fullName,
              customerAddress:res.response[i].address,
              customerPhone:res.response[i].phoneNumber,
              });
          }
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
    this.updatePackage();
  }
  checkPrice(price){
    if(!isNaN(price)&&price>=0){
      return true;
    }
    else{console.log(false)
      return false;
      
    }
  }
  checkAddress(){
    fullAddress=jquery("#CityID").val()+","+jquery("#DistrictID").val()+","+jquery("#WardID").val()+","+jquery("#StreetID").val();
    console.log(fullAddress)
    this.setState({
      checked: this.state.checked? false:true
    })
  }

  savePackage(event){
  fullAddress=jquery("#CityID").val()+","+jquery("#DistrictID").val()+","+jquery("#WardID").val()+","+jquery("#StreetID").val();
  var display=this;
  if(!this.checkPrice(jquery("#PriceID").val())){
    this.setState({price:true})
  }else{this.setState({price:false});
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
    fullAddress=jquery("#CityID").val()+","+jquery("#DistrictID").val()+","+jquery("#WardID").val()+","+jquery("#StreetID").val();
    var display=this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let target=display.geturl(fullAddress);
      window.open("https://www.google.com/maps/dir/"+position.coords.latitude+","+position.coords.longitude+"/"+target);
    });
    
  }
  validate(){
    if(textValiDate(jquery("#CityID").val()+jquery("#DistrictID").val()+jquery("#WardID").val()+jquery("#StreetID").val())){
      return true
    }
    return false    
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
        <div className="customer-list-container">
        
          <h1 className="packagelist-welcome">{this.state.customer}</h1>
          <Button onClick={()=>this.props.navigate("/insertcustomer")} style={{marginLeft: "30px",marginBottom:"20px",float:"left"}} variant="dark">Add Customer <FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faAdd}/></Button>
          <Button style={{float: "left",marginLeft: "20px"}} onClick={(event)=>{event.preventDefault();this.props.navigate(-1)}} variant="dark" >
              Back
          </Button >
          {
          packageinfo.status=="pending"&&
          <BootstrapTable 
          rowEvents={ tableRowEvents } 
          rowClasses="package-list-row"  
          bootstrap4 keyField='id' 
          data={customerTable} 
          columns={columns}   
          pagination={pagination}
          filter={ filterFactory() }
          />
        }
        </div>
        {packageinfo.status=="delivered"&&
        <h1 style={{color:"green"}}>Package Delivered</h1>
        }
        {packageinfo.status=="exception"&&
        <h1 style={{color:"darkorange"}}>Package Aborted</h1>
        }
        </Col>
        
        <Col>
        {this.state.loadData?"Loading...":
        <Form className="add-package-form" onSubmit={
          (event)=>{event.preventDefault()
            if(this.validate()){this.savePackage()}else{alert("invalid data")}}
        }>
            <Form.Group className="add-package-group" controlId="CityID">
              <Form.Control disabled={packageinfo.status=="pending"?false:true} required defaultValue={packageinfo.city} placeholder="Province/City" />
            </Form.Group>
            <Form.Group  className="add-package-group" controlId="DistrictID">
              <Form.Control disabled={packageinfo.status=="pending"?false:true} required defaultValue={packageinfo.district} placeholder="District" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="WardID">
              <Form.Control disabled={packageinfo.status=="pending"?false:true} required defaultValue={packageinfo.ward} placeholder="Ward" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="StreetID">
              <Form.Control disabled={packageinfo.status=="pending"?false:true} required defaultValue={packageinfo.street} placeholder="Street" />
            </Form.Group>
            <Form.Group className="add-package-group" controlId="PriceID">
              <Form.Control disabled={packageinfo.status=="pending"?false:true} required defaultValue={packageinfo.price} placeholder="Price" />
            </Form.Group>
            <Form.Check disabled={packageinfo.status=="pending"?false:true}   onChange={this.checkAddress}
              required
              style={{marginLeft:"20px"}}
              type="checkbox"
              id="editpackageCB"
              label="Checked"
            />
            {this.state.price&&<div style={{color:"red",margin:"auto",width:"fit-content"}}>Price must be a number and greater than 0</div>}
            <Button onClick={this.toGoogleMap} variant="dark" className="add-package-btn">
              Check Address
            </Button >
            <Button disabled={this.state.checked?false:true} variant="dark" className="add-package-btn"  type="submit">
              Update
            </Button>
        </Form>
        }
        </Col>
        
        </Row>
      </div>
    );
  }
}

