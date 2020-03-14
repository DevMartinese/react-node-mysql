import React, { Component } from 'react';
import './topMenu.css';

// Redux
import { connect } from "react-redux";

// Icons
import { FaLaptopCode, FaRegEnvelope, FaRegBell } from 'react-icons/fa';

// http://demo.foxthemes.net/gotubev1/your-watch-later.html#

class TopMenu extends Component {
    render() {
        const { userName, userPhoto } = this.props;
        return (
            <div className="navTop">
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
                            {/* <span className="badge">2</span> */}
                            <FaRegBell />
                        </button>
                    </li>
                    <li>
                        <button>
                            {/* <span className="badge">2</span> */}
                            <FaRegEnvelope />
                        </button>
                    </li>
                    <li>
                        <button onClick={this.showUserMenu}>
                            <small>{userName}</small>
                            <img alt="user" src={userPhoto} /> 
                        </button>
                    </li>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        userName: state.auth.user.displayName,
        userPhoto: state.auth.user.photoURL
    };
}

export default connect(mapStateToProps)(TopMenu);