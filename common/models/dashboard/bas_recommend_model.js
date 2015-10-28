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
         * 同好会申请模型
         * */
        var BasRecommendModel = (function (_super) {
            __extends(BasRecommendModel, _super);
            function BasRecommendModel(data) {
                _super.call(this, data);
            }
            return BasRecommendModel;
        })(cd.Common.BaseData);
        Dashboard.BasRecommendModel = BasRecommendModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=bas_recommend_model.js.map