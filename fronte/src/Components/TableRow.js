
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../Pages/singin.css';
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8090/api/products/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload(true); //Auto reload page
    }
    render() {
        return (
            <tr >
                <td >
                    <a style={{ width: '5%', marginLeft:'4.5rem' }}><img style={{ width: '50px', height:'50px', backgroundColor:'black'}} alt="" src={this.props.obj.profileImg}></img></a>
                </td>
                <td style={{color:'white'}}>
                    {this.props.obj.Name}
                </td>
                <td style={{color:'white'}}>
                    {this.props.obj.Price}
                </td>
                <td style={{color:'white'}}>
                    {this.props.obj.Author}
                </td>
                <td style={{color:'white'}}>
                    {this.props.obj.Detail}
                </td>
                <td >
                    <Link to={"/Login/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
