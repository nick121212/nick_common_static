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
     * 论坛模型
     * */
    export class ForumModel extends cd.Common.BaseData {
        public forumId:number;
        public title:string;
        public intro:string;
        public pictures:Array<string>;
        public url:string;
        public status:number;
        public creator:um.Passport.UserModel;
        public editor:um.Passport.UserModel;

        public static _schema = {
            type: 'object',
            description: '热门板块管理',
            required: [
                'title',
                'intro',
                'pictures',
                'url'
            ],
            properties: {
                forumId: {
                    type: 'number',
                    title: 'ID'
                },
                title: {
                    type: 'string',
                    title: '标题'
                },
                intro: {
                    type: 'string',
                    title: '简介',
                    maxLength: 150
                },
                url: {
                    type: 'string',
                    title: '链接地址'
                },
                pictures: {
                    type: 'array',
                    title: '热门板块图片',
                    items: {
                        type: 'object',
                        required: ['url'],
                        properties: {
                            url: {
                                type: 'string',
                                title: '图片地址'
                            }
                        }
                    }
                },
                creator: um.Passport.UserModel._schema,
                editor: um.Passport.UserModel._schema
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}