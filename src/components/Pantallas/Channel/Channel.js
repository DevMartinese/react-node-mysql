import React, { Component } from 'react';
import './Channel.css';


// Icons
import { FaLaptopCode } from 'react-icons/fa';


class Channel extends Component {

    // Join to Channel
    joinChannel = () => {
        const { code } = this.props;
        window.open('http://localhost:3000/?roomCode=' + code);
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