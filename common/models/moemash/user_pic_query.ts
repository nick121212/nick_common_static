/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/query_base');

export module Moemash{
    export class UserPicQuery extends bd.Common.QueryBase {
        public type:number = 0;

        constructor(data?:any) {
            super(data);
        }
    }
}