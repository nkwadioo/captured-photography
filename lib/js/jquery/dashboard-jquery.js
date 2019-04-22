$(function(){
	$(document).on('click', '#dashboard .cards', function(evt){
		$this = $(this);
		var text = $this.find(".small-box a").text().trim();
		if(text === 'New Proposal'){
			$(location).attr('href', "/Proposal");
		}else if(text === 'See Drafts'){
			$(location).attr('href', "/Draft");
		}else if(text === 'Edit / Add template'){
			$(location).attr('href', "/template");
		}else if(text === 'Sent Proposals'){
			$(location).attr('href', "/Sent");
		}else{
			$(location).attr('href', "/");
		}
	});

	// $('.date').datetimepicker();

	// used to create an interface where you can insert an image to the page
	var myHtml = '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal"><i class="fa fa-picture-o"></i></button>';
	myHtml += '<button type="button" class="btn btn-default" data-toggle="modal"  data-target="#addTable"><i class="icon-table"></i></button>'
	$('.ta-toolbar.btn-toolbar .btn-group').last()
	.html(myHtml);


	// TO PREVIEW THE LOADED Image
	$(document).on('change', '#tempImage', function(evt){
		var input = this;
		if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#blah').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
		var test = 0;
	});

	// $("#imgInp").change(function(){
	//     readURL(this);
	// });

	// $(document).on('click', "#savedraft", function(e){
	// 	//set the form to save a Draft
	// 	$('#proposalDitalsForm').removeAttr('action');
	// 	$('#proposalDitalsForm input').removeAttr('required');
	// 	$('#proposalDitalsForm textarea').removeAttr('required');
	// 	$('#proposalDitalsForm').attr('action', 'proposal/draft');
	// 	$('#submitProposal').click();
	// })
});
