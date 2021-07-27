// 将首页相关的网络请求都抽离出来

import { request } from '@/network/request';

export function articleAxios() {
    return request({
        url: "/getArticle.php",
    });

}

export function newestAxios() {
    return request({
        url: "/getRecom.php",
        params: {
            num: 8,
        },
    });

}

export function bannerAxios() {
    return request({
        url: "/getList.php",
        params: {
            tejian: true,
        },
    });

}