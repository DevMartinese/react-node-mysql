import React, { Component } from 'react';
import './topMenu.css';

// Icons
import { FaBars } from 'react-icons/fa';


class TopMenu extends Component {

    render() {
        return (
            <div className="navTop">
                <div className="navTopLeft">
                    <FaBars className="iconMenu" />
                </div>
                <div className="navTopCenter">
                    <div className="searchBar">
                        <input type="text" />
                        <div className="searchBarIcon">
                            <FaBars className="iconMenu" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default TopMenu;