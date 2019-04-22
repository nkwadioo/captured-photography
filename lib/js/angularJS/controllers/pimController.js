app.controller('pimController', function ($scope, ProgramTblService) {
        // body...
        var $scope = this;
        $scope.PIMS = [{"program": "Service Delivery","subProgram": "Level of maturity of ICT security","strategicObj": "Enhance efficiency of Government business",
                "performIndi": "performance against measured contracted SLA metric",
                "year1": "Enhance efficiency of Government business", "year2": "performance against measured contracted SLA metric",
                "year3": "yeaEnhance efficiency of Government businessh", "year4": "performance against measured contracted SLA metric", "year5": "Enhance efficiency of Government business"}];


        // lookup (list) Programs
        $scope.programsList = [
            {"id": 1, "name": "Service Delivery"},
            {"id": 2, "name": "Infrastructure"},
            {"id": 3, "name": "Procurement"},
            {"id": 4, "name": "Financial Stability"},
            {"id": 5, "name": "Organization, Government and Administration"}
        ];
       


        $scope.pimList = [
            {"id": 1, "programCat": "1", "name": "# of e-Government sevices deployed"},
            {"id": 2, "programCat": "1", "name": "Level of maturity of ICT security"},
            {"id": 3, "programCat": "1", "name": "Customer satisfaction level"},
            {"id": 4, "programCat": "1", "name": "% performance against measured contracted SLA metrics"},
            {"id": 5, "programCat": "2", "name": "% increase in government market share"},
            {"id": 6, "programCat": "2", "name": "# of Government private cloud services available"},
            {"id": 7, "programCat": "2", "name": "# of clients provided with disaster recovery services"},
            {"id": 9, "programCat": "2", "name": "# of SA Connect phase 1 sites connected at bandwidths of 10Mbps"},
            {"id": 10, "programCat": "3", "name": "% of tender awards completed within the targeted turnaround time"},
            {"id": 11, "programCat": "3", "name": "# % of ICT acquisition spend through SMME entities"},
            {"id": 12, "programCat": "3", "name": "Broad Based Black Economic Empowerment Recognition Level"},
            {"id": 13, "programCat": "4", "name": "Earning Before Interest and Tax"},
            {"id": 14, "programCat": "4", "name": "% of Net Collection Rate"},
            {"id": 15, "programCat": "4", "name": "Gross Margin"},
            {"id": 16, "programCat": "5", "name": "% of critical positions with minimum cover ratio of 1:2"},
            {"id": 17, "programCat": "5", "name": "New Organisational Design Implementation"},
            {"id": 18, "programCat": "5", "name": "Fraud Awareness and Prevention Strategies Roll Out"}   
    ];

        //addPIM function
        $scope.addPIM = function () {

            //add to the database first


            //then change for the view in the table
            // $scope.PIMForm.programs.program = $scope.programsList[$scope.PIMForm.programs.program].name;
            // $scope.PIMForm.programs.subProgram = $scope.pimList[$scope.PIMForm.programs.subProgram].name;

            $scope.PIMS.push($scope.PIMForm.programs);

            $scope.PIMForm.programs = {};

            // $scope.PIMForm.$setPristine();
            // $scope.PIMForm.$setUntouched();

        };

        // remove PIM function

        $scope.removeRow = function (index) {
            //Find the record using Index from Array.
            var name = $scope.PIMS[index].strategic_obj;

            //Remove the item from Array using Index.
            $scope.PIMS.splice(index, 1);

        };

        // update PIM function


        $scope.getUpdateRow = function (index) {
            $scope.EditForm = {}
            $scope.EditForm.edit = {};

            

            $scope.EditForm.edit = angular.copy($scope.PIMS[index]);
            // $scope.PIMForm.edit.program = $scope.programsList[index].name;
            // $scope.PIMForm.edit.subProgram = $scope.pimList[index].name;
            $scope.EditForm.edit.id = index;
        };

        $scope.update = function (index) {
            //add to the database first


            //then change for the view in the table
            // $scope.PIMForm.edit.program = $scope.programsList[$scope.PIMForm.programs.program].name;
            // $scope.PIMForm.edit.subProgram = $scope.pimList[$scope.PIMForm.programs.subProgram].name;
            $scope.PIMS[index] = $scope.EditForm.edit;

        };

        // VIEW PIM FUNCTION
        $scope.viewRow = function (index) {
            $scope.viewForm = {};
            $scope.viewForm.view = {};
            $scope.viewForm.view = $scope.PIMS[index];

        };

        // link TARGET FUNCTION
        var tempTargetPeriod = undefined;
        $scope.linkTarget = function (index){
            if($scope.formAddTarget){
                if($scope.formAddTarget.linking.reportPeriod){
                    tempTargetPeriod = $scope.formAddTarget.linking.reportPeriod;
                }else{
                    tempTargetPeriod = undefined;
                }
            } //to helf reset the form properly with out lossing the reporting period if set

            $scope.formAddTarget = {}
            $scope.formAddTarget.linking = {};

            $scope.formAddTarget.linking = angular.copy($scope.PIMS[index]);
            $scope.formAddTarget.linking.id = index;

            $scope.formAddTarget.linking.reportPeriod = tempTargetPeriod;

        }

        $scope.linkProgram = function (){
            console.log($scope.formAddTarget.linking);
            var linkToProgram = $scope.formAddTarget.linking.program.split(" ")[0];
            var data = {};
            data = $scope.formAddTarget.linking;
            ProgramTblService.setProgram(linkToProgram, data);
            var test2 = ProgramTblService.getPrograms(linkToProgram);
            var test = 0;
            //add target to programs list
        }


        
    });