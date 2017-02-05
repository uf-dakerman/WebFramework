/* global app - user interface */
app.ui = {
	
  // Custom handling of dismissible alert - hide instead of removing
  addAlertDismissHandler: function() {
	$("[data-close]").on("click", function(e){
		e.preventDefault();
		var d = $(this).closest("." + $(this).attr("data-close"));
		d.removeClass("alert-danger");
		d.removeClass("alert-warning");
		d.removeClass("alert-success");
		d.removeClass("alert-info");
		d.parent().hide();
		uniface.getInstance(app.mainPage).activate("clearMessage");
   	});
  },

  // Add suitable class to Alert message
  initialize: function() {
	  app.ui.addAlertDismissHandler();
  },
  
  formatAlert: function(msgType) {
	var e = $('.alert');
	switch(msgType) {
		case 'E': 
			e.removeClass('alert-info');
			e.removeClass('alert-warning');
			e.removeClass('alert-success');
			e.addClass("alert-danger");
			break;
		case 'I':
			e.removeClass('alert-danger');
			e.removeClass('alert-warning');
			e.removeClass('alert-success');
			e.addClass("alert-info");
			break;
		case 'W':
			e.removeClass('alert-danger');
			e.removeClass('alert-info');
			e.removeClass('alert-success');
			e.addClass("alert-warning");
			break;
		case 'S':
			e.removeClass('alert-danger');
			e.removeClass('alert-warning');
			e.removeClass('alert-info');
			e.addClass("alert-success");
			break;
	}
  },
    
  showError : function(msg) {
      console.error(msg);
	  uniface.getInstance(app.mainPage).activate("showError", msg);
  },
  
  modalHide: function() {
  		$('#myModal').modal('hide');
  },
  
  modalShow: function() {
  	$('#myModal').modal('show');
  }
  
};
