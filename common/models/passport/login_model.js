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
         * 登录模型
         * */
        var LoginModel = (function (_super) {
            __extends(LoginModel, _super);
            function LoginModel(data) {
                _super.call(this, data);
            }
            LoginModel._schema = {
                type: "object",
                required: ['username', 'password'],
                properties: {
                    username: {
                        type: 'string',
                        minLength: 6,
                        maxLength: 30,
                        title: '用户名',
                        description: ''
                    },
                    password: {
                        type: 'string',
                        title: '密码',
                        minLength: 6,
                        maxLength: 30,
                        description: ''
                    },
                    expireIn: {
                        type: 'boolean',
                        title: '记住我'
                    }
                }
            };
            return LoginModel;
        })(bd.Common.BaseData);
        Passport.LoginModel = LoginModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=Login_model.js.map