/**
 * Created by NICK on 15/7/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var Native;
    (function (Native) {
        /*
         * 实现客户端和js互调
         * */
        var Hybrid = (function () {
            function Hybrid(callScheme) {
                this.callBackIndex = 0;
                this.callScheme = callScheme || 'jsCall';
            }
            /*
             *
             * 调用iframe，设置src属性
             * */
            Hybrid.prototype.initIframe = function (scheme) {
                if (this.iframe) {
                    document.documentElement.removeChild(this.iframe);
                }
                this.iframe = document.createElement("iframe");
                this.iframe.setAttribute("width", "0px");
                this.iframe.style.display = "none";
                this.iframe.setAttribute("src", scheme);
                document.documentElement.appendChild(this.iframe);
            };
            /*
             * android调用
             * */
            Hybrid.prototype.callAndroid = function (funcName, async, data, callBack, needCallBack) {
                var res = window[this.callScheme][funcName].apply(window[this.callScheme], data);
                if (!async && needCallBack) {
                    callBack(res);
                }
            };
            /*
             * ios调用
             * */
            Hybrid.prototype.callIos = function (funcName, async, data, callBackName) {
                var scheme = this.callScheme + "://" + funcName + "?ios=true"; //+ "&" + callBackName;
                callBackName && (scheme += "&callback=" + callBackName);
                scheme += "&data=" + encodeURIComponent(encodeURIComponent(JSON.stringify(data)));
                console.log(scheme);
                this.initIframe(scheme);
                return scheme;
            };
            /*
             * 调用客户端
             * */
            Hybrid.prototype.jsCallNative = function (funcName, async, callBack, data) {
                if (callBack === void 0) { callBack = null; }
                if (data === void 0) { data = {}; }
                var isAndroid = window.hasOwnProperty(this.callScheme), needCallBack = false, callBackName = null;
                //判断有没有callback方法，如果有，则判断是不是需要异步或者是ios，是的话则添加全局方法
                if (callBack) {
                    if (typeof callBack === 'function') {
                        needCallBack = true;
                        if (!isAndroid || async) {
                            this.callBackIndex++;
                            callBackName = 'cb_' + this.callBackIndex.toString();
                            window[callBackName] = function () {
                                callBack.call(this, arguments);
                                window[callBackName] = null;
                            };
                        }
                    }
                }
                //如果是安卓设备
                if (isAndroid) {
                    this.callAndroid(funcName, async, data, callBack, needCallBack);
                }
                else {
                    return this.callIos(funcName, async, data, callBackName);
                }
            };
            return Hybrid;
        })();
        var JsCall = (function () {
            function JsCall() {
            }
            /*
             * 登陆接口
             * */
            JsCall.login = function (data) {
                return JsCall.hybrid.jsCallNative('login', false, null, data);
            };
            /*
             * 获取客户端信息/
             * */
            JsCall.getPlatInfo = function ($q) {
                var defer = $q.defer();
                JsCall.hybrid.jsCallNative('getPlatInfo', false, function (data) {
                    JsCall.platInfo = data['0'];
                    defer.resolve(JsCall.platInfo);
                });
                return defer.promise;
            };
            JsCall.hybrid = new Hybrid();
            JsCall.platInfo = {};
            return JsCall;
        })();
        Native.JsCall = JsCall;
    })(Native = exports.Native || (exports.Native = {}));
});
//# sourceMappingURL=hybrid.js.map