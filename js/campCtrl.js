(function(twitchapp){
    twitchapp.controller('campController', ['$scope', 'twitchService', function($scope, twitchService){

        var onSuccess = function(data){
            $scope.codeCamp = data;
            console.log($scope.codeCamp);
        };

        var onError = function(err){
            $scope.err = 'There was a problem loading the data, dude. Try again in a bit.';
        };

        twitchService.getCodeCamp().then(onSuccess, onError);
    }]);
}(angular.module('TwitchApp')));