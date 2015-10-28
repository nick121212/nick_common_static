/**
 * Created by NICK on 15/9/16.
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
define(["require", "exports", 'common/angular_common'], function (require, exports, angularCommon) {
    /*
     * controller的基类
     * */
    var BaseController = (function (_super) {
        __extends(BaseController, _super);
        function BaseController(args) {
            _super.call(this, args);
        }
        /*
         * 阻止默认事件
         * */
        BaseController.prototype.preventDefault = function ($event) {
            $event && ($event.defaultPrevented = true) && $event.preventDefault();
            return true;
        };
        /*
         * 阻止冒泡
         * */
        BaseController.prototype.stopPropagation = function ($event) {
            $event && ($event.cancelBubble = true) && $event.stopPropagation();
            return true;
        };
        BaseController.prototype.close = function () {
            this.$mdDialog && this.$mdDialog.cancel();
        };
        /*
         * 阻止默认事件  +  阻止冒泡
         * */
        BaseController.prototype.stopAll = function ($event) {
            this.preventDefault($event) && this.stopPropagation($event);
        };
        BaseController.prototype.alert = function (title, content) {
            var alert = this.$mdDialog.alert().clickOutsideToClose(false).title(title).content(content || '操作成功！').ariaLabel(title).ok('确定');
            return alert;
        };
        BaseController.prototype.safeApply = function ($scope, applyFn) {
            if (!$scope.$$phase)
                $scope.$apply(applyFn);
            else
                applyFn();
        };
        BaseController.prototype.showErrMsg = function (msg) {
            this.$mdToast.show(this.$mdToast.simple().content(msg || "error").position('bottom right').action('关闭').highlightAction(true).hideDelay(3000));
        };
        BaseController.prototype.showMsg = function (msg) {
            this.$mdToast.show(this.$mdToast.simple().content(msg || "success").position('top right').highlightAction(true).hideDelay(3000));
        };
        BaseController.prototype.showPic = function (index, images, $event) {
            var dialogOptions = {};
            var defer = this.$q.defer();
            dialogOptions.controller = 'LightboxController';
            dialogOptions.controllerAs = 'lightboxCtl';
            dialogOptions.templateUrl = 'javascripts/partials/common/lightbox.html';
            dialogOptions.targetEvent = $event;
            dialogOptions.clickOutsideToClose = true;
            dialogOptions.resolve = {
                'images': function () {
                    return images;
                },
                'index': function () {
                    return index || 0;
                }
            };
            this.$mdDialog.show(dialogOptions);
            this.stopAll($event);
            //this.Lightbox.openModal(this.clientData.datas, index);
        };
        BaseController.prototype.openMenu = function ($mdOpenMenu, $event) {
            $mdOpenMenu($event);
        };
        return BaseController;
    })(angularCommon.AngularCommon);
    exports.BaseController = BaseController;
});
//# sourceMappingURL=base_controller.js.map