/**
 * Created by NICK on 15/9/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var TollbarItem = (function () {
        function TollbarItem(title, icon, onClick) {
            this.title = title;
            this.icon = icon;
            this.onClick = onClick;
        }
        return TollbarItem;
    })();
    exports.TollbarItem = TollbarItem;
});
//# sourceMappingURL=toolbar_item.js.map