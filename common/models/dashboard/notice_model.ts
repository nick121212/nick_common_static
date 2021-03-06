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
     * 公告模型
     * */
    export class NoticeModel extends cd.Common.BaseData {
        public noticeId:number;
        public content:string;
        public creator:um.Passport.UserModel;
        public editor:um.Passport.UserModel;
        public theme:string;
        public tag:string;
        public url:string;

        public static _schema:any = {
            type: 'object',
            description: '公告管理',
            required: [
                'content',
                'url'
            ],
            properties: {
                noticeId: {
                    type: 'number',
                    title: 'ID'
                },
                content: {
                    type: 'string',
                    title: '公告内容',
                    maxLength: 150
                },
                url: {
                    type: 'string',
                    title: '链接地址'
                },
                theme: {
                    type: 'string',
                    title: '主题色'
                },
                tag: {
                    type: 'string',
                    title: '标签'
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