/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../common/base_data'], function (require, exports, bd) {
    var Moemash;
    (function (Moemash) {
        /*
         * 处理图片接口数据
         * */
        var PictureReviewModel = (function (_super) {
            __extends(PictureReviewModel, _super);
            function PictureReviewModel(data) {
                _super.call(this, data);
            }
            return PictureReviewModel;
        })(bd.Common.BaseData);
        Moemash.PictureReviewModel = PictureReviewModel;
    })(Moemash = exports.Moemash || (exports.Moemash = {}));
});
//# sourceMappingURL=picture_review_model.js.map