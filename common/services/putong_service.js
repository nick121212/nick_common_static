/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var PutongService = (function () {
        function PutongService() {
        }
        PutongService._name = 'PutongService';
        PutongService.factory = ['$rootScope', '$q', '$http', 'config', function ($rootScope, $q, $http, config) {
            return {
                /*
                 * 生成七牛上传token，有效期1小时，1小时内无限用
                 * */
                gen_qiniu_upload_token: function () {
                    var promise = $http({
                        method: 'GET',
                        url: config.putong_api_url + '/putong/gen_qiniu_upload_token',
                        needToken: true
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 举报帖子
                 * */
                report_a_post: function (model) {
                    var promise = $http({
                        method: 'POST',
                        url: config.putong_api_url + '/putong/report_a_post',
                        data: {
                            report_type: model.reportType,
                            post_type: model.postType,
                            report_content: model.reportContent,
                            post_id: model.postData && model.postData.postId,
                            reply_id: model.replyData && model.replyData.postId
                        },
                        needToken: true
                    });
                    return promise;
                },
                show_a_post: function (model) {
                    return $http({
                        method: 'GET',
                        url: config.putong_api_url + '/putong/show_a_post',
                        params: {
                            post_id: model.postId,
                            page: 1,
                            is_only_show_louzhu: true
                        },
                        needToken: false
                    });
                }
            };
        }];
        return PutongService;
    })();
    exports.PutongService = PutongService;
});
//serverModule.module.factory('PutongService', PutongService.factory); 
//# sourceMappingURL=putong_service.js.map