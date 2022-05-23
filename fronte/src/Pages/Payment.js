import './Payment_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
export default class Payment extends Component {

    constructor(props) {
        super(props)
        this.onchangeCardNumber = this.onchangeCardNumber.bind(this);
        this.onchangeExpiry = this.onchangeExpiry.bind(this);
        this.onchangeCVV = this.onchangeCVV.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            CardNumber: '',
            Expiry: '',
            CVV: ''
        }
    }

    onchangeCardNumber(e) {
        this.setState({
            CardNumber: e.target.value
        });
    }
    onchangeExpiry(e) {
        this.setState({
            Expiry: e.target.value
        });
    }
    onchangeCVV(e) {
        this.setState({
            CVV: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const pay = {
            CardNumber: this.state.CardNumber,
            Expiry: this.state.Expiry,
            CVV: this.state.CVV
        }
        axios.post('http://localhost:8080/payments', pay).then(res => console.log(res.data));
        this.setState({
            CardNumber: '',
            Expiry: '',
            CVV: ''
        })

    }
    render() {
        return (
            <div className='paymentcss' >
                <form style={{marginLeft:'40%'}} onSubmit={this.onSubmit} className="container mt-4 ">
                    <div class="card" >
                        <div class="d-flex justify-content-between px-3 pt-4">
                            <span class="pay">Payment</span>
                            <div class="amount">
                                <div class="inner">
                                    <span class="dollar">$</span>
                                    <span class="total">999</span>
                                </div>
                            </div>
                        </div>

                        <div class="px-3 pt-3">
                            <label for="card number" class="d-flex justify-content-between">
                                <span class="labeltxt">CARD NUMBER</span>
                                {/* <img src="/images/mastercard.jpeg" alt="" width="30" class="image" /> */}
                            </label>
                            <input value={this.state.CardNumber} onChange={this.onchangeCardNumber} type="number" name="number" class="form-control inputtxt" placeholder="1234 5678 6789 6789" />
                        </div>

                        <div class="d-flex justify-content-between px-3 pt-4">
                            <div>
                                <label for="date" class="exptxt">Expiry</label>
                                <input value={this.state.Expiry} onChange={this.onchangeExpiry} type="number" name="number" class="form-control expiry" placeholder="MM /YY" />
                            </div>
                            <div>
                                <label for="cvv" class="cvvtxt">CVV /CVC</label>
                                <input value={this.state.CVV} onChange={this.onchangeCVV} type="number" name="number" class="form-control cvv" placeholder="123" />
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-container-between px-3 py-4">
                            <div>
                                <button type="button" style={{marginRight:'4rem'}} class="btn cancel">Cancel</button>
                            </div>
                            <div>
                                <button type="submit" class="btn">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}