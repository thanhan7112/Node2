import axios from "axios";
import React, {  Component, } from "react";
import './home.css';
import { Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class HomeIndex extends Component {
constructor(props) {
    super(props);
    this.state = { 
        Homes: [] 
    };
}
deleteRow(homeId){  
     axios.delete(`http://localhost:8090/api/home/${homeId}`)  
       .then(res => {  
         console.log(res);  
         console.log(res.data);
       })  
     window.location.reload(true);
  }  
  componentDidMount() {
    axios.get('http://localhost:8090/api/home')
        .then(response => {
            console.log(response.data);
            this.setState({ Homes: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}
render(){
return (
    <div className="homePage">
        <div className='row'>
        {this.state.Homes.map((home) => (
            <Card className='btn-card' key={home.MainTitle} style={{ width: '18rem', marginLeft: '4rem', color: 'black', marginTop: '3rem', height:'25rem' }}>
            <center>
            <Card.Body >
                <Card.Footer style={{color:'white', fontSize:'14px'}}>{home.MainTitle}</Card.Footer>
              <Card.Title className='text'>{home.TitleSub}</Card.Title>
              <Card.Title className='text'>{home.MainTitle2}</Card.Title>
              <Card.Footer style={{color:'white', fontSize:'14px'}}>{home.MainTitle3}</Card.Footer>
              <Card.Footer style={{color:'white',fontSize:'14px'}}>{home.PhoneNumber}</Card.Footer>
              <Card.Footer style={{color:'white',fontSize:'14px'}}>{home.EmailShop}</Card.Footer>
              <Button variant="white" onClick={()=> this.deleteRow(home.homeId)} >Delete</Button>
              <Link to={"/Login/Homeedit/" + home.homeId} className="btn btn-primary">Edit</Link>
              <Link to={"/Login/admin/pageadmin"} className="btn btn-primary">HomePage</Link>
            </Card.Body>
            </center>
          </Card>
        ))}
        </div> 
         
    </div>
)
}
}