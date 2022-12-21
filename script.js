$('.lesson').hover(
  
	function() {
	$(this).find('.text-contents').show()
	}	, 
  
	function(){
	$(this).find('.text-contents').hide()
	}
  
)
