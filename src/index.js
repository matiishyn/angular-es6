import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap';

import {techsModule} from './app/techs/index';

import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/components/header/header';
import {title} from './app/components/title/title';
import {footer} from './app/components/footer/footer';

import './index.scss';

import 'bootstrap/dist/css/bootstrap.css'

angular
    .module('app', [techsModule, uiRouter, ngAnimate, ngTouch, uiBootstrap])
    .config(routesConfig)
    .component('app', main)
    .component('fountainHeader', header)
    .component('fountainTitle', title)
    .component('fountainFooter', footer);
