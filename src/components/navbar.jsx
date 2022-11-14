import React, { Component } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

class NavBar extends Component { 
    render() { 
        return (
            <div>
                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            Navbar
                        </a>
                        <Link to="/cart" className="btn btn-primary">
                                {this.props.totalCounters}
                        </Link> 
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;