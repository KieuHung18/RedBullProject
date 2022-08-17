import React from 'react';
import '../PackageList/PackageList.css';
import { Button, Form} from 'react-bootstrap';
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
    status:"pending"});
  }
  return items;
}

var packageTable=[];
var total="0 VND";
export default function Delivered(){
  
  return (
    <Component navigate={useNavigate()}/>
  );
}
export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: true };
    this.getDelivered=this.getDelivered.bind(this)
  }

  componentDidMount() {
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/deliveredpackages",
      data: {userID: JSON.parse(localStorage.getItem("user")).userID,date: (new Date()).toISOString().substring(0,10)},
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
        success: function(res){
          if(res.result!="FAIL"){
             packageTable=[];
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
                status: res.response[i].status});
            }
            display.setState({ loadData: display.state.loadData?false:true });
            total=res.result+" VND"
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
  getDelivered(){
    var display=this;
    jquery.ajax({
      type: "GET",
      url: "http://localhost:8080/delivery/deliveredpackages",
      data: {userID: JSON.parse(localStorage.getItem("user")).userID,date: jquery("#id-date").val()},
      xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
        success: function(res){
          if(res.result!="FAIL"){
             packageTable=[];
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
                status: res.response[i].status});
            }
            display.setState({ loadData: display.state.loadData?false:true });
            total=res.result+" VND"
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
  render() {
    const columns = [
      { dataField: 'city', text: 'Province/City',filter: textFilter()},
      { dataField: 'district', text: 'District',filter: textFilter()},
      { dataField: 'ward', text: 'Ward',filter: textFilter()},
      
      { dataField: 'status', text: 'Status'},
      { dataField: 'customerName', text: 'Customer Name'},
      { dataField: 'customerPhone', text: 'Customer Phone'},
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
    var curr = (new Date().toLocaleString() + '')
    return (
      <div className="package-list-container">
      <h1 className="packagelist-welcome">Delivered</h1>
      <Form.Group
      className="date" 
      controlId="id-date" 
      style={{width:"fit-content"}}
      >
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" defaultValue={(new Date()).toISOString().substring(0,10)}/>
          <Button onClick={this.getDelivered}>get</Button>
      </Form.Group>
    
      <BootstrapTable 
      rowClasses="package-list-row"  
      bootstrap4 keyField='id' 
      data={packageTable} 
      columns={columns}   
      pagination={pagination}
      filter={ filterFactory() }
       />
       <h5>Total: {total}</h5>
    </div>
    );
  }
}


