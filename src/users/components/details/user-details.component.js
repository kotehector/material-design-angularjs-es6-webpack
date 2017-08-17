import UserDetailsController from './user-details.controller.js';

export default {
    name: 'userDetails',
    config: {
        bindings: {
            selected: '<'
        },
        templateUrl: 'src/users/components/details/user-details.html',
        controller: ['$mdBottomSheet', '$log', UserDetailsController]
    }
};