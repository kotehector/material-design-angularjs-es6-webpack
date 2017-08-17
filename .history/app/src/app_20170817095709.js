import angular from 'angular';
import 'angular-material/angular-material.scss';

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