import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { connect } from "react-redux";

const Footer = () => {
    return(
        <Fragment>
            <div className="container-fluid bg-footer">
                <div className="container">
                    <div className="footer-navigation">
                        <ul className="footer-list">
                            <li><Link to="/">Home</Link></li>                                                     
                            <li><Link to="/">About Us</Link></li>                            
                            <li><Link to="/">Contacts</Link></li>                      
                        </ul>
                    </div>
                    <div className="footer-links">
                        <Link to="/"><i className="fa fa-twitter-square"></i></Link>
                        <Link to="/"><i className="fa fa-facebook-square"></i></Link>
                        <Link to="/"><i className="fa fa-telegram"></i></Link>
                    </div>
                    <div className="bottom-footer">
                        <p>Created by Myself <Link to="/">MyToDOlist.com</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>        
    )
}

export default connect()(Footer);
