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
define(["require", "exports", '../common/base_data'], function (require, exports, cd) {
    var Dashboard;
    (function (Dashboard) {
        /*
         * 同好会申请模型
         * */
        var BasApplyModel = (function (_super) {
            __extends(BasApplyModel, _super);
            function BasApplyModel(data) {
                _super.call(this, data);
            }
            BasApplyModel._schema = {
                type: 'object',
                description: '公告管理',
                required: [
                    'content',
                    'url'
                ],
                properties: {
                    nickname: {
                        type: 'string',
                        title: '审核者昵称'
                    },
                    status: {
                        type: 'number',
                        title: '审核结果'
                    },
                    message: {
                        type: 'string',
                        title: '审核内容',
                        maxLength: 150
                    },
                    isSendNotice: {
                        type: 'boolean',
                        title: '是否把reply_message发到申请者收件箱'
                    }
                }
            };
            return BasApplyModel;
        })(cd.Common.BaseData);
        Dashboard.BasApplyModel = BasApplyModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=bas_apply_model.js.map