import axios from 'axios';

export function request(config) {
    let instance = axios.create({
        baseURL: 'https://ku.qingnian8.com/dataApi/qingKu',
    });

    return instance(config);
}