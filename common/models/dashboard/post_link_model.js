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
         * 帖子链接数据
         * */
        var PostLinkModel = (function (_super) {
            __extends(PostLinkModel, _super);
            function PostLinkModel(data) {
                _super.call(this, data);
            }
            PostLinkModel._schema = {
                type: 'object',
                description: '帖子管理',
                required: [
                    'contentType',
                    'title',
                    'toPostId',
                    'toBaId',
                    'toUserToken',
                    'url'
                ],
                properties: {
                    postId: {
                        type: 'number',
                        title: '帖子ID'
                    },
                    contentType: {
                        type: 'number',
                        title: '链接类型'
                    },
                    title: {
                        type: 'string',
                        title: '标题'
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
                    submit: {
                        type: 'object',
                        readonly: false
                    }
                }
            };
            PostLinkModel._convert = function (link) {
                return new PostLinkModel({
                    contentType: link.content_type,
                    linkId: link.id,
                    postId: link.post_id,
                    title: link.title,
                    toBaId: link.to_ba_id,
                    toPostId: link.to_post_id,
                    toUserToken: link.to_user_token,
                    url: link.url
                });
            };
            return PostLinkModel;
        })(cd.Common.BaseData);
        Dashboard.PostLinkModel = PostLinkModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=post_link_model.js.map