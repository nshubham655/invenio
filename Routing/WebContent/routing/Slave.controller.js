sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],
		function(Controller, History, JSONModel){
sap.ui.controller("routing.Slave", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf routing.Slave
*/
onInit: function() {

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf routing.Slave
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf routing.Slave
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf routing.Slave
*/
//	onExit: function() {
//
//	}
	
	 onBack: function()
	  {
	  var oHistory = History.getInstance();
	  var sPreviousHash = oHistory.getPreviousHash();
	  if (sPreviousHash !== undefined) {
	  window.history.go(-1);
	  } else {
	  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	  oRouter.navTo("overview", true);
	  }
	  }
});

});