import React, { Component } from "react";
import axios from "axios";
import "../singin.css";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletdata: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/wallet")
      .then((response) => {
        console.log(response.data);
        this.setState({ walletdata: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Container">
        {this.state.walletdata.map((wallet, index) => (
                <Card className='btn-card' key={index} style={{ width: '18rem', marginLeft: '4rem', color: 'black', marginTop: '3rem', height:'25rem' }}>
                <center>
                <Card.Body >   
                  <Card.Text className='text' style={{ fontSize:'14px'}}>Address Wallet</Card.Text>
                  <Card.Footer style={{color:'white', fontSize:'14px'}}>{wallet.AddressWallet}</Card.Footer>
                  <Card.Text className='text' style={{ fontSize:'14px'}}>Owner</Card.Text>
                  <Card.Footer style={{color:'white',fontSize:'14px'}}>{wallet.Owner}</Card.Footer>
                  <Link style={{width:'8rem', height:'2.5rem'}} to={"/EditWallet/" + wallet._id} className="btn ">Edit</Link>
                </Card.Body>
                </center>
              </Card>
            ))}
      </div>
    );
  }
}

export default Wallet;
