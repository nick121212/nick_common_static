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
         * 用户模型
         * */
        var UserModel = (function (_super) {
            __extends(UserModel, _super);
            function UserModel(data) {
                _super.call(this, data);
            }
            UserModel._schema = {
                type: 'object',
                description: '用户',
                required: ['nickname'],
                properties: {
                    username: {
                        type: 'string',
                        title: '用户登录名'
                    },
                    nickname: {
                        type: 'string',
                        title: '昵称'
                    },
                    avatarUrl: {
                        type: 'string',
                        title: '头像'
                    },
                    mobile: {
                        type: 'string',
                        title: '手机'
                    },
                    email: {
                        type: 'string',
                        title: '邮箱'
                    },
                    userToken: {
                        type: 'string',
                        title: '用户标识'
                    }
                }
            };
            return UserModel;
        })(bd.Common.BaseData);
        Passport.UserModel = UserModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=user_model.js.map