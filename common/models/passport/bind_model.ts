/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import um = require('../passport/user_model');

export module Passport {
    /*
     * 用于绑定手机和邮箱
     * */
    export class BindModel extends um.Passport.UserModel {
        public smsToken:string;
        public static _schema = {
            type: 'object',
            description: '绑定邮箱和手机',
            required: ['email', 'mobile', 'smsToken'],
            properties: {
                email: {
                    type: 'string',
                    title: '邮箱地址',
                    format: 'email'
                },
                mobile: {
                    type: 'string',
                    title: '手机号码',
                    format: 'mobile'
                },
                smsToken: {
                    type: 'string',
                    title: '验证码'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}