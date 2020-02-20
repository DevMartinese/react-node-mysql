import axios from 'axios';

const requestHelper = axios.create({
    baseURL: 'http://localhost:4001'
});

export default {
    channels: {
        get: () => requestHelper({
            url: 'channels',
            method: 'GET'
        }),

        create: data => requestHelper({
            url: 'channels',
            method: 'POST',
            data
        })
    }
};