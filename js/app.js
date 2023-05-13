var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.programs = [
    {
      image: 'images/f-img-1.jpg',
      icon: 'images/icon-1.png',
      title: 'body building',
      description: 'Train insane or remain the same.'
    },
    {
      image: 'images/f-img-2.jpg',
      icon: 'images/icon-2.png',
      title: 'weight loss',
      description: 'Say goodbye to the old you, hello to the new'
    },
    {
      image: 'images/f-img-3.jpg',
      icon: 'images/icon-3.png',
      title: 'Women\'s Special',
      description: 'Strong women, strong bodies'
    }
  ];

  $scope.search = ''; // Initialize search term to empty string
  
  // Filter function to apply to programs array based on search term
  $scope.filterPrograms = function(program) {
    return program.title.toLowerCase().includes($scope.search.toLowerCase());
  }
  


});