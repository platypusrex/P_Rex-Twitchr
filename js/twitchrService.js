(function(twitchapp){
    twitchapp.factory('twitchService', ['$http', function($http){

        var getStreams = function(){
            return $http.jsonp('https://api.twitch.tv/kraken/streams/featured?callback=JSON_CALLBACK')
                .then(function(res){
                    return res.data;
                });
        };

        var getCodeCamp = function(username){
            return $http.jsonp('https://api.twitch.tv/kraken/streams/' + username + '?callback=JSON_CALLBACK&')
                .then(function(res){
                    return res.data;
                });
        };

        var getCodeChannel = function(url){
            return $http.jsonp(url + '?callback=JSON_CALLBACK')
                .then(function(res){
                    return res.data;
                });
        }

        var searchStreams = function(streamName){
            return $http.jsonp('https://api.twitch.tv/kraken/search/streams?callback=JSON_CALLBACK&q=' + streamName)
                .then(function(res){
                    return res.data;
                });
        };

        return {
            getStreams: getStreams,
            getCodeCamp: getCodeCamp,
            getCodeChannel: getCodeChannel,
            searchStreams: searchStreams
        }

    }]);
}(angular.module('TwitchApp')));