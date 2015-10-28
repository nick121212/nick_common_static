/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');

export module Passport {
    /*
     * 注册模型
     * */
    export class RegisterModel extends bd.Common.BaseData {
        public username:string;
        public password:string;
        public passwordAgain:string;
        public smsToken:string;

        constructor(data?:any) {
            super(data);
        }
    }
}