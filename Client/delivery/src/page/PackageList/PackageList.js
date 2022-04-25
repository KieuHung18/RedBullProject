import React, { Component } from 'react';
import './PackageList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import jquery from 'jquery';

const tableRowEvents = {
  onClick: (row) => {
    console.log(row.id);
  },
}

function productsGenerator(quantity){
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({id:'item'+i, address: "someadress/someadress/someadress", customerName: `someName ${i}`, customerPhone: "0937446809" ,price:  2100 + i, status:Math.random()>0.5?true:false,distance: Math.floor(Math.random()*1000)/100+"km"});
  }
  return items;
}

let packageTable=[];
packageTable=productsGenerator(20);
export class PackageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: true };
  }

  // componentDidMount() {
  //   var display=this;
  //   jquery.ajax({
  //     type: "GET",
  //     url: "http://localhost:8080/delivery/packagelist",
  //     success: function(res){
  //       if(res.result=="SUCCESS"){
  //         if(display.state.loadData){
  //         for (let i = 0; i < res.response.length; i++) {
  //           packageTable.push({id:res.response[i].packageID, address: res.response[i].address, customerName: res.response[i].customerName, customerPhone: res.response[i].customerPhone ,price:  res.response[i].price,status: res.response[i].status,distance: Math.floor(Math.random()*1000)/100+"km"});
  //         }
  //         display.setState({ loadData: false });
  //       }
          
  //       }
  //       else{console.log("fail");
  //         //redirect
  //       }
  //      },
  //      error: function(){
  //        console.log("error");
  //      }
  //   });
  // }
  render() {
    const columns = [
      { dataField: 'address', text: 'Address'},
      { dataField: 'customerName', text: 'Customer Name'},
      { dataField: 'customerPhone', text: 'Customer Pame'},
      { dataField: 'price', text: 'Price'},
      { dataField: 'distance', text: 'Distance', sort: true },
      { dataField: 'status', text: 'Status'}
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
    });
    return (
      <div className="package-list-container">
      <h1>Package List</h1>
      <BootstrapTable rowEvents={ tableRowEvents } rowClasses="package-list-row"  bootstrap4 keyField='id' data={packageTable} columns={columns}   pagination={pagination} />
    </div>
    );
  }
}


