import "./CustomerList.css";
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
    this.state={loadData: true}
    this.toAddCustomer=this.toAddCustomer.bind(this)
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

  
  toAddCustomer(){
    this.props.navigate("/insertcustomer")
  }

  render() {

    const tableRowEvents = {
      onClick: (row,rowElement,rowIndex) => {
        let pid="/editcustomer/"+rowElement.customerID;
        this.props.navigate(pid);
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
        <div className="package-list-container">
        <h1 className="packagelist-welcome">{this.state.customer==""?"Please select customer":this.state.customer}</h1>
          
          <BootstrapTable 
          rowEvents={ tableRowEvents } 
          rowClasses="package-list-row"  
          bootstrap4 keyField='id' 
          data={customerTable} 
          columns={columns}   
          pagination={pagination}
          filter={ filterFactory() }
          />
          <Button onClick={this.toAddCustomer} style={{marginLeft: "60px"}} variant="dark">Add Customer <FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faAdd}/></Button>
        </div>
    );
  }
}

