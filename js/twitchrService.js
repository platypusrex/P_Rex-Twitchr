(function(twitchapp){
    twitchapp.factory('twitchService', ['$http', function($http){

        var getStreams = function(){
            return $http.get('https://api.twitch.tv/kraken/streams/featured')
                .then(function(res){
                    return res.data;
                });
        };

        var getCodeCamp = function(username){
            return $http.jsonp('https://api.twitch.tv/kraken/streams?callback=JSON_CALLBACK&channel=manvsgame,freecodecamp')
                .then(function(res){
                    return res.data;
                });
        };

        var searchStreams = function(streamName){
            return $http.jsonp('https://api.twitch.tv/kraken/streams?callback=JSON_CALLBACK&channel=' + streamName)
                .then(function(res){
                    return res.data;
                });
        };

        return {
            getStreams: getStreams,
            getCodeCamp: getCodeCamp,
            searchStreams: searchStreams
        }

    }]);
}(angular.module('TwitchApp')));