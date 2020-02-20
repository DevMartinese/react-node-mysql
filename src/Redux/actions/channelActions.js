import { createAction } from 'redux-actions';

import api from '../../services/api';

export const getChannelsSuccess = createAction('getChannelsSuccess');
export const createChannels = createAction('createChannels');
export const connectedChannel = createAction('connectedChannel');



export const getChannels = () => async (dispatch) => {
    const response = await api.channels.get();
    dispatch(getChannelsSuccess(response.data));
}