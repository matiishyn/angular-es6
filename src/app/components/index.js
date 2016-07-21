import angular from 'angular';

import app from './app/app'
import navbar from './navbar/navbar'

export const componentsModule = 'myApp.components';

angular
    .module(componentsModule, [])
    .component('app', app)
    .component('navbar', navbar);