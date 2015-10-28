/**
 * Created by NICK on 15/9/16.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


import ref = require('ref');
import angularCommon = require('common/angular_common');

/*
 * controller的基类
 * */
export class BaseController extends angularCommon.AngularCommon {

    public $state:angular.ui.IStateService;
    public $stateParams:angular.ui.IStateParamsService;
    public $mdDialog:angular.material.IDialogService;
    public $mdToast:angular.material.IToastService;

    constructor(args:IArguments) {
        super(args);
    }

    /*
     * 阻止默认事件
     * */
    preventDefault($event:MouseEvent) {
        $event && ($event.defaultPrevented = true) && $event.preventDefault();

        return true;
    }

    /*
     * 阻止冒泡
     * */
    stopPropagation($event:MouseEvent) {
        $event && ($event.cancelBubble = true) && $event.stopPropagation();

        return true;
    }

    close() {
        this.$mdDialog && this.$mdDialog.cancel();
    }

    /*
     * 阻止默认事件  +  阻止冒泡
     * */
    stopAll($event:MouseEvent) {
        this.preventDefault($event) && this.stopPropagation($event);
    }

    alert(title:string, content?:string) {
        var alert = this.$mdDialog.alert()
            .clickOutsideToClose(false)
            .title(title)
            .content(content || '操作成功！')
            .ariaLabel(title)
            .ok('确定');

        return alert;
    }

    safeApply($scope:angular.IScope, applyFn:any) {
        if (!$scope.$$phase) $scope.$apply(applyFn)
        else applyFn();
    }

    showErrMsg(msg) {
        this.$mdToast.show(this.$mdToast.simple()
            .content(msg || "error")
            .position('bottom right')
            .action('关闭')
            .highlightAction(true)
            .hideDelay(3000));
    }

    showMsg(msg) {
        this.$mdToast.show(this.$mdToast.simple()
            .content(msg || "success")
            .position('top right')
            //.action('关闭')
            .highlightAction(true)
            .hideDelay(3000));
    }

    showPic(index:number, images:Array<any>, $event:MouseEvent) {
        var dialogOptions:ng.material.IDialogOptions = {};
        var defer:ng.IDeferred<any> = this.$q.defer();

        dialogOptions.controller = 'LightboxController';
        dialogOptions.controllerAs = 'lightboxCtl';
        dialogOptions.templateUrl = 'javascripts/partials/common/lightbox.html';
        dialogOptions.targetEvent = $event;
        dialogOptions.clickOutsideToClose = true;
        dialogOptions.resolve = {
            'images': ()=> {
                return images;
            },
            'index': ()=> {
                return index || 0;
            }
        };
        this.$mdDialog.show(dialogOptions);
        this.stopAll($event);

        //this.Lightbox.openModal(this.clientData.datas, index);
    }

    openMenu($mdOpenMenu:any, $event:MouseEvent) {
        $mdOpenMenu($event);
    }

}