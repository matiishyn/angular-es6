import angular from 'angular';

import footer from './footer/footer'
import navbar from '../common/navbar/navbar'

export const commonModule = 'myApp.common';

angular
    .module(commonModule, [])
    .component('myFooter', footer)
    .component('navbar', navbar);