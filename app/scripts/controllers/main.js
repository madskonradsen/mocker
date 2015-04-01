'use strict';

/**
 * @ngdoc function
 * @name mockerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockerApp
 */
angular.module('mockerApp')
  .controller('MainCtrl', function ($scope, $http, SelectDataService) {
  	//Init our response-object
  	$scope.response = {};

  	//Providing data for our select-boxes
    $scope.selectStatuscodes = SelectDataService.statuscodes;
    $scope.selectContenttypes = SelectDataService.contenttypes;
    $scope.selectCharsets = SelectDataService.charsets;

    //Setting default values
    $scope.initInputs = function() {
    	$scope.selectStatuscodes.selected = SelectDataService.statuscodes[3];
    	$scope.selectContenttypes.selected = SelectDataService.contenttypes[0];
    	$scope.selectCharsets.selected = SelectDataService.charsets[0];
    	$scope.response.headers = [];
    	$scope.response.body = '';
    	$scope.links = [];
    };

    $scope.initInputs();

    $scope.addHeader = function() {
    	$scope.response.headers.push({'id':'header'+$scope.response.headers.length+1});
    };

    $scope.removeHeader = function(id) {
    	$scope.response.headers.splice(id, 1);
    };

    //Preparing the data and sending it off
    $scope.save = function() {
    	$scope.response.statuscode = $scope.selectStatuscodes.selected.code;
    	$scope.response.contenttype = $scope.selectContenttypes.selected;
    	$scope.response.charset = $scope.selectCharsets.selected;
    	$scope.spinner = true;

    	//Saving the reponse-object and getting an URL back.
    	//http://localhost:87878/api/save
    	$http.post('http://madskonradsen.dk/mocker', $scope.response).
    	  success(function(data, status, headers, config) {
    	    $scope.spinner = false;

    	    console.log(data);
    	    //Mocking out my own mocker... cool right?
    	    $scope.links.unshift({'time': new Date().toUTCString(),'url':'http://madskonradsen.com/mocker'});
    	  }).
    	  error(function(data, status, headers, config) {
    	    $scope.spinner = false;
    	    console.error("Request failed: "+status);
    	  });
    };

  });