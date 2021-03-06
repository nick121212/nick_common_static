/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');

export module Passport {
    /*
     * 登录模型
     * */
    export class LoginModel extends bd.Common.BaseData {
        public username:string;
        public password:string;
        public expireIn:boolean;

        public static _schema:any={
            type: "object",
            required: ['username', 'password'],
            properties: {
                username: {
                    type: 'string',
                    minLength: 6,
                    maxLength: 30,
                    title: '用户名',
                    description: ''
                },
                password: {
                    type: 'string',
                    title: '密码',
                    minLength: 6,
                    maxLength: 30,
                    description: ''
                },
                expireIn: {
                    type: 'boolean',
                    title: '记住我'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}