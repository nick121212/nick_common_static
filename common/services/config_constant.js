/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports", 'module'], function (require, exports, config) {
    var ConfigConstant = (function () {
        function ConfigConstant() {
        }
        ConfigConstant._name = 'config';
        ConfigConstant.config = config.config();
        return ConfigConstant;
    })();
    exports.ConfigConstant = ConfigConstant;
});
//serverModule.module.constant('config', ConfigConstant.config()); 
//# sourceMappingURL=config_constant.js.map