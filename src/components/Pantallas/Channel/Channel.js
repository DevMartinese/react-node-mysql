import React, { Component } from 'react';
import './Channel.css';

import * as env from '../../../environment.env'

// Icons
import { FaLaptopCode } from 'react-icons/fa';


class Channel extends Component {

    // Join to Channel
    joinChannel = () => {
        const { roomName } = this.props;
        window.open('https://prueba-rtc-multiple.herokuapp.com?roomId=' + roomName);
    }

    render() {
        const { image, descripcion, titulo } = this.props;
        const divStyle = {backgroundImage: 'url(' + image + ')'};
        return (
            <div className="channelBody" style={divStyle}>
                <div className="textChannel">
                    <h6>{titulo}</h6>
                    <span>{descripcion}</span>
                </div>
                <div className="joinChannel" onClick={this.joinChannel}>
                    <button><FaLaptopCode /> <span>Unirme</span></button>
                </div>
            </div>
        )
    }
}

export default Channel;