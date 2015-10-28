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
    export class BasListQuery extends qb.Common.QueryBase {
        public baId:number;
        public title:string;

        constructor(data?:any) {
            super(data);
        }
    }
}