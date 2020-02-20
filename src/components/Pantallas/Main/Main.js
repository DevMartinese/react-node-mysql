import React, { Component } from 'react';
import './Main.css';

import Channel from '../Channel/Channel';

// Redux
import { getChannels as getChannelsAction } from "../../../Redux/actions";
import { connect } from "react-redux";

class Main extends Component {

    componentDidMount() {
        const { getChannels } = this.props;
        getChannels();
    }


    render() {
        const { channels } = this.props;
        return (
            <div className="sideNavComponent">
                <h3 className="title">
                    Canales
                </h3>
                <div className="channelList">
                    {
                        channels.map(channel => (
                            <Channel
                            key={channel.id}
                            titulo={channel.titulo}
                            descripcion={channel.descripcion}
                            image={channel.image}
                            code={channel.code}
                            >

                            </Channel>
                        ))
                    }   
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        channels: state.channelReducer,
    };
}

const mapDispatchToProps = {
    getChannels: getChannelsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);