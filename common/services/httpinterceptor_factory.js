/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var HttpInterceptorFactory = (function () {
        function HttpInterceptorFactory() {
        }
        HttpInterceptorFactory._name = 'HttpInterceptorFactory';
        HttpInterceptorFactory.factory = ['$rootScope', '$q', 'config', '$cookieStore', function ($rootScope, $q, config, $cookieStore) {
            return {
                'request': function (httpConfig) {
                    var deferred;
                    if (httpConfig.needToken === true) {
                        if (httpConfig.url.indexOf('?') > 0) {
                            httpConfig.url += '&access_token=' + $cookieStore.get(config.prefix + 'access_token');
                        }
                        else {
                            httpConfig.url += '?access_token=' + $cookieStore.get(config.prefix + 'access_token');
                        }
                    }
                    if (httpConfig.needCancel === true) {
                        deferred = $q.defer();
                        httpConfig.timeout = deferred.promise;
                        httpConfig.cancel = deferred;
                    }
                    return httpConfig;
                },
                'responseError': function (response) {
                    switch (response.status) {
                        case 0:
                            $rootScope.$emit("showError", "error", "net::ERR_CONNECTION_REFUSED");
                            break;
                        case 404:
                            $rootScope.$emit("showError", "error", "404");
                            break;
                        case 500:
                            $rootScope.$emit("showError", "error", "500");
                            break;
                        default:
                            //TODO 此处做错误处理
                            console.log(response.status);
                    }
                    return $q.reject(response);
                },
                'response': function (response) {
                    if (response.status == 200 && response.data instanceof Object) {
                        if (angular.isNumber(response.data.result_code) && response.data.result_code !== 1) {
                            switch (response.data.result_code) {
                                case -1601:
                                case -1602:
                                case -2201:
                                case -2202:
                                    //$timeout(function () {
                                    $rootScope.$emit("userIntercepted", "notLogin", response);
                                    break;
                                case -9876:
                                    return $q.reject(response);
                                default:
                            }
                            //console.log(response.data.result_code);
                            //默认显示错误信息
                            $rootScope.$emit("showError", "error", response.data.msg);
                            //showErrMsg($mdToast, response.data.msg);
                            //growl.addErrorMessage(response.data.msg, {position: "rb"});
                            return $q.reject(response);
                        }
                    }
                    return response;
                }
            };
        }];
        return HttpInterceptorFactory;
    })();
    exports.HttpInterceptorFactory = HttpInterceptorFactory;
});
//# sourceMappingURL=httpinterceptor_factory.js.map