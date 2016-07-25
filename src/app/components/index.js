import angular from 'angular';

import app from './app/app'
import about from './about/about'
import dashboard from './dashboard/dashboard'


export const componentsModule = 'myApp.components';

angular
    .module(componentsModule, [])
    .component('app', app)
    .component('about', about)
    .component('dashboard', dashboard)