
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
        axios.delete('http://localhost:7000/posts/'+ this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload(true); //Auto reload page
    }
    render() {
        return (
            <tr >
                <td>
                    {this.props.obj.Name}
                </td>
                <td>
                    {this.props.obj.Price}
                </td>
                <td>
                    {this.props.obj.Author}
                </td>
                <td>
                    <Link to={"/Login/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
