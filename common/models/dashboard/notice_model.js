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
         * 公告模型
         * */
        var NoticeModel = (function (_super) {
            __extends(NoticeModel, _super);
            function NoticeModel(data) {
                _super.call(this, data);
            }
            NoticeModel._schema = {
                type: 'object',
                description: '公告管理',
                required: [
                    'content',
                    'url'
                ],
                properties: {
                    noticeId: {
                        type: 'number',
                        title: 'ID'
                    },
                    content: {
                        type: 'string',
                        title: '公告内容',
                        maxLength: 150
                    },
                    url: {
                        type: 'string',
                        title: '链接地址'
                    },
                    theme: {
                        type: 'string',
                        title: '主题色'
                    },
                    tag: {
                        type: 'string',
                        title: '标签'
                    },
                    creator: um.Passport.UserModel._schema,
                    editor: um.Passport.UserModel._schema
                }
            };
            return NoticeModel;
        })(cd.Common.BaseData);
        Dashboard.NoticeModel = NoticeModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=notice_model.js.map