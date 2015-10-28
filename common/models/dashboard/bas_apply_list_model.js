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
         * 管理同好会的接口参数
         * */
        var BasApplyListModel = (function (_super) {
            __extends(BasApplyListModel, _super);
            function BasApplyListModel(data) {
                _super.call(this, data);
            }
            return BasApplyListModel;
        })(cd.Common.BaseData);
        Dashboard.BasApplyListModel = BasApplyListModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=bas_apply_list_model.js.map