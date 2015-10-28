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
        var PictureModel = (function (_super) {
            __extends(PictureModel, _super);
            function PictureModel(data) {
                _super.call(this, data);
            }
            PictureModel._schema = {
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
            return PictureModel;
        })(bd.Common.BaseData);
        Moemash.PictureModel = PictureModel;
    })(Moemash = exports.Moemash || (exports.Moemash = {}));
});
//# sourceMappingURL=picture_model.js.map