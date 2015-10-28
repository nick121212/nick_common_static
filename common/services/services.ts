/**
 * Created by NICK on 15/9/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');

import passport = require('services/passport_service');
import putong = require('services/putong_service');
import dashboard = require('services/dashboard_service');
import http = require('services/httpinterceptor_factory');
import moemash = require('services/moemash_service');
import config = require ('services/config_constant');
import shiji = require ('services/shiji_service');

export class Services {
    constructor(module:ng.IModule) {
        module.service(passport.PassportService._name, passport.PassportService.factory);
        module.service(putong.PutongService._name, putong.PutongService.factory);
        module.service(dashboard.DashboardService._name, dashboard.DashboardService.factory);
        module.factory(http.HttpInterceptorFactory._name, http.HttpInterceptorFactory.factory);
        module.service(moemash.MoemashService._name, moemash.MoemashService.factory);
        module.constant(config.ConfigConstant._name, config.ConfigConstant.config);
        module.service(shiji.ShijiService._name, shiji.ShijiService.factory);
    }
}