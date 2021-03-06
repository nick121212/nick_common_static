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
define(["require", "exports", '../passport/user_model'], function (require, exports, um) {
    var Passport;
    (function (Passport) {
        /*
         * 用于绑定手机和邮箱
         * */
        var BindModel = (function (_super) {
            __extends(BindModel, _super);
            function BindModel(data) {
                _super.call(this, data);
            }
            BindModel._schema = {
                type: 'object',
                description: '绑定邮箱和手机',
                required: ['email', 'mobile', 'smsToken'],
                properties: {
                    email: {
                        type: 'string',
                        title: '邮箱地址',
                        format: 'email'
                    },
                    mobile: {
                        type: 'string',
                        title: '手机号码',
                        format: 'mobile'
                    },
                    smsToken: {
                        type: 'string',
                        title: '验证码'
                    }
                }
            };
            return BindModel;
        })(um.Passport.UserModel);
        Passport.BindModel = BindModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=bind_model.js.map