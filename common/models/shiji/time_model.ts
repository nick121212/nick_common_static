/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');

export module Shiji {
    /*
     * 时计图片
     * */
    export class TimeModel extends bd.Common.BaseData {
        public time:string;
        public imageKey:string;

        constructor(data?:any) {
            super(data);
        }
    }
}