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
define(["require", "exports", '../common/base_data', './post_model'], function (require, exports, cd, post) {
    var Dashboard;
    (function (Dashboard) {
        /*
         * 管理同好会的接口参数
         * */
        var ReportModel = (function (_super) {
            __extends(ReportModel, _super);
            function ReportModel(data) {
                _super.call(this, data);
            }
            ReportModel._schema = {
                type: 'object',
                description: '举报',
                required: [
                    'reportType'
                ],
                properties: {
                    reportType: {
                        type: 'number',
                        title: '举报类型'
                    },
                    postType: {
                        type: 'number',
                        title: '帖子类型'
                    },
                    reportContent: {
                        type: 'string',
                        maxLength: 150,
                        title: '举报内容'
                    },
                    replyData: post.Dashboard.PostModel._schema,
                    postData: post.Dashboard.PostModel._schema
                }
            };
            return ReportModel;
        })(cd.Common.BaseData);
        Dashboard.ReportModel = ReportModel;
    })(Dashboard = exports.Dashboard || (exports.Dashboard = {}));
});
//# sourceMappingURL=report_model.js.map