
app.controller('reportsController',  function($scope, ProgramTblService) {
 
// body...
var $scope = this;

var programs = ProgramTblService.getAllPrograms();

// code goes here
$scope.reports = [], $scope.pimList = [], $scope.progList = [];
var index = 0;
$.each(programs, function(name, value){
   $scope.progList.push({"name": name});
   var pname = name;
   for(var i = 0; i < value.length; i++){
       $scope.pimList.push({"index": index, "id": i, "program": pname, "name":value[i].Performance_Indicator});
       index++;
   }
});

$scope.getProgrmaData = function(){
     if($scope.reportForm.rep.performanceMeasure && $scope.reportForm.rep.progName){

        // console.log($scope.pimList[$scope.reportForm.rep.performanceMeasure]);
        var i = $scope.reportForm.rep.performanceMeasure;
        var temp = ProgramTblService.getPrograms($scope.pimList[i].program);
        var selectedProg = temp[$scope.pimList[i].id];
        var test = 0;
    }
}

// $scope.pimList = [
//         {"id":'1', "name": "# of e-Government sevices deployed"},
//         {"id":'2', "name": "Level of maturity of ICT security"},
//         {"id":'3', "name": "Customer satisfaction level"},
//         {"id":'4', "name": "% performance against measured contracted SLA metrics"},
//         {"id":'5', "name": "% increase in government market share"},
//         {"id":'6', "name": "# of Government private cloud services available"},
//         {"id":'7', "name": "# of clients provided with disaster recovery services"},
//         {"id":'9', "name": "# of SA Connect phase 1 sites connected at bandwidths of 10Mbps"},
//         {"id":'10', "name": "% of tender awards completed within the targeted turnaround time"},
//         {"id":'11', "name": "# % of ICT acquisition spend through SMME entities"},
//         {"id":'12', "name": "Broad Based Black Economic Empowerment Recognition Level"},
//         {"id":'13', "name": "Earning Before Interest and Tax"},
//         {"id":'14', "name": "% of Net Collection Rate"},
//         {"id":'15', "name": "Gross Margin"},
//         {"id":'16', "name": "% of critical positions with minimum cover ratio of 1:2"},
//         {"id":'16', "name": "New Organisational Design Implementation"},
//         {"id":'16', "name": "Fraud Awareness and Prevention Strategies Roll Out"}   
// ];

// $scope.progList=[
//     {"id":'1', "name": "Service Delivery"},
//     {"id":'2', "name": "Infrastructure"},
//     {"id":'3', "name": "Financial Stability"},
//     {"id":'4', "name": "Organisation"},
//     {"id":'5', "name": "Governanace and Administration"}
// ];

// $scope.performanceList=[
//     {"id":'1', "name": "Financial perspective"},
//     {"id":'2', "name": "Customer perspective"},
//     {"id":'3', "name": "Internal perspective"},
//     {"id":'4', "name": "Learning perspective"}
// ];



$scope.ragStatusList=[
    {"id":'1', "name": "Approved"},
    {"id":'2', "name": "Not-Approved"}
  
];



    $scope.addReport = function(data) {
       
    
        var addingreports = {
            
    
            "progName"            : data.progName,
            "objective"           : data.objective,
            "performanceMeasure"  : data.performanceMeasure,
            "annual_target"       : data.annual_target,
            "target"              : data.target,
            "actualStatus"        : data.actualStatus,
            "deviation"           : data.deviation,
            "reasonVariance"      : data.reasonVariance,
            "ragStatus"           : data.ragStatus
    
        };
    
        $scope.reports.push(data.reportForm.rep);
        
        data.reportForm.rep={};
    
        $scope.reportForm.$setPristine();
        $scope.reportForm.$setUntouched();
      
    };


 

});
