/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import um = require('../passport/user_model');
import plm = require('./post_link_model');
import bm = require('./bas_model');

export module Dashboard {
    /*
     * 帖子数据
     * */
    export class PostModel extends cd.Common.BaseData {
        public postId:number;
        public title:string;
        public content:string;
        public pictures:string[];
        public platform:string;
        public isDeleted:boolean;
        public clientVersion:string;
        public url:string;
        public clientChannel:string;
        public location:string;
        public deviceTitle:string;
        public status:number;
        public ip:string;
        public postLinks:Array<plm.Dashboard.PostLinkModel>;
        public creator:um.Passport.UserModel;
        public admin:um.Passport.UserModel;
        public editor:um.Passport.UserModel;
        public basData:bm.Dashboard.BasModel;
        public likeCount:number;
        public replyCount:number;
        public floorCount:number;

        public static  _schema = {
            type: 'object',
            description: '帖子管理',
            required: [
                'title',
                'content',
                'location'
            ],
            properties: {
                postId: {
                    type: 'string',
                    title: '帖子ID'
                },
                title: {
                    type: 'string',
                    title: '帖子标题',
                    maxLength: 30
                },
                content: {
                    type: 'string',
                    title: '帖子内容',
                    maxLength: 150
                },
                clientVersion: {
                    type: 'string',
                    title: '客户端版本'
                },
                clientChannel: {
                    type: 'string',
                    title: '客户端渠道'
                },
                url: {
                    type: 'string',
                    title: '跳转地址'
                },
                ip: {
                    type: 'string',
                    title: 'IP'
                },
                platform: {
                    type: 'string',
                    title: '客户端'
                },
                deviceTitle: {
                    type: 'string',
                    title: '设备名'
                },
                pictures: {
                    type: 'array',
                    title: '帖子图片',
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
                location: {
                    type: 'string',
                    title: '地址位置'
                },
                postLinks: {
                    type: 'array',
                    title: '帖子链接',
                    items: plm.Dashboard.PostLinkModel._schema
                },
                basData: bm.Dashboard.BasModel._schema,
                admin: um.Passport.UserModel._schema,
                creator: um.Passport.UserModel._schema,
                submit: {
                    type: 'object',
                    readonly: false
                }
            }
        };
        public static _convert = (data:any):PostModel=> {
            var postData = new PostModel({
                creator: new um.Passport.UserModel({
                    nickname: data.nickname,
                    avatarUrl: data.avatar_url,
                    userToken: data.user_token
                }),
                admin: new um.Passport.UserModel({
                    nickname: data.admin_nickname,
                    avatarUrl: data.admin_avatar_url,
                    userToken: data.admin_user_token
                }),
                basData: new bm.Dashboard.BasModel({
                    baId: data.ba_id,
                    title: data.ba_title
                }),
                content: data.content,
                pictures: data.pic_urls ? data.pic_urls.split(',').map((pic)=> {
                    return {url: pic};
                }) : [],
                createAt: data.created_at,
                updateAt: data.updated_at,
                postId: data.id,
                isDeleted: data.is_deleted,
                deviceTitle: data.device_title,
                clientChannel: data.client_channel,
                clientVersion: data.client_version,
                location: data.location,
                platform: data.platform,
                status: data.status,
                title: data.title,
                ip: data.ip,
                likeCount: data.likes_count,
                replyCount: data.replies_count,
                floorCount: data.floors
            });

            return postData;
        };

        constructor(data?:any) {
            super(data);
        }
    }
}