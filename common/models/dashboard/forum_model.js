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
define(["require", "exports", '../common/base_data', '../passport/user_model'], function (require, exports, cd, um) {
    var Dashboard;
    (function (Dashboard) {
        /*
         * 论坛模型
         * */
        var ForumModel = (function (_super) {
            __extends(ForumModel, _super);
            function ForumModel(data) {
                _super.call(this, data);
            }
            ForumModel._schema = {
                type: 'object',
                description: '热门板块管理',
                required: [
                    'title',
                    'intro',
                    'pictures',
                    'url'
                ],
                properties: {
                    forumId: {
                        type: 'number',
                        title: 'ID'
                    },
                    title: {
                        type: 'string',
                        title: '标题'
                    },
                    intro: {
                        type: 'string',
                        title: '简介',
                        maxLength: 150
                    },
                    url: {
                        type: 'string',
                        title: '链接地址'
                    },
                    pictures: {
                        type: 'array',
                        title: '热门板块图片',
                        items: {
                            type: 'object',
                            required: ['url'],
                            properties: {
                                url: {
                                    type: 'string',
                                    title: '图片地址'
                                }
                            }
                        }
                    },
                    creator: um.Passport.UserModel._schema,
                    editor: um.Passport.UserModel._schema
                }
            };
            return ForumModel;
        })(cd.Common.BaseData);
        Dashboard.ForumModel = ForumModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=forum_model.js.map