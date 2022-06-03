import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default class CreateHome extends Component {
    constructor(props) {
        super(props);
        this.onChangeMainTitle = this.onChangeMainTitle.bind(this);
        this.onChangeTitleSub = this.onChangeTitleSub.bind(this);
        this.onChangeMainTitle2 = this.onChangeMainTitle2.bind(this);
        this.onChangeMainTitle3 = this.onChangeMainTitle3.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmailShop = this.onChangeEmailShop.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            MainTitle: '',
            TitleSub: '',
            MainTitle2: '',
            profileImg: '',
            MainTitle3: '',
            PhoneNumber:'',
            EmailShop:''
        }
    }
    onChangePhoneNumber(e) {
        this.setState({ PhoneNumber: e.target.value})
    }
    onChangeEmailShop(e) {
        this.setState({ EmailShop: e.target.value})
    }
    onChangeMainTitle(e) {
        this.setState({
            MainTitle: e.target.value
        });
    }
    onChangeMainTitle3(e) {
        this.setState({
            MainTitle3: e.target.value
        });
    }
    onChangeTitleSub(e) {
        this.setState({
            TitleSub: e.target.value
        });
    }
    onChangeMainTitle2(e) {
        this.setState({
            MainTitle2: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const home = {
            MainTitle: this.state.MainTitle,
            TitleSub: this.state.TitleSub,
            MainTitle2: this.state.MainTitle2,
            MainTitle3: this.state.MainTitle3,
            EmailShop: this.state.EmailShop,
            PhoneNumber: this.state.PhoneNumber
        };

        axios.post('http://localhost:8090/api/home', home,)
            .then(res => console.log(res.data));

        this.setState({
            MainTitle: '',
            TitleSub: '',
            MainTitle2: '',
            PhoneNumber: '',
            MainTitle3: '',
            EmailShop:'',
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
                                value={this.state.MainTitle}
                                onChange={this.onChangeMainTitle} placeholder="MainTitle"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.TitleSub}
                                onChange={this.onChangeTitleSub} placeholder="TitleSub" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.MainTitle2}
                                onChange={this.onChangeMainTitle2} placeholder="MainTitle2"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.MainTitle3}
                                onChange={this.onChangeMainTitle3} placeholder="MainTitle3"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.EmailShop}
                                onChange={this.onChangeEmailShop} placeholder="EmailShop"
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                value={this.state.PhoneNumber}
                                onChange={this.onChangePhoneNumber} placeholder="PhoneNumber"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Post" className="btn btn-primary" />
                        </div>
                        <div className="form-group"><Link className='underlineHover' to='/Login/Homeindex'>HomeIndex here...</Link></div>
                    </form>
                </div>
            </div>
        )
    }
}