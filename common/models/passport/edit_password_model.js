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
         * 用于绑定手机和邮箱
         * */
        var EditPasswordModel = (function (_super) {
            __extends(EditPasswordModel, _super);
            function EditPasswordModel(data) {
                _super.call(this, data);
            }
            EditPasswordModel._schema = {
                type: 'object',
                description: '修改密码',
                required: ['oldPassword', 'password', 'passwordAgain'],
                properties: {
                    oldPassword: {
                        type: 'string',
                        title: '原始密码',
                        minLength: 6,
                        maxLength: 30
                    },
                    password: {
                        type: 'string',
                        title: '新密码',
                        minLength: 6,
                        maxLength: 30
                    },
                    passwordAgain: {
                        type: 'string',
                        title: '重复新密码',
                        minLength: 6,
                        maxLength: 30
                    }
                }
            };
            return EditPasswordModel;
        })(bd.Common.BaseData);
        Passport.EditPasswordModel = EditPasswordModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=edit_password_model.js.map