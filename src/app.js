import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from './AppController';
import Users from './users/Users';

export default angular.module('app', ['ngMaterial', Users.name])
    .config(($mdIconProvider) => {
        console.log('Running "app" module...');
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon("menu", './assets/svg/menu.svg', 24)
            .icon("share", './assets/svg/share.svg', 24)
    })
    .controller('AppController', AppController);