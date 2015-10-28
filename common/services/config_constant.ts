/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import config = require('module');

export class ConfigConstant {
    public static _name:string = 'config';

    public static config:any = config.config();
}
//serverModule.module.constant('config', ConfigConstant.config());