/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import cd = require('../common/base_data');
import um = require('../passport/user_model');
import post = require('./post_model');
import bas = require('./bas_model');

export module Dashboard {
    /*
     * 管理同好会的接口参数
     * */
    export class ReportModel extends cd.Common.BaseData {
        public reportId:number;
        public reportType:string;
        public postType:number;
        public reportContent:string;
        public nickname:string;
        // 0 :未处理 1:已下架 2: 已删除
        public status:boolean;
        public replyData:post.Dashboard.PostModel;
        public postData:post.Dashboard.PostModel;
        public BasData:bas.Dashboard.BasModel;
        public admin:um.Passport.UserModel;

        public static _schema:any = {
            type: 'object',
            description: '举报',
            required: [
                'reportType'
            ],
            properties: {
                reportType: {
                    type: 'number',
                    title: '举报类型'
                },
                postType: {
                    type: 'number',
                    title: '帖子类型'
                },
                reportContent: {
                    type: 'string',
                    maxLength: 150,
                    title: '举报内容'
                },
                replyData: post.Dashboard.PostModel._schema,
                postData: post.Dashboard.PostModel._schema
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}