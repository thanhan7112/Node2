import axios from 'axios';
import React, {Component} from 'react';
import './Footer.css';
export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerdata: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8090/api/footer").then(response => {
            console.log(response.data);
            this.setState({ footerdata: response.data });
        }).catch(function (error) {
            console.log(error)
        })
    }
    render(){
    return (
        <div className="footer-dark">
            <footer>
            {this.state.footerdata.map((footer) => (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-2 item">
                            <h3>{footer.Services}</h3>
                            <ul>
                                <li><a href="#">{footer.ServicesDetail}</a></li>
                                <li><a href="#">{footer.ServicesDetail}</a></li>
                                <li><a href="#">{footer.ServicesDetail}</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2 item">
                            <h3>{footer.About}</h3>
                            <ul>
                                <li><a href="#">{footer.AboutDetail}</a></li>
                                <li><a href="#">{footer.AboutDetail}</a></li>
                                <li><a href="#">{footer.AboutDetail}</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>{footer.ShopName}</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div class="col item social">
                            <a href="#"><i className="icon ion-social-facebook"></i></a>
                            <a href="#"><i className="icon ion-social-twitter"></i></a>
                            <a href="#"><i className="icon ion-social-youtube"></i></a>
                            <a href="#"><i className="icon ion-social-instagram"></i></a>
                        </div>
                    </div>
                    <p className="copyright">Company Name © 2022</p>
                </div>
                ))}
            </footer>
        </div>

    );
}
}