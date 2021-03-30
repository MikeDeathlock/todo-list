import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { connect } from "react-redux";






const Header = () => {
    return(
        <Fragment>
            <div className="container-fluid bg-header">
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <Link to="/">
                                <p className="logo">My<span>ToDO</span> list</p>
                            </Link>
                        </div>
                        <div className="header-navigation">
                            <ul className="navigation-list">
                                <li><Link to="/">Home</Link></li>                            
                                <li><Link to="/">Category</Link></li>                            
                                <li><Link to="/">About Us</Link></li>                            
                                <li><Link to="/add-to_do">Add ToDo</Link></li>                            
                                <li><Link to="/">Log in</Link></li>                            
                            </ul>
                        </div>                    
                    </div>                    
                </div>
            </div>
        </Fragment>    
    )
}



export default connect()(Header);