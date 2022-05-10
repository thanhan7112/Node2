import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import '../Pages/singin.css';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/posts')
            .then(response => {
                console.log(response.data);
                this.setState({posts: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.posts.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <div className="form-group"><Link to='/Login/create' className='underlineHover'>Create here...</Link></div>
            </div>
        );
    }
}