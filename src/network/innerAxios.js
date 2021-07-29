//首页以外的网络请求

import { request } from '@/network/request';

//文章页面
export function getArticleList(page = 1) {
    return request({
        url: "/getArticle.php",
        params: {
            num: 9,
            page: page,
        }
    });

}

//灵感页面
export function getInsFun(page = 1) {
    return request({
        url: "/getList.php",
        params: {
            num: 8,
            page: page,
        }
    });

}


//分类页面
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

//详情页面
export function getDetailFun(id, cid, type) {
    return request({
        url: "/getDetail.php",
        params: {
            id,
            cid,
            type,
        }
    });

}