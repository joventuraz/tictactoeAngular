'use strict';

angular.module('TicTacToeApp')
  .controller('MainCtrl', function ($scope) {
  	var boardIsFull = false;
    $scope.winner = '';
    $scope.boxes = {
    									top: [{marked: 'O'}, {marked: ''}, {marked: ''}],
    									middle: [{marked: 'X'}, {marked: ''}, {marked: ''}],
    									bottom: [{marked: 'O'}, {marked: ''}, {marked: ''}]
    								};

		$scope.addCircle = function(box) {
			var boardCounterMarked = 0;
			for (var index = 0; index < $scope.boxes.top.length; index++) {
				if ($scope.boxes.top[index].marked !== '') {
					boardCounterMarked++;
				} else {
					break;
				}
			}
			for (var index = 0; index < $scope.boxes.middle.length; index++) {
				if ($scope.boxes.middle[index].marked !== '') {
					boardCounterMarked++;
				} else {
					break;
				}
			}
			for (var index = 0; index < $scope.boxes.bottom.length; index++) {
				if ($scope.boxes.bottom[index].marked !== '') {
					boardCounterMarked++;
				} else {
					break;
				}
			}
			if (boardCounterMarked === 9) {
				boardIsFull = true;
			}
			checkIfWon();
		};

		function checkIfWon() {
			if ($scope.boxes.top[0].marked === 'O' && $scope.boxes.top[1].marked ==='O' && $scope.boxes.top[2].marked ==='O') {
				$scope.winner = "Player";
				console.log("winner");
			} else if ($scope.boxes.top[0].marked ==='O' && $scope.boxes.middle[0].marked==='O' && $scope.boxes.bottom[0].marked === 'O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.top[0].marked ==='O' && $scope.boxes.middle[1].marked==='O' && $scope.boxes.bottom[2].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.top[2].marked ==='O' && $scope.boxes.middle[1].marked==='O' && $scope.boxes.bottom[0].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.top[2].marked === 'O' && $scope.boxes.middle[2].marked ==='O' && $scope.boxes.bottom[2].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.top[1].marked === 'O' && $scope.boxes.middle[1].marked ==='O' && $scope.boxes.bottom[1].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.middle[0].marked === 'O' && $scope.boxes.middle[1].marked ==='O' && $scope.boxes.middle[2].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.bottom[0].marked === 'O' && $scope.boxes.bottom[1].marked ==='O' && $scope.boxes.bottom[2].marked ==='O') {
				$scope.winner = "Player";
			} else if ($scope.boxes.top[0].marked === 'X' && $scope.boxes.top[1].marked ==='X' && $scope.boxes.top[2].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.top[0].marked ==='X' && $scope.boxes.middle[0].marked==='X' && $scope.boxes.bottom[0].marked === 'X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.top[0].marked ==='X' && $scope.boxes.middle[1].marked==='X' && $scope.boxes.bottom[2].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.top[2].marked ==='X' && $scope.boxes.middle[1].marked==='X' && $scope.boxes.bottom[0].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.top[2].marked === 'X' && $scope.boxes.middle[2].marked ==='X' && $scope.boxes.bottom[2].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.top[1].marked === 'X' && $scope.boxes.middle[1].marked ==='X' && $scope.boxes.bottom[1].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.middle[0].marked === 'X' && $scope.boxes.middle[1].marked ==='X' && $scope.boxes.middle[2].marked ==='X') {
				$scope.winner = "Computer";
			} else if ($scope.boxes.bottom[0].marked === 'X' && $scope.boxes.bottom[1].marked ==='X' && $scope.boxes.bottom[2].marked ==='X') {
				$scope.winner = "Computer";
			} else {
				if (boardIsFull) {
					$scope.winner = "Tie";	
				}
			}
		}
  });
