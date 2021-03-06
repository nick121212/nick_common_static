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
     * 帖子链接数据
     * */
    export class PostLinkModel extends cd.Common.BaseData {
        public linkId:number;
        public postId:number;
        public contentType:number;
        public title:string;
        public url:string;
        public toPostId:number;
        public toBaId:number;
        public toUserToken:string;

        public static _schema:any = {
            type: 'object',
            description: '帖子管理',
            required: [
                'contentType',
                'title',
                'toPostId',
                'toBaId',
                'toUserToken',
                'url'
            ],
            properties: {
                postId: {
                    type: 'number',
                    title: '帖子ID'
                },
                contentType: {
                    type: 'number',
                    title: '链接类型'
                },
                title: {
                    type: 'string',
                    title: '标题'
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
                submit: {
                    type: 'object',
                    readonly: false
                }
            }
        };

        public static _convert = (link:any):PostLinkModel=> {
            return new PostLinkModel({
                contentType: link.content_type,
                linkId: link.id,
                postId: link.post_id,
                title: link.title,
                toBaId: link.to_ba_id,
                toPostId: link.to_post_id,
                toUserToken: link.to_user_token,
                url: link.url
            });
        };

        constructor(data?:any) {
            super(data);
        }
    }
}