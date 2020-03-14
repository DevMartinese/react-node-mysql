import React, { Component } from 'react';
import './Room.css';

// Socket config


class Room extends Component {


    render() {
        const { } = this.props;
        var url = new URL(window.location.href);
        var c = url.searchParams.get("id");
        return (
            <div className="RoomComponent">
                dsaadsdsa
            </div>
        )
    }
}


export default (Room);