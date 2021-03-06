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
         * 首页顶图模型
         * */
        var TopPictureModel = (function (_super) {
            __extends(TopPictureModel, _super);
            function TopPictureModel(data) {
                _super.call(this, data);
            }
            TopPictureModel._schema = {
                type: 'object',
                description: '首页图片管理',
                required: [
                    'imageKey',
                    'contentType',
                    'title',
                    'url',
                    'toPostId',
                    'toBaId',
                    'toUserToken',
                    'position',
                ],
                properties: {
                    picId: {
                        type: 'number',
                        title: 'ID'
                    },
                    imageKey: {
                        type: 'string',
                        title: '图片'
                    },
                    contentType: {
                        type: 'number',
                        title: '类型'
                    },
                    title: {
                        type: 'string',
                        title: '标题'
                    },
                    intro: {
                        type: 'string',
                        title: '介绍',
                        maxLength: 150
                    },
                    url: {
                        type: 'string',
                        title: '链接地址'
                    },
                    toPostId: {
                        type: 'number',
                        title: '链接到的帖子'
                    },
                    toBaId: {
                        type: 'number',
                        title: '链接到的同好会'
                    },
                    toUserToken: {
                        type: 'string',
                        title: '链接到的用户'
                    },
                    position: {
                        type: 'number',
                        title: '位置'
                    }
                }
            };
            return TopPictureModel;
        })(cd.Common.BaseData);
        Dashboard.TopPictureModel = TopPictureModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=top_picture_model.js.map