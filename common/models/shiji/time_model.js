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
define(["require", "exports", '../common/base_data'], function (require, exports, bd) {
    var Shiji;
    (function (Shiji) {
        /*
         * 时计图片
         * */
        var TimeModel = (function (_super) {
            __extends(TimeModel, _super);
            function TimeModel(data) {
                _super.call(this, data);
            }
            return TimeModel;
        })(bd.Common.BaseData);
        Shiji.TimeModel = TimeModel;
    })(Shiji = exports.Shiji || (exports.Shiji = {}));
});
//# sourceMappingURL=time_model.js.map