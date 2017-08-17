import angular from 'angular';

export function startApp() {
    angular
        .element(document)
        .ready(function() {
            angular
                .module('app-bootstrap', [])
                .run(() => {
                    console.log('Running "app-bootstrap" module...');
                });

            let body = document.getElementsByTagName("body")[0];
            angular.bootstrap(body, ['app-bootstrap']);
        });
}