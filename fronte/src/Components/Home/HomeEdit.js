import React, { Component } from 'react';
import axios from 'axios';
import './singin.css';
import { Link, useParams } from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}
class HomeEdit extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:8090/api/home/' + this.props.params.homeId)
            .then(response => {
                console.log(response.data)
                this.setState({
                    MainTitle: response.data.MainTitle,
                    TitleSub: response.data.TitleSub,
                    EmailShop: response.data.EmailShop,
                    MainTitle2: response.data.MainTitle2,
                    PhoneNumber: response.data.PhoneNumber,
                    MainTitle3: response.data.MainTitle3,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        axios.patch('http://localhost:8090/api/home/' + this.props.params.homeId, home)
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
            <div className='Container'>
                <h3 align="center">ID:{this.props.params.homeId}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.MainTitle}
                            onChange={this.onChangeMainTitle}
                            placeholder="MainTitle"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.TitleSub}
                            onChange={this.onChangeTitleSub}
                            placeholder="TitleSub"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.MainTitle2}
                            onChange={this.onChangeMainTitle2}
                            placeholder="MainTitle2"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.PhoneNumber}
                            onChange={this.onChangePhoneNumber}
                            placeholder="PhoneNumber"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.MainTitle3}
                            onChange={this.onChangeMainTitle3}
                            placeholder="MainTitle3"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.EmailShop}
                            onChange={this.onChangeEmailShop}
                            placeholder="EmailShop"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Post"
                            className="btn btn-primary" />

                    </div>
                    <div className="form-group">
                        <Link to='/Login/Homeindex'>HomeIndex</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(HomeEdit);