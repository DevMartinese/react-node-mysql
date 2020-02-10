import React, { Component } from 'react';
import './Main.css';

// Icons
import { FaLaptopCode, FaCog } from 'react-icons/fa';

// http://demo.foxthemes.net/gotubev1/your-watch-later.html#

class Main extends Component {
    render() {
        return (
            <div className="sideNav">
                <div className="sideNav-title">
                    Menu
                </div>
                <li>
                    <FaLaptopCode />
                    <span>Inicio</span>
                </li>
                <li>
                    <FaLaptopCode />
                    <span>Inicio</span>
                </li>
                <li>
                    <FaLaptopCode />
                    <span>Inicio</span>
                </li>
                <li id="selected">
                    <FaLaptopCode />
                    <span>Inicio</span>
                </li>
                <li>
                    <FaLaptopCode />
                    <span>Inicio</span>
                </li>
                <hr></hr>
                <div className="sideNav-title">
                    Menu
                </div>
                <li>
                    <FaCog />
                    <span>Configuración</span>
                </li>
            </div>
        )
    }

}


export default Main;