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
    var Passport;
    (function (Passport) {
        /*
         * 注册模型
         * */
        var RegisterModel = (function (_super) {
            __extends(RegisterModel, _super);
            function RegisterModel(data) {
                _super.call(this, data);
            }
            return RegisterModel;
        })(bd.Common.BaseData);
        Passport.RegisterModel = RegisterModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=register_model.js.map