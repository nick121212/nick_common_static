/**
 * Created by NICK on 15/9/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

export class TollbarItem {
    public title:string;
    public icon:string;
    public onClick:Function;

    constructor(title:string, icon:string, onClick:Function) {
        this.title = title;
        this.icon = icon;
        this.onClick = onClick;
    }
}