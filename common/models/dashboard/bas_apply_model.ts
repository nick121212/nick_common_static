/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import bm = require('./bas_model');

export module Dashboard {
    /*
     * 同好会申请模型
     * */
    export class BasApplyModel extends cd.Common.BaseData {
        public applyId:number;
        public status:number;
        public nickname:string;
        public message:string;
        public isSendNotice:boolean;

        public static _schema:any = {
            type: 'object',
            description: '公告管理',
            required: [
                'content',
                'url'
            ],
            properties: {
                nickname: {
                    type: 'string',
                    title: '审核者昵称'
                },
                status: {
                    type: 'number',
                    title: '审核结果',
                },
                message: {
                    type: 'string',
                    title: '审核内容',
                    maxLength: 150
                },
                isSendNotice: {
                    type: 'boolean',
                    title: '是否把reply_message发到申请者收件箱'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}