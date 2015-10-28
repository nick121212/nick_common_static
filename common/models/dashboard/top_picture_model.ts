/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import um = require('../passport/user_model');

export module Dashboard {
    /*
     * 首页顶图模型
     * */
    export class TopPictureModel extends cd.Common.BaseData {
        public picId:number;
        public imageKey:string;
        public contentType:number;
        public intro:string;
        public title:string;
        public url:string;
        public toPostId:number;
        public toBaId:number;
        public toUserToken:string;
        public position:number;
        public status:number;
        public creator:um.Passport.UserModel;

        public static _schema:any = {
            type: 'object',
            description: '首页图片管理',
            required: [
                'imageKey',
                'contentType',
                'title',
                'url',
                'toPostId',
                'toBaId',
                'toUserToken',
                'position',
            ],
            properties: {
                picId: {
                    type: 'number',
                    title: 'ID'
                },
                imageKey: {
                    type: 'string',
                    title: '图片'
                },
                contentType: {
                    type: 'number',
                    title: '类型'
                },
                title: {
                    type: 'string',
                    title: '标题'
                },
                intro: {
                    type: 'string',
                    title: '介绍',
                    maxLength: 150
                },
                url: {
                    type: 'string',
                    title: '链接地址'
                },
                toPostId: {
                    type: 'number',
                    title: '链接到的帖子'
                },
                toBaId: {
                    type: 'number',
                    title: '链接到的同好会'
                },
                toUserToken: {
                    type: 'string',
                    title: '链接到的用户'
                },
                position: {
                    type: 'number',
                    title: '位置'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}