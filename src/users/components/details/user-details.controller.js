class UserDetailsController {

    /**
     * Constructor
     *
     * @param $mdBottomSheet
     * @param $log
     */
    constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
    }

    /**
     * Mostrar Detalle de Contacto
     */
    share() {
        var user = this.selected;
        var $mdBottomSheet = this.$mdBottomSheet;

        $mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'src/users/components/details/contact-sheet.html',
            controller: ['$mdBottomSheet', UserSheetController],
            controllerAs: "$ctrl",
            bindToController: true
        }).then((clickedItem) => {
            this.$log.debug(clickedItem.name + ' clicked!');
        });

        /**
         * Detalle de Contacto Controller Para las Acciones del Avatar
         */
        function UserSheetController($mdBottomSheet) {
            this.user = user;
            this.items = [
                { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
            ];
            this.performAction = (action) => {
                $mdBottomSheet.hide(action);
            };
        }
    }

}
export default UserDetailsController;