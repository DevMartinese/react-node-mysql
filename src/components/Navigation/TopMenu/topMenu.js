import React, { Component } from 'react';
import './topMenu.css';

// Redux
import { connect } from "react-redux";

// Icons
import { FaLaptopCode, FaRegEnvelope, FaRegBell } from 'react-icons/fa';

// http://demo.foxthemes.net/gotubev1/your-watch-later.html#

class TopMenu extends Component {
    render() {
        return (
            <div className="navTop">
                <div className="navTopLeft">
                    <img alt="logo" src="http://demo.foxthemes.net/gotubev1/assets/images/logo.png"></img>
                </div>
                <div className="navTopCenter">
                    <div className="searchBar">
                        <div className="searchBarIcon">
                            <FaLaptopCode />
                        </div>
                        <input type="text" placeholder="Buscar persona o canal..." />
                    </div>
                </div>
                <div className="navTopRight">
                    <li>
                        <button>
                            <span className="badge">2</span>
                            <FaRegBell />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span className="badge">2</span>
                            <FaRegEnvelope />
                        </button>
                    </li>
                    <li>
                        <button onClick={this.showUserMenu}>
                            <img alt="user" src="http://demo.foxthemes.net/gotubev1/assets/images/avatars/avatar-1.jpg" />
                        </button>
                    </li>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(TopMenu);