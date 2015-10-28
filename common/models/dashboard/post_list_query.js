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
        var PostListQuery = (function (_super) {
            __extends(PostListQuery, _super);
            function PostListQuery(data) {
                _super.call(this, data);
            }
            PostListQuery._schema = {
                type: 'object',
                description: '帖子管理',
                properties: {
                    postId: {
                        type: 'number',
                        title: '帖子ID'
                    },
                    baId: {
                        type: 'number',
                        title: '同好会ID'
                    },
                    user_token: {
                        type: 'string',
                        title: '用户标识'
                    }
                }
            };
            return PostListQuery;
        })(qb.Common.QueryBase);
        Dashboard.PostListQuery = PostListQuery;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=post_list_query.js.map