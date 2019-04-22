app.controller('MainController',  function ($scope, $http, ProgramTblService, HttpService) {

	/*
		PROPOSAL CONTROLLER
	*/
		$scope.step1 = true;

		$scope.checkproposalDitalsForm = function(){
			$scope.step2 = true;
			$scope.step1 = false;
		}

		$scope.gotostep1prop = function(){
			$scope.step1 = true;
			$scope.step2 = false;
		}

		$scope.gotostep2prop = function(){
			$scope.step3 = false;
			$scope.step2 = true;
		}

		$scope.gotostep3prop = function(){
			$scope.step3 = true;
			$scope.step2 = false;
		}

		$scope.submit = function(form){
			// $('#proposalDitalsForm').submit(function(){
			// 	alert('form submitted');
			// })
		}

		HttpService.call('/draft/lookup', "").then(function(response){
    	$scope.draftLU = response.data;
    	var test = 0;
    }, function(response){
    	alert("request could not be triggerd");
    });

		// $.ajax({
		// 		headers:{
		// 			contentType: 'application/json',
		// 			mimeType: 'application/json'
		// 		},
		// 		url: '/draft/lookup',
		// 		method: 'GET',
		// 		success: function(data){
		// 			$scope.draftLU = data;
		// 		},
		// 		error: function(data){
		//
		// 		}
		// });

		$scope.savedraft = function(){
			var $data = $scope.proposalDitalsForm.proposal;
			if($data && $data.tempid){
				$.ajax({
						headers:{
							contentType: 'application/json',
							mimeType: 'application/json'
						},
						url: '/proposal/draft',
						data: {proposal: $data},
						method: 'POST',
						success: function(data){
							var r = data;
							alert("Draft save successfully");
						},
						error: function(data){

						}
				});
			}else{
				alert("You can not save a draft without a proposal type");
			}

				// if($data && $data.tempid){
				// 	$http({
				// 		method: "POST",
				// 		url: '/proposal/draft',
				// 		data: {proposal: $data}
				// 	}).then(function(data){
				// 		var $r = data;
				// 		var test = 0;
				// 	})
				// }else{
				// 	alert("You can not save a draft without a proposal type");
				// }

		}

		// $scope.tempLookup = HttpService.call('/', '').then(function(response){

		// }, function(response){
		// 	alert("request could not be triggerd");
		// });

		$scope.go_loadData = function(){
			var data = JSON.parse($('#sendData').html());
			if($scope.proposalDitalsForm){
					$scope.proposalDitalsForm.proposal = {};

					$scope.proposalDitalsForm.proposal.tempid = data.tempid;
					$scope.proposalDitalsForm.proposal.bidnumber = data.bidnumber;
					$scope.proposalDitalsForm.proposal.clientname = data.clientname;
					$scope.proposalDitalsForm.proposal.keywords = data.keywords;
					$scope.proposalDitalsForm.proposal.tendername = data.tendername;
					$scope.proposalDitalsForm.proposal.closingdate = data.closingdate;
					$scope.proposalDitalsForm.proposal.closingtime = data.closingtime;
					$scope.proposalDitalsForm.proposal.description = data.description;
					$scope.proposalDitalsForm.proposal.address = data.address;

			}

		}


	/*
				END OF
		PROPOSAL cONTROLLER

	*/

	// $scope.htmlContent
	$scope.addNewImage = function(){
		var imgSRC = $('#blah').attr('src');
		var theImage = '<img src="'+imgSRC+'" />';
		$scope.htmlContent += theImage;
		$('#blah').attr('src', 'http://placehold.it/180');
	}

//Add new sub-section
	$scope.sectionNo = 1;
	$scope.subSection = 1.1;

	$scope.AddNewSub = function(){
		console.log($scope.subForm.data.sec_name);

		//copy htmlContent to static field n ....
		//check for id, if ot there its new sectio, add new id
		//add Remove angular parameters, after coppingdata to a variable
		var oldData = $scope.htmlContent;
		$('.myEditor').each(function(i, e){
			if(!($(e).attr('id'))){
				// remove all the elements

				$(e).removeAttr('text-angular');
				$(e).removeAttr('name');
				$(e).removeAttr('ng-model');
				$(e).html('');
				$(e).html(oldData);

				// add the new ID generated from ...
				// create a new panel + editor

			}
		})
		// if(!($('.myEditor').attr('id'))){
		// 	var myval = $(this);
		// }
		var test = 0;
	}

	$scope.addTableFor = {};
	$scope.addTableFor.data = {};

	$scope.dynamicTable = function(){

		var cols = $scope.addTableFor.data.cols;
		var rows = $scope.addTableFor.data.rows;
		if(!rows || rows < 2){
			rows = 2;
		}

		if(!cols || cols < 2){
			cols = 2;
		}


		var colCount = [];
		var rowCount = [];
		$scope.grid = [];
		var x = 1;
		for(var r = 1; r <= rows; r++){
			for(var c = 1; c <= cols; c++){
				if(r < 2){
					colCount.push({'id':c, 'x': x});
				}else{
					if(c == 1){
						colCount.push({'id':r, 'x': x});
					}else{
						colCount.push({'id':"-", 'x': x});
					}
				}
				// colCount.push(x);
				x++;

			}
			rowCount.push(colCount);
			colCount = [];

		}
		$scope.grid = rowCount;
	}

	$scope.addNewTable = function() {
		var cols = $scope.addTableFor.data.cols;
		var rows = $scope.addTableFor.data.rows;
		if(cols > 2 && rows > 2){
			var dyTbl = $('#sendTable').html();
			$scope.htmlContent += dyTbl;
		}else{
			alert('Canot creat a table with '+rows+' rows and '+cols+' columns.');
		}
	}


});
