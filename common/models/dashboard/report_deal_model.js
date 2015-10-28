/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../common/base_data'], function (require, exports, cd) {
    var Dashboard;
    (function (Dashboard) {
        /*
         * 举报处理类
         * */
        var ReportDealModel = (function (_super) {
            __extends(ReportDealModel, _super);
            function ReportDealModel(data) {
                _super.call(this, data);
            }
            return ReportDealModel;
        })(cd.Common.BaseData);
        Dashboard.ReportDealModel = ReportDealModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=report_deal_model.js.map