/**
 * Created by NICK on 15/7/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');

export module Native {
    /*
     * 实现客户端和js互调
     * */
    class Hybrid {
        //public nativeCallBack:any={};
        //public nativeCall:any;
        public callScheme:string;

        private callBackIndex:number = 0;
        private iframe:HTMLIFrameElement;

        constructor(callScheme?:string) {
            this.callScheme = callScheme || 'jsCall';
        }

        /*
         *
         * 调用iframe，设置src属性
         * */
        private initIframe(scheme:string) {
            if (this.iframe) {
                document.documentElement.removeChild(this.iframe);
            }
            this.iframe = document.createElement("iframe");
            this.iframe.setAttribute("width", "0px");
            this.iframe.style.display = "none";
            this.iframe.setAttribute("src", scheme);
            document.documentElement.appendChild(this.iframe);
        }

        /*
         * android调用
         * */
        private callAndroid(funcName:string, async:boolean, data:any, callBack:any, needCallBack:boolean) {
            var res = window[this.callScheme][funcName].apply(window[this.callScheme], data);
            if (!async && needCallBack) {
                callBack(res);
            }
        }

        /*
         * ios调用
         * */
        private callIos(funcName:string, async:boolean, data:any, callBackName:string) {
            var scheme = this.callScheme + "://" + funcName + "?ios=true";//+ "&" + callBackName;

            callBackName && (scheme += "&callback=" + callBackName);

            scheme += "&data=" + encodeURIComponent(encodeURIComponent(JSON.stringify(data)));
            console.log(scheme);
            this.initIframe(scheme);

            return scheme;
        }

        /*
         * 调用客户端
         * */
        public jsCallNative(funcName:string, async:boolean, callBack:any = null, data:any = {}) {
            var isAndroid = window.hasOwnProperty(this.callScheme),
                needCallBack = false,
                callBackName = null;

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
                        }
                    }
                }
            }
            //如果是安卓设备
            if (isAndroid) {
                this.callAndroid(funcName, async, data, callBack, needCallBack);
            } else {//IOS设备
                return this.callIos(funcName, async, data, callBackName);
            }
        }
    }

    export class JsCall {
        public static hybrid:Hybrid = new Hybrid();
        public static platInfo:any = {};
        /*
         * 登陆接口
         * */
        public static login(data:any) {
            return JsCall.hybrid.jsCallNative('login', false, null, data);
        }

        /*
         * 获取客户端信息/
         * */
        public static getPlatInfo($q:ng.IQService):ng.IPromise<any> {
            var defer = $q.defer();

            JsCall.hybrid.jsCallNative('getPlatInfo', false, (data)=> {
                JsCall.platInfo = data['0'];
                defer.resolve(JsCall.platInfo);
            });

            return defer.promise;
        }
    }
}