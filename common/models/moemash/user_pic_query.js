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
define(["require", "exports", '../common/query_base'], function (require, exports, bd) {
    var Moemash;
    (function (Moemash) {
        var UserPicQuery = (function (_super) {
            __extends(UserPicQuery, _super);
            function UserPicQuery(data) {
                _super.call(this, data);
                this.type = 0;
            }
            return UserPicQuery;
        })(bd.Common.QueryBase);
        Moemash.UserPicQuery = UserPicQuery;
    })(Moemash = exports.Moemash || (exports.Moemash = {}));
});
//# sourceMappingURL=user_pic_query.js.map