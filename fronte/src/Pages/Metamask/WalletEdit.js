import React, { Component } from 'react';
import axios from 'axios';
import '../singin.css';
import { Link, useParams } from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}
class WalletEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangeAddressWallet = this.onChangeAddressWallet.bind(this);
        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            AddressWallet: '',
            Owner: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8090/api/wallet/' + this.props.params.walletId)
            .then(response => {
                console.log(response.data)
                this.setState({
                    AddressWallet: response.data.AddressWallet,
                    Owner: response.data.Owner,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeAddressWallet(e) {
        this.setState({ AddressWallet: e.target.value})
    }
    onChangeOwner(e) {
        this.setState({ Owner: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const wallet = {
            AddressWallet: this.state.AddressWallet,
            Owner: this.state.Owner,
        };
        axios.patch('http://localhost:8090/api/wallet/' + this.props.params.walletId, wallet)
            .then(res => console.log(res.data));
        this.setState({
            AddressWallet: '',
            Owner: '',
        })
    }

    render() {
        return (
            <div className='Container'>
                <h3 align="center">ID:{this.props.params.walletId}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.AddressWallet}
                            onChange={this.onChangeAddressWallet}
                            placeholder="AddressWallet"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.Owner}
                            onChange={this.onChangeOwner}
                            placeholder="Owner"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Post"
                            className="btn btn-primary" />

                    </div>
                    {/* <div className="form-group">
                        <Link to='/Login/Homeindex'>HomeIndex</Link>
                    </div> */}
                </form>
            </div>
        )
    }
}

export default withRouter(WalletEdit);