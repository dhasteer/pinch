import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-7 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/app-simulation">App Simulation</Link></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact Us</h5>
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:cristinaserrano@sfhs.com, matthewhuo@sfhs.com, anabrockmann@sfhs.com, marcsevilla@sfhs.com">
                         Pinch Team</a>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    © Copyright 2018 Pinch<br />
                    Website developed by Divija Hasteer
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;