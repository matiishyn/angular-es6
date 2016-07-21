import angular from 'angular';

import footer from './footer/footer'

export const commonModule = 'myApp.common';

angular
    .module(commonModule, [])
    .component('myFooter', footer);