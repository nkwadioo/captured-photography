app.controller('programsController',  function ($scope, ProgramTblService) {
	// body...
	var $scope = this;

	$scope.programsTbls = {};

	$scope.programsTbls.financials = [];
	$scope.programsTbls.services = [];
	$scope.programsTbls.infrastructure = [];
	$scope.programsTbls.procurement = [];
	$scope.programsTbls.organizational = [];


	// $scope.Financial = "my financials";
	// $scope.programName = "name of program";
	// $scope.FinancialTbl = [
	// 	{
	// 		'Strategic_Objectives': 'Enhance efficiency of Government business processes',
	// 		'Performance_Indicator': '# of e-Government services deployed',
	// 		'year1': 'R200,000,00.00',
	// 		'year2': 'R400,000,00.00',
	// 		'year3': 'R600,000,00.00',
	// 		'year4': 'R800,000,00.00',
	// 		'year5': 'R1,000,000,00.00'
	// 	},
	// 	{
	// 		'Strategic_Objectives': 'Improve Security of Government Data assets',
	// 		'Performance_Indicator': 'Level of maturity of ICT security',
	// 		'year1': 'R300,000,00.00',
	// 		'year2': 'R800,000,00.00',
	// 		'year3': 'R1,200,000,00.00',
	// 		'year4': 'R1,500,000,00.00',
	// 		'year5': 'R1,6000,000,00.00'
	// 	}
	// ];

	


	$scope.programsTbls.financials = [
		{
			'Strategic_Objectives': 'Enhance efficiency of Government business processes',
			'Performance_Indicator': '# of e-Government services deployed',
			'year1': '20 e-Services',
			'year2': '50 e-Services',
			'year3': '80 e-Services',
			'year4': '100 e-Services',
			'year5': '120 e-Services'
		},
		{
			'Strategic_Objectives': 'Improve Security of Government Data assets',
			'Performance_Indicator': 'Level of maturity of ICT security',
			'year1': 'R300,000,00.00',
			'year2': 'R800,000,00.00',
			'year3': 'R1,200,000,00.00',
			'year4': 'R1,500,000,00.00',
			'year5': 'R1,6000,000,00.00'
		}
	];
	// $scope.programsTbls.push($scope.FinancialTbl);

	$scope.programsTbls.services = [
		{
			'Strategic_Objectives': 'Enhance efficiency of Government business processes',
			'Performance_Indicator': '# of e-Government services deployed',
			'year1': '20 e-Services',
			'year2': '50 e-Services',
			'year3': '80 e-Services',
			'year4': '100 e-Services',
			'year5': '120 e-Services'
		},
		{
			'Strategic_Objectives': 'Improve Security of Government Data assets',
			'Performance_Indicator': 'Level of maturity of ICT security',
			'year1': 'R300,000,00.00',
			'year2': 'R800,000,00.00',
			'year3': 'R1,200,000,00.00',
			'year4': 'R1,500,000,00.00',
			'year5': 'R1,6000,000,00.00'
		}
	];

	$scope.programsTbls.infrastructure =[
		{
			'Strategic_Objectives': 'Enhance efficiency of Government business processes',
			'Performance_Indicator': '# of e-Government services deployed',
			'year1': 'R200,000,00.00',
			'year2': 'R400,000,00.00',
			'year3': 'R600,000,00.00',
			'year4': 'R800,000,00.00',
			'year5': 'R1,000,000,00.00'
		},
		{
			'Strategic_Objectives': 'Improve Security of Government Data assets',
			'Performance_Indicator': 'Level of maturity of ICT security',
			'year1': 'R300,000,00.00',
			'year2': 'R800,000,00.00',
			'year3': 'R1,200,000,00.00',
			'year4': 'R1,500,000,00.00',
			'year5': 'R1,6000,000,00.00'
		}
	];

	$scope.programsTbls.procurement =[
		{
			'Strategic_Objectives': 'Enhance efficiency of Government business processes',
			'Performance_Indicator': '# of e-Government services deployed',
			'year1': 'R200,000,00.00',
			'year2': 'R400,000,00.00',
			'year3': 'R600,000,00.00',
			'year4': 'R800,000,00.00',
			'year5': 'R1,000,000,00.00'
		},
		{
			'Strategic_Objectives': 'Improve Security of Government Data assets',
			'Performance_Indicator': 'Level of maturity of ICT security',
			'year1': 'R300,000,00.00',
			'year2': 'R800,000,00.00',
			'year3': 'R1,200,000,00.00',
			'year4': 'R1,500,000,00.00',
			'year5': 'R1,6000,000,00.00'
		}
	];

	$scope.programsTbls.organizational =[
		{
			'Strategic_Objectives': 'Enhance efficiency of Government business processes',
			'Performance_Indicator': '# of e-Government services deployed',
			'year1': 'R200,000,00.00',
			'year2': 'R400,000,00.00',
			'year3': 'R600,000,00.00',
			'year4': 'R800,000,00.00',
			'year5': 'R1,000,000,00.00'
		},
		{
			'Strategic_Objectives': 'Improve Security of Government Data assets',
			'Performance_Indicator': 'Level of maturity of ICT security',
			'year1': 'R300,000,00.00',
			'year2': 'R800,000,00.00',
			'year3': 'R1,200,000,00.00',
			'year4': 'R1,500,000,00.00',
			'year5': 'R1,6000,000,00.00'
		}
	];
	ProgramTblService.setAllProgram($scope.programsTbls);

	// MainService.setProgramTbl($scope.programsTbls);

// $scope.getTable = function(tblName){
// 	var name = this.innerHTML;
// 		if(tblName == 'finance'){
// 			$scope.printTable = $scope.programsTbls.financials;
// 		}else if(tblName == "service"){
// 			$scope.printTable = $scope.programsTbls.services;
// 		}else if(tblName == "infra"){
// 			$scope.printTable = $scope.programsTbls.infrastructure;
// 		}else if(tblName == "procu"){
// 			$scope.printTable = $scope.programsTbls.procurement;
// 		}else if(tblName == "org"){
// 			$scope.printTable = $scope.programsTbls.organizational;
// 		}


// 	}
	// console.log($scope.programsTbls);


	// $scope.Infrastructure = "my infrastructure"


});