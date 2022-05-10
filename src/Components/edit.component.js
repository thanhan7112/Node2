import React, { Component } from 'react';
import axios from 'axios';
import '../Pages/singin.css';
import { Link, useParams } from 'react-router-dom';
function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}
class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Price: '',
            postId: '',
            Author:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:7000/posts/' + this.props.params.postId)
            .then(response => {
                this.setState({
                    Name: response.data.Name,
                    Price: response.data.Price,
                    postId: response.data.postId,
                    Author: response.data.Author
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        })
    }
    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Name: this.state.Name,
            Price: this.state.Price,
            Author: this.state.Author
        };
        axios.patch('http://localhost:7000/posts/' + this.props.params.postId, obj)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div className='Container'>
                <h3 align="center">ID:{this.props.params.postId}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangePrice}
                            placeholder="Price"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeAuthor}
                            placeholder="Author"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Post"
                            className="btn btn-primary" />
                            
                    </div>
                    <div className="form-group">
                        <Link to='/Login/index'>Index</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Edit);