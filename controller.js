angular.module('CategoryApp.controllers', []).
controller('categoryController', function($scope,catAPIservice) {
\* commenting out this code for getting records from service like this */
   \* $scope.categoryList = [
      {
          Category: {
              givenName: 'Siddharth',
              familyName: 'Tripathi'
          },
          points: 322,
          nationality: "Indian",
          Constructors: [
              {name: "Ramayan"}
          ]
      },
      {
          Category: {
          givenName: 'Vijay',
              familyName: 'Tripathi'
          },
          points: 207,
          nationality: "Indian",
          Constructors: [
              {name: "Geeta"}
          ]
      }
    ];*/

$scope.nameFilter = null;
    $scope.categoryList = [];

catAPIservice.getCategory().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.categoryList = response.MRData.StandingsTable.StandingsLists[0].CategoryListings;
    });
$scope.searchFilter = function (driver) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(category.Category.givenName) || keyword.test(category.Category.familyName);
};
/* Category controller */
  controller('categoryController', function($scope, $routeParams, catAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.category = null;

    catAPIservice.getCategoryDetails($scope.id).success(function (response) {
        $scope.category = response.MRData.StandingsTable.StandingsLists[0].CategoryStandings[0]; 
    });

    catAPIservice.getCategoryRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

});
