
$ (document).ready(function(){
		$( "#dialog" ).dialog({
		     autoOpen: false,
		      show: {
		        effect: "blind",
		        duration: 1000
		      },
		      hide: {
		        effect: "explode",
		        duration: 1000
		      },

		      modal: true,
		      buttons: {
		        "Create an account":function(){
		        	alert('Test đăng nhập');
		        },
		        Cancel: function() {
		          alert('Hủy đăng nhập');
		        }
		      }
		    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  });