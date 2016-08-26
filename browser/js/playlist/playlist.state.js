juke.config(function($stateProvider){
  $stateProvider.state('newPlaylist', {
    url: '/playlist',
    templateUrl: '/js/playlist/playlist.html'
  })
});
