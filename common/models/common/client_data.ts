/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

export module Common {
    export class ClientData<T> {
        public total:number;
        public datas:Array<T>;

        contructor() {
            this.datas = [];
        }
    }
}