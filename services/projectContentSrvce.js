/**
 * This service is to serve contents to the project details.
 * All the json objects will be hardcoded here.
 */

 
angular.module('pcontentService',[])
.service('pcontentService',function(){
	var proObject=[ {
		key : "invG",
		des : "Invoice generator and Employee Management"
	}, {
		key : "inRetlApp",
		des : "In-Retail Application"
	}, {
		key : "cPortl",
		des : "Customer Portal"
	}, {
		key : "Ssoft",
		des : "SilverSoft BPO Application"
	} ];
	
    
    this.getProjectDatas = function(){ 
		return proObject;
	};
});