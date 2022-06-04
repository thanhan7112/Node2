import '../Style/style.css';
import axios from 'axios';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Footer } from './Footer/Footer';
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homedata: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/api/home").then(response => {
            console.log(response.data);
            this.setState({ homedata: response.data });
        }).catch(function (error) {
            console.log(error)
        })
    }
    render() {
        return (
            <div className='root'>
                <div id="display" className="center__row" >
                    {this.state.homedata.map((home) => (
                        <div className="display__info container__center">
                            <h1>{home.MainTitle}</h1>
                            <p>{home.TitleSub}</p>
                            <div className="buttons center__row">
                                <Link to='/Menu' >
                                <a href="#" className="link__btn">Buy Now</a>
                                </Link>
                                <a href="#" className="link__btn blue__btn">Learn More</a>
                            </div>
                        </div>
                    ))}
                    <div className="product__display--container">
                        {/* <img src={hello} alt=""/>  */}
                    </div>
                </div>
                <section id="social" className="container__center">
                    <div className="social__cont center__row">
                        <div className="social__icon container__center">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <div className="background"></div>
                        </div>
                        <div className="social__icon container__center">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <div className="background"></div>
                        </div>
                        <div className="social__icon container__center">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <div className="background"></div>
                        </div>
                        <div className="social__icon container__center">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <div className="background"></div>
                        </div>
                    </div>
                </section>


                <section id="info">
                {this.state.homedata.map((home) => (
                    <div className="info__column">
                        <div className="info__card--left">
                            <i className="fas fa-leaf card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                        
                        <div className="info__card--left">
                            <i className="fas fa-people-carry card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                        <div className="info__card--left">
                            <i className="fas fa-seedling card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                        
                    </div>
                    ))}
                    {this.state.homedata.map((home) => (
                    <div className="info__column">
                        <div className="info__card--right">
                            <i className="fas fa-hands-helping card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                        <div className="info__card--right">
                            <i className="fas fa-piggy-bank card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                        <div className="info__card--right">
                            <i className="fas fa-users card__icon"></i>
                            <h4>{home.MainTitle}</h4>
                            <p>{home.TitleSub}</p>
                        </div>
                    </div>
                    ))}
                    {/* <img src={hello1} alt=""/> */}
                </section>

                <section id="image__cont" className="center__row">
                {this.state.homedata.map((home) => (
                    <div className="image__info container__center">
                        <h1>{home.MainTitle2}</h1>
                        <p>{home.TitleSub}</p>
                        <div className="buttons center__row">
                            <a href="#" className="link__btn">Our partners</a>
                        </div>
                    </div>
                ))}
                    {/* <img src={hello2} alt=""/> */}
                </section>



                <section id="contact" className="center__row">
                {this.state.homedata.map((home) => (
                    <div className="contact__info container__center">
                        <h1>{home.MainTitle3}</h1>
                        <p>{home.TitleSub}</p>
                        <a href="#" className="link__btn">Find a store</a>
                    </div>
                ))}
                 {this.state.homedata.map((home) => (
                    <div className="contact__methods">
                        <button className="info__btn">
                            <i className="fas fa-phone alt"></i>
                            <a>{home.PhoneNumber}</a>
                        </button>
                        <button className="info__btn">
                            <i className="far fa-envelope"></i>
                            <a>{home.EmailShop}</a>
                        </button>
                    </div>
                 ))}
                </section>
                <footer className="center__row">

                    <h4>&copy The coffee store</h4>
                    <div className="links">

                        <a href="#">FAQ'S</a>
                        <a href="#">Mission</a>
                        <a href="#">About</a>
                    </div>
                    <a href="#">Follow Us</a>

                </footer>
            </div>
        )

    }
}
export default Home;