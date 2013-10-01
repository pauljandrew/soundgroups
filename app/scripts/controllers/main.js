'use strict';

angular.module('soundgroupsApp')
  .controller('MainCtrl', function ($scope) {
    SC.initialize({
        client_id: "9ba9381d894c0cc4421485707925533d",
        redirect_uri: "http://localhost:9000/callback.html"
    });

    SC.connect(function(){
        SC.get("/me", function(me){
          $scope.userName = me.username;
          $scope.userDesc = me.description;
        });
      });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
