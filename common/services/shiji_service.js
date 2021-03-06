/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var ShijiService = (function () {
        function ShijiService() {
        }
        ShijiService._name = 'ShijiService';
        ShijiService.factory = ['$rootScope', '$q', '$http', 'config', function ($rootScope, $q, $http, config) {
            return {
                /*
                 * 指定时间的时计图片
                 * */
                fighting_history: function (model) {
                    return $http({
                        method: 'GET',
                        url: config.shiji_api + '/shiji' + "/image",
                        params: {
                            time: model.time
                        },
                        needToken: false
                    });
                }
            };
        }];
        return ShijiService;
    })();
    exports.ShijiService = ShijiService;
});
//# sourceMappingURL=shiji_service.js.map