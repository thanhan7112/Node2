import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Pages/singin.css';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Price: '',
            Author:''
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        });
    }
    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const obj = {
            Name: this.state.Name,
            Price: this.state.Price,
            Author: this.state.Author
        };
        axios.post('http://localhost:7000/posts', obj)
            .then(res => console.log(res.data));

        this.setState({
            Name: '',
            Price: '',
            Author:''
        })
    }

    render() {
        return (
            <div className='Container'>
                <h3>Add New Post</h3>
                <form onSubmit={this.onSubmit}>
                
                    <div className="form-group">
                        <input type="text" className="form-control"
                               value={this.state.Name}
                               onChange={this.onChangeName} placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.Price}
                               onChange={this.onChangePrice} placeholder="Price"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               value={this.state.Author}
                               onChange={this.onChangeAuthor} placeholder="Author"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Post" className="btn btn-primary"/>
                    </div>
                    <div className="form-group"><Link className='underlineHover' to='/Login/index'>Index here...</Link></div>
                </form>
            </div>
        )
    }
}