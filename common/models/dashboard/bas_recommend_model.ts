/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import bm = require('./bas_model');

export module Dashboard {
    /*
     * 同好会申请模型
     * */
    export class BasRecommendModel extends cd.Common.BaseData {
        public recommendId:number;
        public basData:bm.Dashboard.BasModel;
        public status:number;

        constructor(data?:any) {
            super(data);
        }
    }
}