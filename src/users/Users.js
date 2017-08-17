// Cargamos el Servicios

import UsersDataService from './services/UsersDataService';

import UsersList from './components/list/users-list.component';
import UserDetails from './components/details/user-details.component';

// Definimos el módulo Angular 'users'

export default angular
    .module("users", ['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    .component(UserDetails.name, UserDetails.config)
    .service("UsersDataService", UsersDataService);