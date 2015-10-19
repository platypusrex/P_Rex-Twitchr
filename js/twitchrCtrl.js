(function(twitchapp){
    twitchapp.controller('twitchController', ['$scope', 'twitchService', function($scope, twitchService){

        var onSuccess = function(data){
            $scope.streams = data.featured;
        };

        var onError = function(err){
            $scope.err = 'There was a problem loading the data, dude.'
        };

        $scope.search = function(streamName){
            twitchService.searchStreams(streamName)
                .then(function(data){
                    var stream = data.streams[0];
                    var newstream = {stream};

                    twitchService.getStreams()
                        .then(function(data){
                            $scope.streams = data.featured;
                            $scope.streams.unshift(newstream);
                        }, onError);
                }, onError);
        };

        $scope.getClass = function(stream){
            return stream !== null ? 'fa fa-plus-circle fa-2x' : 'fa fa-minus-circle fa-2x';
        };

        twitchService.getStreams().then(onSuccess, onError);
        /*twitchService.getCodeCamp().then(function(data){
         $scope.codeCamp = data;
         }, onError);*/

    }]);
}(angular.module('TwitchApp')));