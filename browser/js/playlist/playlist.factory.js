juke.factory('PlaylistFactory', function($http, $stateParams){
	var playlistFactory = {};
	var cachedPlaylists = [];

	playlistFactory.fetchAll = function () {
	    return $http.get('/api/playlists')
	    .then(function (response) {
	      angular.copy(response.data, cachedPlaylists);
	      return cachedPlaylists;
	    });
	  };

	playlistFactory.create = function(data){
		// console.log("HERE")
		return $http.post('/api/playlists', data)
		.then(function (response){
			var playlist = response.data
      		cachedPlaylists.push(playlist);
      		return playlist;
		});
	};
	playlistFactory.findById = function(){
		console.log($stateParams);
		return $http.get('/api/playlists/' + $stateParams.id)
		.then(function(response){
			console.log(response.data);
			var playlist = response.data;
			return playlist;
		})
	}
	return playlistFactory;
});