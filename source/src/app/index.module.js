/* global  moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import underscore from 'underscore'
angular.module('karma', ['ngAnimate', 'ngResource', 'ui.router', 'toastr'])
  .constant('moment', moment)
  .constant('_',underscore)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
