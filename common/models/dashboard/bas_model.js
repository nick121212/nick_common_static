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
         * 管理同好会的接口参数
         * */
        var BasModel = (function (_super) {
            __extends(BasModel, _super);
            function BasModel(data) {
                _super.call(this, data);
            }
            BasModel._schema = {
                type: 'object',
                description: '创建同好会',
                required: [
                    'title',
                    'avatarUrl',
                    'backgroundUrl',
                    'theme'
                ],
                properties: {
                    baId: {
                        type: 'number',
                        title: '同好会ID'
                    },
                    title: {
                        type: 'string',
                        title: '同好会名称',
                        maxLength: 30
                    },
                    intro: {
                        type: 'string',
                        title: '申请说明',
                        maxLength: 150
                    },
                    avatarUrl: {
                        type: 'string',
                        title: '会标'
                    },
                    backgroundUrl: {
                        type: 'string',
                        title: '背景图'
                    },
                    theme: {
                        type: 'string',
                        title: '主题色'
                    },
                    status: {
                        type: 'number',
                        title: '状态'
                    },
                    isDeleted: {
                        type: 'boolean',
                        title: '是否删除'
                    },
                    createAt: {
                        type: 'string',
                        title: '创建时间'
                    },
                    updateAt: {
                        type: 'string',
                        title: '更新时间'
                    },
                    limit: {
                        type: 'number',
                        title: '发布同好会数量',
                        required: true,
                        minimum: 1,
                        maximum: 6
                    },
                    bazhu: {
                        type: 'string'
                    },
                    bazhus: {
                        type: 'array',
                        items: {
                            "type": "object",
                            "properties": {
                                "nickname": {
                                    "title": "昵称",
                                    "type": "string"
                                }
                            },
                            "required": [
                                "nickname"
                            ]
                        }
                    },
                    creator: um.Passport.UserModel._schema,
                    submit: {
                        type: 'object',
                        readonly: false
                    }
                }
            };
            return BasModel;
        })(cd.Common.BaseData);
        Dashboard.BasModel = BasModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=bas_model.js.map