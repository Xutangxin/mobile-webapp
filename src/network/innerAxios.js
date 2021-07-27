//首页以外的网络请求

import { request } from '@/network/request';

export function getArticleList() {
    return request({
        url: "/getArticle.php",
        params: {
            num: 12,
        }
    });

}