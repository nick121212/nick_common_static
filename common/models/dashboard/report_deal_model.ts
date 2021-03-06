/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import report = require('./report_model');

export module Dashboard {
    /*
     * 举报处理类
     * */
    export class ReportDealModel extends cd.Common.BaseData {
        public reportData:report.Dashboard.ReportModel;
        public nickname:string;
        public status:number;

        constructor(data?:any) {
            super(data);
        }
    }
}