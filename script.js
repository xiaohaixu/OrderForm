/**
 * Created by DALI on 24/07/16.
 */
function OrderFormController($scope) {

    $scope.services = [
        {
            name: 'Crazy Java',
            price: 100,
            active: true
        },
        {
            name: 'Crazy C#',
            price: 200,
            active: false
        },
        {
            name: 'Crazy AngularJS',
            price: 300,
            active: false
        },
        {
            name: 'Crazy Android',
            price: 400,
            active: false
        }
    ];
    
    $scope.toggleActive = function (s) {
        s.active = !s.active;
        //alert(s.active);
    }

    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.services, function (s) {
            if (s.active){
                total += s.price;
            }
        });

        return total;
    };
}