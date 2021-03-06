/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


import ref = require('ref');

export class HttpInterceptorFactory {
    public static _name:string='HttpInterceptorFactory';

    public static factory:Array<any> = ['$rootScope', '$q', 'config', '$cookieStore', ($rootScope:ng.IRootScopeService, $q:ng.IQService, config:any, $cookieStore:any):any=> {
        return {
            'request': function (httpConfig) {
                var deferred;

                if (httpConfig.needToken === true) {
                    if (httpConfig.url.indexOf('?') > 0) {
                        httpConfig.url += '&access_token=' + $cookieStore.get(config.prefix + 'access_token');
                    } else {
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
                        //showErrMsg($mdToast, "net::ERR_CONNECTION_REFUSED");
                        //growl.addErrorMessage("net::ERR_CONNECTION_REFUSED", {position: "rb"});
                        break;
                    case 404:
                        $rootScope.$emit("showError", "error", "404");

                        //showErrMsg($mdToast, "404");
                        //growl.addErrorMessage("404", {position: "rb"});
                        break;
                    case 500:
                        $rootScope.$emit("showError", "error", "500");
                        //showErrMsg($mdToast, "500");
                        //growl.addErrorMessage("500", {position: "rb"});
                        break;
                    default :
                        //TODO 此处做错误处理
                        console.log(response.status);
                }

                return $q.reject(response);
            },
            'response': function (response) {
                if (response.status == 200 && response.data instanceof Object) {
                    if (angular.isNumber(response.data.result_code) && response.data.result_code !== 1) {
                        switch (response.data.result_code) {
                            //未登录错误，需要跳转到登陆页面
                            case -1601:
                            case -1602:
                            case -2201:
                            case -2202:
                                //$timeout(function () {
                                $rootScope.$emit("userIntercepted", "notLogin", response);
                                //}, 100);
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
}