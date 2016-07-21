import angular from 'angular';

import {app} from './app/app'

export const componentsModule = 'myApp.components';

angular
    .module(componentsModule, [])
    .component('app', app);