import React, { Component } from 'react';
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
        this.onChangeDetail = this.onChangeDetail.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Price: '',
            Author: '',
            profileImg: '',
            Detail: ''
        }
    }
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeDetail(e) {
        this.setState({
            Detail: e.target.value
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
        const obj = new FormData()
        obj.append('profileImg', this.state.profileImg)
        obj.append('Name', this.state.Name)
        obj.append('Price', this.state.Price)
        obj.append('Author', this.state.Author)
        obj.append('Detail', this.state.Detail)
        // const obj = {
        //     Name: this.state.Name,
        //     Price: this.state.Price,
        //     Author: this.state.Author,
        // };

        axios.post('http://localhost:8090/api/products', obj,)
            .then(res => console.log(res.data));

        this.setState({
            Name: '',
            Price: '',
            Author: '',
            profileImg: '',
            Detail: ''
        })
    }

    render() {
        return (
            <div className='PageCreate'>
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
                                onChange={this.onChangePrice} placeholder="Price" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.Author}
                                onChange={this.onChangeAuthor} placeholder="Author"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.Detail}
                                onChange={this.onChangeDetail} placeholder="Detail"
                            />
                        </div>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Post" className="btn btn-primary" />
                        </div>
                        <div className="form-group"><Link className='underlineHover' to='/Login/index'>Index here...</Link></div>
                    </form>
                </div>
            </div>
        )
    }
}