app.factory("ProgramTblService",  function(){
		var programsTbls = {};
			programsTbls.financials = [];
			programsTbls.services = [];
			programsTbls.infrastructure = [];
			programsTbls.procurement = [];
			programsTbls.organizational = [];
		/*
			THIS FACTORY / SERVICE HAS TO
				1) be able to add data to the correct program object
				2) be able to remove data from each program
				3) be able to edit data from each program
		*/

		return{
			setAllProgram: function(data){
				programsTbls = data;
			},
			setProgram: function(tblName, data){
				if(tblName == 'financials' || tblName == 'Financials'){
					programsTbls.financials = data;
				}else if(tblName == "services" || tblName == "Services"){
					programsTbls.services = data;
				}else if(tblName == "infrastructure" || tblName == "Infrastructure"){
					programsTbls.infrastructure = data;
				}else if(tblName == "procurement" || tblName == "Procurement"){
					programsTbls.procurement = data;
				}else if(tblName == "organizational" || tblName == "Organizational"){
					programsTbls.organizational = data;
				}else{
					alert("You trying to add to an undifined program");
				}
			},	//addProgram
			getAllPrograms: function(){
				return programsTbls;
			},
			getPrograms: function(tblName){
				if(tblName == 'financials' || tblName == 'Financials'){
					return programsTbls.financials;
				}else if(tblName == "services" || tblName == "Services"){
					return programsTbls.services;
				}else if(tblName == "infrastructure" || tblName == "Infrastructure"){
					return programsTbls.infrastructure;
				}else if(tblName == "procurement" || tblName == "Procurement"){
					return programsTbls.procurement;
				}else if(tblName == "organizational" || tblName == "Organizational"){
					return programsTbls.organizational;
				}else{
					return null;
				}
			}	//getProgram
		};
	});


app.service('HttpService', function($http){
	this.call = function(url, data){
		if(data){
			return $http({
				headers:{
					contentType: 'application/json',
					mimeType: 'application/json'
				},
				method: "POST",
				url: url,
				data: data
			});
		}else{
			return $http({
				headers:{
					contentType: 'application/json',
					mimeType: 'application/json'
				},
				method: "GET",
				url: url
			});
		}
	}
});



// MyApp.controller('workController', function($scope, SharedService){
//     SharedService.set([
//         {name:'test', type:'web', link:'test', image:'iso.jpg'},
//         {name:'test', type:'web', link:'test', image:'iso.jpg'},
//     ]);
// });

// MyApp.controller('projectController', function($scope, SharedService){
//     console.log(SharedService.get());
// });

// MyApp.service('SharedService', function(){
//     var self = {
//         get: function(data){
//             return self._data;
//         },
//         set: function(data){
//             self._data = data
//         }
//     };

//     return {
//         get: self.get,
//         set: self.set
//     }
// });
