import "./AsignPackage.css";
import React, { useState } from "react";
import jquery from "jquery";
import { useNavigate } from "react-router-dom";
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
export default function AsignPackage(){
    return <Component/>
}
var currentuser={
    name:"Loading...",
    id:"",
}

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={currentuser: currentuser,update: false}
        this.getUserList=this.getUserList.bind(this);
        this.getAvailabelPackageList=this.getAvailabelPackageList.bind(this);
        this.getUserPackageList=this.getUserPackageList.bind(this);
    }
    getUserList(){

    }
    getAvailabelPackageList(){

    }
    getUserPackageList(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <>
            <Row>
                <Col>
                User List
                </Col>
                <Col>
                Availabel Package List
                </Col>
            </Row>
            <Row>
            {this.state.currentuser.name+" "} Package List
            </Row>
            </>
        );
    }
}