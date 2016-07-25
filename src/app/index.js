import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap';

import {componentsModule} from './components';
import {commonModule} from './common';
import {techsModule} from './techs'

import routesConfig from './routes';

import './index.scss';


angular
    .module('myApp', [
        // dependencies
        uiRouter, ngAnimate, ngTouch, uiBootstrap,

        // modules
        componentsModule,
        commonModule,
        techsModule
    ])
    .config(routesConfig);