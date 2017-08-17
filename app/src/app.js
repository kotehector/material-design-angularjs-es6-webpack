import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from './AppController';
import Users from './users/Users';

export default angular.module('app', ['ngMaterial', Users.name])
    .run(() => {
        console.log('Running "app" module...');
    });