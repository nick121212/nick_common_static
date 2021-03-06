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
         * 帖子数据
         * */
        var JumpModel = (function (_super) {
            __extends(JumpModel, _super);
            function JumpModel(data) {
                _super.call(this, data);
            }
            JumpModel._schema = {
                type: 'object',
                description: '跳转管理',
                required: [
                    'key',
                    'label',
                    'weixinIosUrl',
                    'weixinAndroidUrl',
                    'appStoreUrl',
                    'apkUrl',
                    'defaultUrl'
                ],
                properties: {
                    key: {
                        type: 'string',
                        title: 'KEY'
                    },
                    label: {
                        type: 'string',
                        title: '标签'
                    },
                    weixinIosUrl: {
                        type: 'string',
                        title: '微信IOS跳转地址'
                    },
                    weixinIosCount: {
                        type: 'number'
                    },
                    weixinAndroidUrl: {
                        type: 'string',
                        title: '微信Android跳转地址'
                    },
                    weixinAndroidCount: {
                        type: 'number'
                    },
                    appStoreUrl: {
                        type: 'string',
                        title: 'appstore跳转地址'
                    },
                    appStoreCount: {
                        type: 'number'
                    },
                    apkUrl: {
                        type: 'string',
                        title: 'apk跳转地址'
                    },
                    apkCount: {
                        type: 'number'
                    },
                    defaultUrl: {
                        type: 'string',
                        title: '默认跳转地址'
                    },
                    defaultCount: {
                        type: 'number'
                    }
                }
            };
            return JumpModel;
        })(cd.Common.BaseData);
        Dashboard.JumpModel = JumpModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=jump_model.js.map