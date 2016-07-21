import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap';

import {techsModule} from './techs/index';

import routesConfig from './routes';

import {main} from './main';
import {header} from './components/header/header';
import {title} from './components/title/title';
import {footer} from './components/footer/footer';

import styles from  './index.scss';
console.log('app index.scss styles:', styles);

import 'bootstrap/dist/css/bootstrap.css'

angular
    .module('app', [techsModule, uiRouter, ngAnimate, ngTouch, uiBootstrap])
    .config(routesConfig)
    .component('app', main)
    .component('fountainHeader', header)
    .component('fountainTitle', title)
    .component('fountainFooter', footer)


    .run(['$rootScope', ($rootScope) => {
        $rootScope.globalStyles = styles;
    }]);