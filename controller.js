angular.module('myApp', []).controller('myController', function($scope, $http){

	$scope.addPerson = function(){
		$scope.students.push(
			{
				name: $scope.newName,
				desc: $scope.newDesc
			}
		);
		$scope.newName = "";
		$scope.newDesc = "";
	}

	$scope.removeStudent = function(studentToRemove){
		var i = $scope.students.indexOf(studentToRemove);
		$scope.students.splice(i,1);
	}

	$scope.students = [
		{
			name: 'Freddy',
			desc: 'Made a cool football game',
			luckyNumber: 9
		},
		{
			name: 'Chance',
			desc: 'Bootsrap Guy',
			luckyNumber: 11
		},
		{
			name: 'Will',
			desc: 'Wig guy',
			luckyNumber: 153
		},
		{
			name: 'Stephen',
			desc: 'Awesome theme',
			luckyNumber: 40000000000
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict',
			luckyNumber: 63
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times/day',
			luckyNumber: 32
		}

	];
});