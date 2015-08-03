angular.module('ranker', [])
    .controller(
        'listCreationCtrl',
        function($log, $scope){
            // start with no candidates
            $scope.candidates = [];

            $scope.add = function(event) {
                if(event.which === 13) {
                    $log.debug(event);
                    $scope.candidates.push({name:$scope.newCandidate});
                    $scope.newCandidate = '';

                    $log.info('candidates after push: ' + angular.toJson($scope.candidates));
                }
            };
        });
