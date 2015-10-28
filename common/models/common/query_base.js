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
define(["require", "exports", './base_data'], function (require, exports, bd) {
    var Common;
    (function (Common) {
        var QueryBase = (function (_super) {
            __extends(QueryBase, _super);
            function QueryBase(data) {
                _super.call(this, data);
            }
            return QueryBase;
        })(bd.Common.BaseData);
        Common.QueryBase = QueryBase;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=query_base.js.map