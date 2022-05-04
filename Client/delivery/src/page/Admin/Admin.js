import React from "react";
import {Tabs,Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';
import jquery  from 'jquery';
import PackageList from "./PackageList";
import UserList from "./UserList";
import CustomerList from "./CustomerList";
export default function Admin(){
    return <Component/>;
}

class Component extends React.Component{

    render(){
    return (
    <Tabs defaultActiveKey="packagelist" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="packagelist" title="Package List">
        <PackageList/>
        </Tab>
        <Tab eventKey="userlist" title="User List">
        <UserList/>
        </Tab>
        <Tab eventKey="customerlist" title="Customer List">
        <CustomerList/>
        </Tab>
        
        
    </Tabs>
    );
    }
}

