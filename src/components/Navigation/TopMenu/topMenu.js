import React, { Component } from 'react';
import './topMenu.css';

// Redux
import { connect } from "react-redux";
import { logoutUser } from '../../../Redux/actions';

// Icons
import { FaLaptopCode, FaRegEnvelope, FaRegBell } from 'react-icons/fa';

// http://demo.foxthemes.net/gotubev1/your-watch-later.html#

class TopMenu extends Component {
    state = {
        showMenu: false,
    };
    showUserMenu = () => {
        if(this.state.showMenu) {
            this.setState({ showMenu: false });
        } else {
            this.setState({ showMenu: true });
        }
    }
    hideUserMenu = () => {
        this.setState({ showMenu: false });
    }
    logoutUserButton = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    }
    render() {
        const { showMenu } = this.state;
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
                
                {
                    showMenu && 
                    <div className="dropDownMenuUser">
                        <li className="closeDropDown">
                            <span onClick={this.hideUserMenu}>cerrar</span>
                        </li>
                        <li>
                            <span href="">Configuración</span>
                        </li>
                        <li>
                            <span onClick={this.logoutUserButton()}>Cerrar sesión</span>
                        </li>
                    </div>
                }
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