/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('./base_data');

export module Common {
    export class QueryBase extends bd.Common.BaseData {

        public page:number;
        public pageCount:number;
        public order:string;

        constructor(data?:any) {
            super(data);
        }
    }
}