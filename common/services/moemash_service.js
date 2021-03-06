/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var MoemashService = (function () {
        function MoemashService() {
        }
        MoemashService._name = 'MoemashService';
        MoemashService.factory = ['$rootScope', '$q', '$http', 'config', function ($rootScope, $q, $http, config) {
            return {
                /*
                 * 当前战局概况
                 * */
                fighters: function (query) {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash_admin' + "/fighters",
                        params: {
                            page: query.page,
                            per_page: query.pageCount
                        },
                        needToken: true
                    });
                },
                /*
                 * 获取排名靠前的10个图片
                 * */
                top10: function () {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash_admin' + "/top10",
                        needToken: false
                    });
                },
                /*
                 * 随机给出两个对战图片
                 * */
                random: function () {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash_admin' + "/candidates",
                        needToken: false
                    });
                },
                /*
                 * 选择喜欢的图片
                 * @param winner 获胜图片的key
                 * @param loser 落败图片的key
                 * */
                like: function (winner, loser) {
                    return $http({
                        method: 'POST',
                        url: config.facemash_api + '/facemash_admin' + "/fight",
                        data: {
                            winner: winner,
                            loser: loser
                        },
                        needToken: false
                    });
                },
                /*
                 * 选择喜欢的图片
                 * @param date 开始日期
                 * @param page 页码
                 * @param pageCount 每页多少个
                 * */
                history: function (date, page, pageCount, top) {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash_admin' + "/board",
                        params: {
                            start: date,
                            page: page,
                            per_page: pageCount,
                            top: top || 3
                        },
                        needToken: false
                    });
                },
                /*
                 * 列出待审核图片
                 * */
                user_uploadeds: function (query) {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash_admin' + "/user_uploadeds",
                        params: {
                            page: query.page,
                            per_page: query.pageCount,
                            reviewed: query.type
                        },
                        needToken: true,
                        needCancel: true
                    });
                },
                /*
                 * 列出待审核图片
                 * */
                user_uploadeds_review: function (data) {
                    return $http({
                        method: 'POST',
                        url: config.facemash_api + '/facemash_admin' + "/user_uploadeds/review",
                        data: {
                            ok_ids: data.accessPics.map(function (pic) {
                                return pic.picId;
                            }),
                            ban_ids: data.deletePics.map(function (pic) {
                                return pic.picId;
                            })
                        },
                        needToken: true
                    });
                },
                /*
                 * 加分
                 * */
                must_win: function (data) {
                    return $http({
                        method: 'POST',
                        url: config.facemash_api + '/facemash_admin' + "/fighters/must_win",
                        data: {
                            image_key: data.imageKey,
                            count: data.pkCount
                        },
                        needToken: true
                    });
                },
                /*
                 * 某张图片的参战历史
                 * */
                fighting_history: function (model) {
                    return $http({
                        method: 'GET',
                        url: config.facemash_api + '/facemash' + "/fighting_history",
                        params: {
                            image_key: model.imageKey
                        },
                        needToken: false
                    });
                }
            };
        }];
        return MoemashService;
    })();
    exports.MoemashService = MoemashService;
});
//# sourceMappingURL=moemash_service.js.map