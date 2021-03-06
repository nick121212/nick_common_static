/**
 * Created by NICK on 15/7/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
    ///<reference path="../../node_modules/DefinitelyTyped/angularjs/angular.d.ts"/>


declare module Native {
    export interface Hybrid_Static {
        new(m?:any): Hybrid_Instance;
        nativeCallBack:any;
        nativeCall:any;
        callScheme:string;

        callBackIndex:number;
        iframe:HTMLIFrameElement;

        callLogin(data:Array<any>);
        callClose();
    }
    export interface Hybrid_Instance {
        callScheme: string;
    }
    export interface JsCall {
        hybrid:Hybrid_Static;
        getPlatInfo($q:ng.IQService):ng.IPromise<any> ;
    }
}

declare var JsCall:Native.JsCall;
declare var Hybrid:Native.Hybrid_Static;