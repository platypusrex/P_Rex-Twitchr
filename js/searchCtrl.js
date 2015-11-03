(function(twitchapp){
    twitchapp.controller('searchController', ['$scope','twitchService', function($scope, twitchService){
        $scope.search = function(streamName){
            twitchService.searchStreams(streamName)
                .then(function(data){
                    console.log(data);
                    $scope.streams = data.streams.map(function(val){
                        if(val.channel.logo === null){
                            return {
                                logo: 'http://img.photobucket.com/albums/v219/CaptApril/Star%20Trek%20Concordance/Placeholder.jpg',
                                displayName: val.channel.display_name,
                                icon: 'fa fa-check-circle-o fa-2x',
                                followers: val.channel.followers,
                                game: val.channel.game,
                                url: val.channel.url,
                                views: val.channel.views,
                                viewers: val.viewers,
                                preview: val.preview.medium,
                                title: val.channel.status
                            }
                        }else {
                            return {
                                logo: val.channel.logo,
                                displayName: val.channel.display_name,
                                icon: 'fa fa-check-circle-o fa-2x',
                                followers: val.channel.followers,
                                game: val.channel.game,
                                url: val.channel.url,
                                views: val.channel.views,
                                viewers: val.viewers,
                                preview: val.preview.medium,
                                title: val.channel.status
                            }
                        }
                    });
                }, onError);
        };

        var onError = function(err){
            $scope.err = 'There was a problem loading the data, dude. Try again in a bit.';
        };
    }])
}(angular.module('TwitchApp')));