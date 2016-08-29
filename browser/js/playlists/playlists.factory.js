juke.factory('PlaylistsFactory', function($http){
	var playlists = {};
	playlists.getPlaylists = function() {
		return $http.get('/api/playlists')
		.then(function(rtndResponse){
			// console.log(rtndResponse.data)
		return rtndResponse.data;
		});
	};
	// playlists = 
	return playlists;
})