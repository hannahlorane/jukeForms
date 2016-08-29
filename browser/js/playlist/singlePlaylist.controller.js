juke.controller('singlePlaylistCtrl', function($scope, $stateParams, PlaylistFactory){
	PlaylistFactory.findById($stateParams.id)
  	.then(function(singlePlaylistFound){
  		$scope.playlist = singlePlaylistFound;
  	});
})

