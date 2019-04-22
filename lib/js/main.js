$(function(){

	$('.registorForm .input-group input').each(function(){
		// alert("in");
		var text_val = $(this).val();
		if(text_val === ""){
			$(this).removeClass('has-value');
		}else{
			$(this).addClass('has-value');

		}

	});
	

	$('.registorForm .input-group input').focusout(function(){
		var text_val = $(this).val();
		if(text_val === ""){
			$(this).removeClass('has-value');
			$(this).addClass('is-empty');
		}else{
			$(this).addClass('has-value');
			$(this).removeClass('is-empty');
		
		}
	});



});