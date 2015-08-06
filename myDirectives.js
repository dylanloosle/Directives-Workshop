var app = angular.module('myDirectives', []);

app.directive('pending', function(){
    return {
        restrict: 'A',
        scope: {
            request: '&'
        },
        link: function(scope, elem, attrs){
            console.log(scope, elem, attrs);

        }
    }

});