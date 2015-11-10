angular.module('myApp', []).controller('myController', function($scope){

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
			desc: 'Made a cool football game'
		},
		{
			name: 'Chance',
			desc: 'Bootsrap Guy'
		},
		{
			name: 'Will',
			desc: 'Wig guy'
		},
		{
			name: 'Stephen',
			desc: 'Awesome theme'
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict'
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times/day'
		},

	];
});