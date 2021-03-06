/**
 * Created by NICK on 15/9/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports", 'services/passport_service', 'services/putong_service', 'services/dashboard_service', 'services/httpinterceptor_factory', 'services/moemash_service', 'services/config_constant', 'services/shiji_service'], function (require, exports, passport, putong, dashboard, http, moemash, config, shiji) {
    var Services = (function () {
        function Services(module) {
            module.service(passport.PassportService._name, passport.PassportService.factory);
            module.service(putong.PutongService._name, putong.PutongService.factory);
            module.service(dashboard.DashboardService._name, dashboard.DashboardService.factory);
            module.factory(http.HttpInterceptorFactory._name, http.HttpInterceptorFactory.factory);
            module.service(moemash.MoemashService._name, moemash.MoemashService.factory);
            module.constant(config.ConfigConstant._name, config.ConfigConstant.config);
            module.service(shiji.ShijiService._name, shiji.ShijiService.factory);
        }
        return Services;
    })();
    exports.Services = Services;
});
//# sourceMappingURL=services.js.map