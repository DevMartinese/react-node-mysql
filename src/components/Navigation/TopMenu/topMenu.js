import React, { Component } from 'react';
import './topMenu.css';

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
                            <a href="">Configuración</a>
                        </li>
                        <li>
                            <a href="">Cerrar sesión</a>
                        </li>
                    </div>
                }
            </div>
        )
    }

}


export default TopMenu;