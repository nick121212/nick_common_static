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
define(["require", "exports", '../common/query_base'], function (require, exports, qb) {
    var Dashboard;
    (function (Dashboard) {
        /*
         * 管理同好会的接口参数
         * */
        var BasListQuery = (function (_super) {
            __extends(BasListQuery, _super);
            function BasListQuery(data) {
                _super.call(this, data);
            }
            return BasListQuery;
        })(qb.Common.QueryBase);
        Dashboard.BasListQuery = BasListQuery;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=bas_list_query.js.map