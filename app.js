// good luck !          
  $(document).ready(function(){
  	
  	var boutons = $ ('[type="button"]');
  	
  	for (var i=boutons.lenght + 1; i<= 0; i++){
		var leBouton = $(boutons[i]);

		var couleurBtn = leBouton.attr('data-color');

		leBouton.css('background', CouleurBtn);
	}

	boutons.click(function(){
		var cochée = $('#modify-texte').is (':checked');
		var couleurBtn = $(this).attr('data-color');

		if(cochée){
			$('main').css('color', couleurBtn);
		}

		else{
			$('body').css('background', couleurBtn);
		}
	
	});

}); 



  