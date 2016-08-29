juke.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory, $stateParams){
  console.log($stateParams)
  $scope.create = function(newPlaylist) {
  	PlaylistFactory.create(newPlaylist)
  		.then(function (result) {
  			console.log(result);
  		})
  		.then($scope.clear)
  		.then($state.go('singlePlaylist', {'id': '6'}))
  		.catch(console.error.bind(console));
  	};
  	$scope.clear = function(){
  		console.log("scope clear called yay");
  		//$scope.newPlaylist.$setPristine();
  		$scope.playlist.name = '';
  	}
  	PlaylistFactory.fetchAll()
  		.then(function (plists) {
  			$scope.cachedPlaylists = plists;
  		});


});