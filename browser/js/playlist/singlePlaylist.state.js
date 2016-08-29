juke.config(function($stateProvider){
  $stateProvider.state('singlePlaylist', {
    url: '/playlist/:id',
    templateUrl: '/js/playlist/singlePlaylist.html',
    controller: 'singlePlaylistCtrl',
    params: {
    	'id': '0'
    }
  })
});