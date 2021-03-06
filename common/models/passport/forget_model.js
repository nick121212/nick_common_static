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
define(["require", "exports", '../passport/register_model'], function (require, exports, rm) {
    var Passport;
    (function (Passport) {
        /*
         * 找回密码模型
         * */
        var ForgetModel = (function (_super) {
            __extends(ForgetModel, _super);
            function ForgetModel(data) {
                _super.call(this, data);
            }
            ForgetModel._schema = {
                type: 'object',
                required: ['username', 'password', 'passwordAgain', 'smsToken'],
                properties: {
                    username: {
                        type: 'string',
                        title: '用户名'
                    },
                    password: {
                        type: 'string',
                        title: '密码',
                        minLength: 6,
                        maxLength: 30
                    },
                    passwordAgain: {
                        type: 'string',
                        title: '重复密码',
                        minLength: 6,
                        maxLength: 30
                    },
                    smsToken: {
                        type: 'string',
                        title: '邮箱验证码'
                    }
                }
            };
            return ForgetModel;
        })(rm.Passport.RegisterModel);
        Passport.ForgetModel = ForgetModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=forget_model.js.map