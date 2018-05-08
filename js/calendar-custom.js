$(document).ready(function() {
	$(".text-info").hide()
	$('.calendarUI').datepicker({
	    minDate:"-100y",
	    maxDate:"400y",
	    inline: true,
	    altField: '.startDate'		
	});

	$('.startDate').change(function(){
		//console.log("work startDate??")
	    $('.calendarUI').datepicker('setDate', $(this).val());
	});

	$('.numberOfDays').change(function(){
		var rk_c =$(this).val();
		var prueba =$(".calendarUI").datepicker('option', 'maxDate', rk_c ); 
		//console.log("change input --c--" + rk_c);
		//console.log(prueba);
	    $(".calendarUI").datepicker('option', 'maxDate', rk_c );
	    $(".calendarUI").datepicker('option', 'minDate', 0 );
	    var value_MaxDate =$('.calendarUI').datepicker("option", "maxDate");
	    $('.rk_MaxDate').html(value_MaxDate, function(){
	    	//console.log("change value??")
	    });
	    $(this).val('');
		$(".text-info").show(950);

	});	
});
