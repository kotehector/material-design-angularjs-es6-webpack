import angular from 'angular';

angular
    .element(document)
    .ready(function() {
        angular
            .module('app', [])
            .run(() => {
                console.log('Running "app" module...');
            });

        let body = document.getElementsByTagName("body")[0];
        angular.bootstrap(body, ['app']);
    })



function main() {
    console.log("hola");
}

main();