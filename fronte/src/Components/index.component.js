import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import '../Pages/singin.css';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:8090/api/products')
            .then(response => {
                console.log(response.data);
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.products.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }
    render() {
        return (
            
            <div className='PageCreate'>

                <table className="table table-striped" style={{ marginTop: 20 , width:'90%', marginLeft:'4rem'}}>
                    <thead>
                        <tr>
                            <th style={{paddingLeft:'4rem'}}>IMG</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Detail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
                <div style={{paddingLeft:'4rem'}} className="form-group"><Link to='/Login/create' className='underlineHover'>Create here...</Link></div>
            </div>
        );
    }
}