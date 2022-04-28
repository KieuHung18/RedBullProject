import React from 'react';
import './PackageList.css';
import { Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import jquery from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faExclamationCircle, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {useNavigate } from 'react-router-dom'; 
import CurrentLocation from '../../Map';
import { Map, GoogleApiWrapper ,InfoWindow, Marker} from 'google-maps-react';
function productsGenerator(quantity){
  const items = [];
  let address= "City,District,Ward,detailadress".split(",");
  for (let i = 0; i < quantity; i++) {
    
    // let City=address[0];
    // let District=address[1];
    // let Ward=address[2];
    
    items.push({
    id:'item'+i,
    city:address[0]+i,
    district:address[1],
    ward:address[2],
    customerName: `someName ${i}`,
    customerPhone: "0937446809" ,
    price:  2100 + i,
    status:"pending",
    distance: Math.floor(Math.random()*1000)/100+"km"});
  }
  return items;
}
const delivered=(<FontAwesomeIcon style={{color:"hsl(123deg 58% 31%)",transform: "scale(1.75)"}} icon={faCheckCircle} />);
const pending=(<FontAwesomeIcon style={{color:"hsl(268deg 83% 24%)",transform: "scale(1.75)"}} icon={faCircleArrowRight} />);
const exception=(<FontAwesomeIcon style={{color:"hsl(345deg 67% 41%)",transform: "scale(1.75)"}} icon={faExclamationCircle} />);

var packageTable=[];
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
      url: "http://localhost:8080/delivery/packagelist",
      data: {userID: localStorage.getItem("user")},
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
      success: function(res){
        if(res.result!="FAIL"){
           packageTable=[];
           userName=res.result;
           let address;
          for (let i = 0; i < res.response.length; i++) {
            address= res.response[i].address.split(",");
            
            packageTable.push({
              id:res.response[i].packageID, 
              city:address[0],
              district:address[1],
              ward:address[2],
              customerName: res.response[i].customerName, 
              customerPhone: res.response[i].customerPhone ,
              status: res.response[i].status,
              distance: Math.floor(Math.random()*1000)/100+"km"});
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
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  
  render() {
    const tableRowEvents = {
      onClick: (row) => {
        console.log(row.id);
        this.props.navigate("/package/"+row.id);
      },
    }
    const columns = [
      { dataField: 'city', text: 'Province/City',filter: textFilter()},
      { dataField: 'district', text: 'District',filter: textFilter()},
      { dataField: 'ward', text: 'Ward',filter: textFilter()},
      { dataField: 'distance', text: 'Distance', sort: true ,className: "aasd"},
      { dataField: 'status', text: 'Status'},
      { dataField: 'customerName', text: 'Customer Name'},
      { dataField: 'customerPhone', text: 'Customer Phone'},
    ];

    var status=[
      ["EXCEPTION",numDelivered,exception],
      ["PEDDING",numPending,pending],
      ["DELIVERED",numException,delivered],
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
    </div>
    );
  }
 
    
  
  
}


