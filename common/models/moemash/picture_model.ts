/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');
import user = require('../passport/user_model');

export module Moemash {
    export class PictureModel extends bd.Common.BaseData {
        public picId:number;
        public imageKey:string;
        public pkCount:number;
        public score:number;
        public totalScore:number;
        public fightDays:number;
        public rank:number;
        public streak:number;
        public creator:user.Passport.UserModel;

        public static _schema:any = {
            type: 'object',
            description: '萌战管理',
            required: [
                'score',
                'pkCount',
            ],
            properties: {
                picId: {
                    type: 'number',
                    title: 'ID'
                },
                score: {
                    type: 'number',
                    title: '分数'
                },
                pkCount: {
                    type: 'number',
                    title: 'PK次数'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}