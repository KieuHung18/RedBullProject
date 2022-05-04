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
    status:"pending"
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
export default function PackageList(){
  
  return (
    <Component navigate={useNavigate()}/>
  );
}
export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: true };
  }

  componentDidMount() {
    var display=this;
    if(display.state.loadData){
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/adminpackagelist",
      data: {userID: JSON.parse(localStorage.getItem("user")).userID},
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
              status:res.response[i].status},
              );
          }
          count();display.setState({ loadData: false });
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
  
  render() {
    const tableRowEvents = {
      onClick: (row,rowElement,rowIndex) => {
        let pid="/editpackage/"+rowElement.id;
        this.props.navigate(pid);
      },
    }
    const columns = [
      { dataField: 'id', text: 'Package ID',filter: textFilter()},
      { dataField: 'userID', text: 'User ID',filter: textFilter()},
      { dataField: 'userName', text: 'User Name',filter: textFilter()},
      { dataField: 'customerName', text: 'Customer Name',filter: textFilter()},
      { dataField: 'customerPhone', text: 'Customer Phone',filter: textFilter()},
      { dataField: 'status', text: 'Status'},
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
      <h1 className="packagelist-welcome">Welcome back, {userName}</h1>
      <Row className='status-container'>
      {status.map((s) => (
        <Col className='status-items-container'>
          <Row className='status-main-container'>
          <Col className='status-icon-container'>{s[2]}</Col>
          <Col className='status-info-container'>
            <div className='status-type-container'>{s[0]}</div>
            <div className='status-number-container'>{s[1]}</div>
          </Col>
          </Row>
        </Col>
      ))}
      </Row>
      
      <BootstrapTable 
      rowEvents={ tableRowEvents } 
      rowClasses="package-list-row"  
      bootstrap4 keyField='id' 
      data={packageTable} 
      columns={columns}   
      pagination={pagination}
      filter={ filterFactory() }
       />
       <Button style={{marginLeft: "60px"}} variant="dark">Add Package <FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faAdd}/></Button>
    </div>
    );
  }
 
    
  
  
}


