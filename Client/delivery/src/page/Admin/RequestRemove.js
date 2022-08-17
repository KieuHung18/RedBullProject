import React from 'react';
import './PackageList.css';
import { Button,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import jquery from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faExclamationCircle, faCircleArrowRight,faAdd} from '@fortawesome/free-solid-svg-icons'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {useNavigate } from 'react-router-dom'; 
function generator(quantity){
  const items = [];
  let address= "City,District,Ward,detailadress".split(",");
  for (let i = 0; i < quantity; i++) {
    items.push({
    id:'p'+i,
    userID:"u"+i,
    userName:"userName"+i,
    customerName:"cusName"+i,
    customerPhone:"099492626"+i,
    });
  }
  return items;
}
const delivered=(<FontAwesomeIcon style={{color:"hsl(123deg 58% 31%)",transform: "scale(1.75)"}} icon={faCheckCircle} />);
const pending=(<FontAwesomeIcon style={{color:"hsl(268deg 83% 24%)",transform: "scale(1.75)"}} icon={faCircleArrowRight} />);
const exception=(<FontAwesomeIcon style={{color:"hsl(345deg 67% 41%)",transform: "scale(1.75)"}} icon={faExclamationCircle} />);

var packageTable=[];
packageTable=generator(20);
var userName;
var numDelivered=0;
var numPending=0;
var numException=0;

function count(){
  for (let i = 0; i < packageTable.length; i++) {
    if(packageTable[i].status=="delivered"){numDelivered++;};
    if(packageTable[i].status=="pending"){numPending++;};
    if(packageTable[i].status=="exception"){numException++;}
  }
}
export default function RequestRemove(){
  
  return (
    <Component navigate={useNavigate()}/>
  );
}
export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: true };
    this.toAddPackage=this.toAddPackage.bind(this);
    this.loadData=this.loadData.bind(this);
  }
  loadData(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/requesremovelist",
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(res){
        if(res.result!="FAIL"){
           packageTable=[];
           userName=res.result;
           numDelivered=0;
           numPending=0;
           numException=0;
          for (let i = 0; i < res.response.length; i++) {
            packageTable.push({
              id: res.response[i].packageID,
              userID:res.response[i].userID,
              userName:res.response[i].userName,
              customerName:res.response[i].customerName,
              customerPhone:res.response[i].customerPhone,
            });
          }
          count();display.setState({ loadData: display.state.loadData?false:true });
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
  componentDidMount() {
    this.loadData();
  }
  toAddPackage(){
    this.props.navigate("/addpackage")
  }
  accept(row){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/deassignpackage",
      data:{
        packageID:row.id
      },
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(res){
        display.loadData()
        },
       error: function(){
         console.log("error");
       }
    });
  }
  
  render() {
    
   const action = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Button
            onClick={() => {
                this.accept(row)
            }}
            >
            Accept
            </Button>
    );
    };
    const columns = [
      { dataField: 'id', text: 'Package ID',filter: textFilter()},
      { dataField: 'userID', text: 'User ID',filter: textFilter()},
      { dataField: 'userName', text: 'User Name',filter: textFilter()},
      { dataField: 'customerName', text: 'Customer Name',filter: textFilter()},
      { dataField: 'customerPhone', text: 'Customer Phone',filter: textFilter()},
      { dataField: 'action', text: 'Action',formatter: action},
    ];
    
    var status=[
      ["EXCEPTION",numException,exception],
      ["PENDING",numPending,pending],
      ["DELIVERED",numDelivered,delivered],
    ]
    
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
      <h1 className="packagelist-welcome">Request Remove List</h1>
      <BootstrapTable 
      rowClasses="package-list-row"  
      bootstrap4 keyField='id' 
      data={packageTable} 
      columns={columns}   
      pagination={pagination}
      filter={ filterFactory() }
       />
       <Button onClick={this.toAddPackage} style={{marginLeft: "60px"}} variant="dark">Add Package <FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faAdd}/></Button>
    </div>
    );
  }
 
    
  
  
}


