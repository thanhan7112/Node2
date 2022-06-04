import axios from "axios";
import React, { useState, useEffect, Component, } from "react";
import '../Style/main.css';
import { Card, Button } from 'react-bootstrap';
import { FaEthereum } from "react-icons/fa";
class Sold extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            solds: [] 
        };
    }

    deleteRow(metaId){  
         axios.delete(`http://localhost:8090/api/metamask/${metaId}`)
           .then(res => {
             console.log(res);  
             console.log(res.data);
           })  
         window.location.reload(true);
      }  
      componentDidMount() {
        axios.get('http://localhost:8090/api/metamask')
            .then(response => {
                console.log(response.data);
                this.setState({ solds: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
    return (
        <div className="SoldPage">
             <div className="Header" style={{ borderRadius: '5px', width: '99.8%', height: '200px', margin: '0 auto' }}>
                <a href="https://etherscan.io/" target="_blank"> <button className="btn"><p>Explore</p></button></a>
            </div>
            <div className='row'>
            {this.state.solds.map((sold) => (
                <Card className='btn-card' key={sold.hash} style={{ width: '18rem', marginLeft: '4rem', color: 'black', marginTop: '3rem', height:'25rem' }}>
                <center>
                <Card.Body >
                    <Card.Footer style={{color:'white', fontSize:'14px'}}>{sold.hash}</Card.Footer>
                  <Card.Title className='text'>{sold.Name}</Card.Title>
                  <Card.Title className='text'>{sold.Price}<FaEthereum style={{marginTop:'-4px'}}></FaEthereum></Card.Title>
                  <Card.Text className='text' style={{ fontSize:'14px'}}>From</Card.Text>
                  <Card.Footer style={{color:'white', fontSize:'14px'}}>{sold.from}</Card.Footer>
                  <Card.Text className='text' style={{ fontSize:'14px'}}>To</Card.Text>
                  <Card.Footer style={{color:'white',fontSize:'14px'}}>{sold.to}</Card.Footer>
                  <Button variant="white" onClick={()=> this.deleteRow(sold.metaId)} >Xac Nhan</Button> 
                </Card.Body>
                </center>
              </Card>
            ))}
            </div> 
             
        </div>
    )
}
}
export default Sold;