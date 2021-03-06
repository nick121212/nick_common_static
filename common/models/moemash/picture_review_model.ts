/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../common/base_data');
import pd = require('./picture_model');

export module Moemash {
    /*
     * 处理图片接口数据
     * */
    export class PictureReviewModel extends bd.Common.BaseData {
        public accessPics:Array<pd.Moemash.PictureModel>;
        public deletePics:Array<pd.Moemash.PictureModel>;

        constructor(data?:any) {
            super(data);
        }
    }
}