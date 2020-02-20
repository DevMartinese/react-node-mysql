import { handleActions } from 'redux-actions';
import { getChannelsSuccess, createChannels, connectedChannel } from '../actions/channelActions';

export default handleActions({

    [createChannels]: (state, action) => { // Crea un nuevo canal
        return [...state, action.payload];
    },
    [getChannelsSuccess]: (state, action) => { // Devuelve todos los canales
        return action.payload;
    },
    [connectedChannel]: (state, action) => { // Indica si el usuario ya esta conectado a un canal
        return [...state, action.payload];
    }


}, []);