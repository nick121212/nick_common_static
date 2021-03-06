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
     * 管理同好会的接口参数
     * */
    export class BasModel extends cd.Common.BaseData {
        //同好会id
        public baId:number;
        //同好会title
        public title:string;
        //简介
        public intro:string;
        //会标
        public avatarUrl:string;
        //背景
        public backgroundUrl:string;
        //主题色
        public theme:string;
        //状态 1:通过 2:不通过
        public status:number;
        //是否被用户删除
        public isDeleted:boolean;
        //审核通过人信息
        public admin:um.Passport.UserModel;
        //创建者信息
        public creator:um.Passport.UserModel;
        //吧主信息
        public bazhus:Array<um.Passport.UserModel>;

        public limit:number;

        public static _schema:any = {
            type: 'object',
            description: '创建同好会',
            required: [
                'title',
                'avatarUrl',
                'backgroundUrl',
                'theme'
            ],
            properties: {
                baId: {
                    type: 'number',
                    title: '同好会ID'
                },
                title: {
                    type: 'string',
                    title: '同好会名称',
                    maxLength: 30
                },
                intro: {
                    type: 'string',
                    title: '申请说明',
                    maxLength: 150
                },
                avatarUrl: {
                    type: 'string',
                    title: '会标'
                },
                backgroundUrl: {
                    type: 'string',
                    title: '背景图'
                },
                theme: {
                    type: 'string',
                    title: '主题色'
                },
                status: {
                    type: 'number',
                    title: '状态'
                },
                isDeleted: {
                    type: 'boolean',
                    title: '是否删除'
                },
                createAt: {
                    type: 'string',
                    title: '创建时间'
                },
                updateAt: {
                    type: 'string',
                    title: '更新时间'
                },
                limit: {
                    type: 'number',
                    title: '发布同好会数量',
                    required: true,
                    minimum: 1,
                    maximum: 6
                },
                bazhu: {
                    type: 'string'
                },
                bazhus: {
                    type: 'array',
                    items: {
                        "type": "object",
                        "properties": {
                            "nickname": {
                                "title": "昵称",
                                "type": "string"
                            }
                        },
                        "required": [
                            "nickname"
                        ]
                    }
                },
                creator: um.Passport.UserModel._schema,
                submit: {
                    type: 'object',
                    readonly: false
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}