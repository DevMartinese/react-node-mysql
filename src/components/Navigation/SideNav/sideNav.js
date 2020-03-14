import React, { Component } from 'react';
import './sideNav.css';

// Icons
import { FaLaptopCode, FaCog, FaPowerOff } from 'react-icons/fa';

// Redux
import { logoutUser } from '../../../Redux/actions';
import { connect } from "react-redux";


class sideNav extends Component {
    logoutUserAction = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    }
    render() {
        return (
            <div className="sideNav">
                <div className="sideNav-title">
                    Menu
                </div>
                <li id="selected">
                    <FaLaptopCode />
                </li>
                <hr></hr>
                <li>
                    <FaCog />
                </li>
                <li onClick={this.logoutUserAction}>
                    <FaPowerOff />
                </li>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
        userName: state.auth.user.displayName
    };
}

export default connect(mapStateToProps)(sideNav);