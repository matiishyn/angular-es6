export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            template: `<app></app>`
        })
        .state('app.about', {
            url: 'about',
            template: '<about></about>'
        })
        .state('app.dashboard', {
            url: 'dashboard',
            template: '<dashboard></dashboard>'
        })
        .state('app.techs', {
            url: 'techs',
            template: '<fountain-techs></fountain-techs>'
        })

}
