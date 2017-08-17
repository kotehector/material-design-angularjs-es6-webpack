// Cargamos el Servicios

import UsersDataService from './services/UsersDataService';

// Definimos el módulo Angular 'users'

export default angular
    .module("users", ['ngMaterial'])
    .service("UsersDataService", UsersDataService);