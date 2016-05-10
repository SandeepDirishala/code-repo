angular.module('CategoryApp.services', []).
  factory('catAPIservice', function($http) {

    var catAPI = {};

    catAPI.getCategories = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://test.com/api/f1/categoryListings.json?callback=JSON_CALLBACK'
      });
    }
   catAPI.getCategoryDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://test.com/api/f1/categories/'+ id +'/categoryStandings.json?callback=JSON_CALLBACK'
      });
    }

    catAPI.getCategoryRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://test.com/api/f1/categories/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }


    return catAPI;
  });
