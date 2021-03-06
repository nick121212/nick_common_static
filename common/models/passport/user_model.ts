/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');

export module Passport {
    /*
     * 用户模型
     * */
    export class UserModel extends bd.Common.BaseData {
        public static _schema:any = {
            type: 'object',
            description: '用户',
            required: ['nickname'],
            properties: {
                username: {
                    type: 'string',
                    title: '用户登录名'
                },
                nickname: {
                    type: 'string',
                    title: '昵称'
                },
                avatarUrl: {
                    type: 'string',
                    title: '头像'
                },
                mobile: {
                    type: 'string',
                    title: '手机'
                },
                email: {
                    type: 'string',
                    title: '邮箱'
                },
                userToken: {
                    type: 'string',
                    title: '用户标识'
                }
            }
        };
        public username:string;
        public nickname:string;
        public avatarUrl:string;
        public mobile:string;
        public email:string;
        public userToken:string;

        constructor(data?:any) {
            super(data);
        }
    }
}