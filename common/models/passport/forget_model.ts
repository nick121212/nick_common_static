/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import rm = require('../passport/register_model');

export module Passport {
    /*
     * 找回密码模型
     * */
    export class ForgetModel extends rm.Passport.RegisterModel {
        public userToken:string;
        public static _schema:any = {
            type: 'object',
            required: ['username', 'password', 'passwordAgain', 'smsToken'],
            properties: {
                username: {
                    type: 'string',
                    title: '用户名'
                },
                password: {
                    type: 'string',
                    title: '密码',
                    minLength: 6,
                    maxLength: 30
                },
                passwordAgain: {
                    type: 'string',
                    title: '重复密码',
                    minLength: 6,
                    maxLength: 30
                },
                smsToken: {
                    type: 'string',
                    title: '邮箱验证码'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}