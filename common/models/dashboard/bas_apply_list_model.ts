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
     * 管理同好会的接口参数
     * */
    export class BasApplyListModel extends cd.Common.BaseData {
        public applyId:number;
        public status:number;
        public intro:string;
        public message:string;
        public isSendNotice:boolean;
        public basData:bm.Dashboard.BasModel;

        constructor(data?:any) {
            super(data);
        }
    }
}