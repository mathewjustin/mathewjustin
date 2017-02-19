/**
 * 
 * controller for professional profile page.
 */


routerApp.controller('pprofileController', function($scope,pcontentService) {

	$scope.message = 'test';

	$scope.proLists = pcontentService.getProjectDatas(); 
});