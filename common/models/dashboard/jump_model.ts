/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');

export module Dashboard {
    /*
     * 帖子数据
     * */
    export class JumpModel extends cd.Common.BaseData {
        public key:string;
        public label:string;
        public weixinIosUrl:string;
        public weixinIosCount:number;
        public weixinAndroidUrl:string;
        public weixinAndroidCount:number;
        public appStoreUrl:string;
        public appStoreCount:number;
        public apkUrl:string;
        public apkCount:number;
        public defaultUrl:string;
        public defaultCount:number;

        public static _schema:any = {
            type: 'object',
            description: '跳转管理',
            required: [
                'key',
                'label',
                'weixinIosUrl',
                'weixinAndroidUrl',
                'appStoreUrl',
                'apkUrl',
                'defaultUrl'
            ],
            properties: {
                key: {
                    type: 'string',
                    title: 'KEY'
                },
                label: {
                    type: 'string',
                    title: '标签'
                },
                weixinIosUrl: {
                    type: 'string',
                    title: '微信IOS跳转地址'
                },
                weixinIosCount: {
                    type: 'number',
                },
                weixinAndroidUrl: {
                    type: 'string',
                    title: '微信Android跳转地址'
                },
                weixinAndroidCount: {
                    type: 'number',
                },
                appStoreUrl: {
                    type: 'string',
                    title: 'appstore跳转地址'
                },
                appStoreCount: {
                    type: 'number',
                },
                apkUrl: {
                    type: 'string',
                    title: 'apk跳转地址'
                },
                apkCount: {
                    type: 'number'
                },
                defaultUrl: {
                    type: 'string',
                    title: '默认跳转地址'
                },
                defaultCount: {
                    type: 'number',
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}