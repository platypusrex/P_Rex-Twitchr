(function(twitchapp){
    twitchapp.controller('campController', ['$scope', 'twitchService', '$q', function($scope, twitchService, $q){

        var getCampStreams = function(){
            var campStreams = ["freecodecamp", "Mr4thDimention", "MartinCohen", "abnercoimbre","dasmehdi","lsrpnet","noobs2ninjas","assertchris", "NashCasts"];
            var promises = [];

            angular.forEach(campStreams, function(val){
                promises.push(twitchService.getCodeCamp(val));
            });
            $q.all(promises).then(function(data){
                var online = [];
                var offline = [];
                var channels = [];
                angular.forEach(data, function(val){
                    if(val.stream === null){
                        offline.push(val);
                    }else {
                        online.push(val);
                    }
                });
                angular.forEach(offline, function(val){
                    channels.push(twitchService.getCodeChannel(val._links.channel));
                });
                $q.all(channels).then(function(data){
                    var streamData = data;
                    online.forEach(function(val){
                        streamData.unshift(val);
                    });

                    $scope.streams = streamData.map(function(val){
                        if(!val.stream){
                            return {
                                logo: val.logo,
                                displayName: val.display_name,
                                icon: 'fa fa-exclamation-circle fa-2x',
                                url: val.url
                            }
                        }else{
                            return {
                                logo: val.stream.channel.logo,
                                displayName: val.stream.channel.display_name,
                                icon: 'fa fa-check-circle-o fa-2x',
                                followers: val.stream.channel.followers,
                                game: val.stream.channel.game,
                                url: val.stream.channel.url,
                                views: val.stream.channel.views,
                                viewers: val.stream.viewers,
                                preview: val.stream.preview.medium,
                                title: val.stream.channel.status
                            }
                        }
                    });
                });
            }, onError);
        };

        var onError = function(err){
            $scope.err = 'There was a problem loading the data, dude. Try again in a bit.';
        };

        getCampStreams();
    }]);
}(angular.module('TwitchApp')));