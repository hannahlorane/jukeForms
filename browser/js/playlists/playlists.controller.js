juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory, PlaylistsFactory){
	// $scope.listPlaylists = function () {
	// 	PlaylistsFactory.getPlaylists()
	// 	.then(function (plists) {
	// 		$scope.playlist = plists;
	// 		// console.log($scope.list);
	// 	})	
	// }
	$scope.cachedPlaylists = PlaylistFactory.cachedPlaylists;
});