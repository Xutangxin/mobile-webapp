//首页以外的网络请求

import { request } from '@/network/request';

export function getArticleList(page = 1) {
    return request({
        url: "/getArticle.php",
        params: {
            num: 9,
            page: page,
        }
    });

}

export function getInsFun(page = 1) {
    return request({
        url: "/getList.php",
        params: {
            num: 8,
            page: page,
        }
    });

}

export function getNavFun() {
    return request({
        url: "/infoClass.php",
    });

}

export function getListFun(page = 1, cid = 47) {
    return request({
        url: "/getList.php",
        params: {
            page: page,
            cid: cid,
        }
    });

}