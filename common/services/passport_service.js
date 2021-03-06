/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var PassportService = (function () {
        function PassportService() {
        }
        PassportService._name = 'PassportService';
        PassportService.factory = ['$rootScope', '$q', '$http', 'config', function ($rootScope, $q, $http, config) {
            return {
                /*
                 * 发送登录请求，返回promise对象
                 * 参数：
                 * username 用户名
                 * password 密码
                 * expire_in 过期时间（秒）
                 * */
                loginCheck: function (loginMdl) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + "/login?app_token=" + config.app_token,
                        data: {
                            username: loginMdl.username,
                            password: loginMdl.password,
                            expire_in: loginMdl.expireIn ? config.expire_in : 0
                        }
                    }).success(function (data) {
                        console.log(arguments);
                    });
                    return promise;
                },
                /*
                 * 获取用户信息
                 * */
                getUser: function () {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + "/get_user",
                        needToken: true
                    }).success(function (data) {
                        if (data.result_code == 1) {
                            $rootScope.$emit('userInfo', data);
                        }
                    });
                    return promise;
                },
                /*
                 * 注册账号
                 * 参数：
                 * username 用户名
                 * password：密码
                 * password_again 重复密码
                 * */
                register: function (regModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + "/register?app_token=" + config.app_token,
                        data: {
                            username: regModel.username,
                            password: regModel.password,
                            password_again: regModel.passwordAgain
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 发送手机验证码
                 * 用于手机找回密码
                 * */
                sendResetPswPhoneCode: function (forgetModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/gen_mobile_reset_password_token',
                        data: {
                            username: forgetModel.username
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 发送手机验证码
                 * 用于邮箱找回密码
                 * */
                sendResetPswMailCode: function (forgetModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/gen_email_reset_password_token',
                        data: {
                            username: forgetModel.username
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 发送手机验证码
                 * 用户绑定用户手机
                 * */
                sendMobileConfirmCode: function (bindModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/gen_mobile_confirmation_token',
                        needToken: true,
                        data: {
                            mobile: bindModel.mobile
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 邮箱找回密码
                 * 重置密码
                 * */
                resetMailPassword: function (forgetModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/email_reset_password',
                        data: {
                            user_token: forgetModel.user_token,
                            new_password: forgetModel.password,
                            new_password_again: forgetModel.passwordAgain,
                            token: forgetModel.smsToken
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 手机找回密码
                 * 重置密码
                 * */
                resetPhonePassword: function (forgetModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/mobile_reset_password',
                        data: {
                            user_token: forgetModel.user_token,
                            new_password: forgetModel.password,
                            new_password_again: forgetModel.passwordAgain,
                            token: forgetModel.smsToken
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 修改密码
                 * */
                editPsw: function (editpswModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/set_password',
                        needToken: true,
                        data: {
                            password: editpswModel.oldPassword,
                            new_password: editpswModel.password,
                            new_password_again: editpswModel.passwordAgain
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 设置别名
                 * */
                setAliasName: function (userModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/set_nickname',
                        needToken: true,
                        data: {
                            nickname: userModel.nickname
                        }
                    }).success(function (data) {
                        $rootScope.$emit('userInfo', {
                            nickname: data.nickname
                        });
                    });
                    return promise;
                },
                /*
                 * 设置手机
                 * */
                setMobile: function (bindModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/set_mobile',
                        needToken: true,
                        data: {
                            mobile: bindModel.mobile
                        }
                    }).success(function (data) {
                        $rootScope.$emit('userInfo', {
                            mobile: data.mobile
                        });
                    });
                    return promise;
                },
                /*
                 * 绑定验证手机
                 * */
                confirmMobile: function (bindModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/confirm_mobile',
                        needToken: true,
                        data: {
                            token: bindModel.smsToken,
                            user_token: bindModel.userToken
                        }
                    }).success(function (data) {
                        $rootScope.$emit('userInfo', {
                            mobile: data.mobile
                        });
                    });
                    return promise;
                },
                /*
                 * 发送邮箱验证码
                 * 用于绑定邮箱
                 * */
                sendEmailCode: function (userModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/gen_email_confirmation_token',
                        needToken: true,
                        data: {
                            email: userModel.email
                        }
                    }).success(function (data) {
                    });
                    return promise;
                },
                /*
                 * 绑定邮箱
                 * */
                confirmEmail: function (bindModel) {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/confirm_email',
                        needToken: true,
                        data: {
                            user_token: bindModel.userToken,
                            token: bindModel.smsToken
                        }
                    }).success(function (data) {
                        $rootScope.$emit('userInfo', {
                            email: data.email
                        });
                    });
                    return promise;
                },
                /*
                 * 退出登录
                 * */
                logout: function () {
                    var promise = $http({
                        method: 'POST',
                        url: config.passport_api_url + '/v1' + '/logout',
                        needToken: true
                    }).success(function (data) {
                        $rootScope.$emit('userIntercepted', 'logout');
                    });
                    return promise;
                },
                /*
                 *  模糊查找昵称
                 * */
                nicknames: function (nickname) {
                    var promise = $http({
                        method: 'GET',
                        url: config.passport_api_url + '/passport_admin/list_nicknames',
                        params: {
                            page: 1,
                            per_page: 20,
                            filter_nickname: nickname
                        },
                        needToken: true
                    }).success(function (data) {
                    });
                    return promise;
                }
            };
        }];
        return PassportService;
    })();
    exports.PassportService = PassportService;
});
//serverModule.module.factory('PassportService', PassportService.factory); 
//# sourceMappingURL=passport_service.js.map