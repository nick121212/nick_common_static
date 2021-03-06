/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');

export module Passport {
    /*
     * 用于绑定手机和邮箱
     * */
    export class EditPasswordModel extends bd.Common.BaseData {
        public oldPassword:string;
        public password:string;
        public passwordAgain:string;
        public static _schema={
            type: 'object',
            description: '修改密码',
            required: ['oldPassword', 'password', 'passwordAgain'],
            properties: {
                oldPassword: {
                    type: 'string',
                    title: '原始密码',
                    minLength: 6,
                    maxLength: 30
                },
                password: {
                    type: 'string',
                    title: '新密码',
                    minLength: 6,
                    maxLength: 30
                },
                passwordAgain: {
                    type: 'string',
                    title: '重复新密码',
                    minLength: 6,
                    maxLength: 30
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}