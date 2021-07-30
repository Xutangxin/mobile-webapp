import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


export function request(config) {
    let instance = axios.create({
        baseURL: 'https://ku.qingnian8.com/dataApi/qingKu',
    });

    //网络加载进度条及拦截器配置
    instance.interceptors.request.use(config => {
        NProgress.start();
        return config;
    });

    instance.interceptors.response.use(res => {
        NProgress.done();
        return res;
    });

    return instance(config);
}