// Definición del Componente UsersListComponent.
export default {
    name: 'usersList',
    config: {
        bindings: { users: '<', selected: '<', showDetails: '&onSelected' },
        templateUrl: 'src/users/components/list/UsersList.html',
    }
};