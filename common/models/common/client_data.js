/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var Common;
    (function (Common) {
        var ClientData = (function () {
            function ClientData() {
            }
            ClientData.prototype.contructor = function () {
                this.datas = [];
            };
            return ClientData;
        })();
        Common.ClientData = ClientData;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=client_data.js.map