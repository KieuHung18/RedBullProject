import React from "react";
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const data ={name: 'Tang Kieu Hung',age: '18'};
export class PackageList extends React.Component{
    render(){
     return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            My age is : {data.age}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
     );    
    }
}