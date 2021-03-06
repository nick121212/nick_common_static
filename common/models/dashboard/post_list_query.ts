/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import qb = require('../common/query_base');

export module Dashboard {
    /*
     * 管理同好会的接口参数
     * */
    export class PostListQuery extends qb.Common.QueryBase {
        public postId:number;
        public baId:number;
        public userToken:string;

        public static _schema = {
            type: 'object',
            description: '帖子管理',
            properties: {
                postId: {
                    type: 'number',
                    title: '帖子ID'
                },
                baId: {
                    type: 'number',
                    title: '同好会ID'
                },
                user_token: {
                    type: 'string',
                    title: '用户标识'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}