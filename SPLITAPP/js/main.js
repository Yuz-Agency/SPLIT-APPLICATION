$(document).ready(function() {

	/*TOUTE LES PAGE DE DEMARAGE*/

$('body').on('click', '.Page1 .connecte', function(e){
		e.preventDefault();

		$('.Page1').hide();
		$('.connexion').show();
			

	});

$('body').on('click', '.connexion .inscription', function(e){
		e.preventDefault();

		$('.connexion').hide();
		$('.page_inscription').show();
			

	});

$('body').on('click', '.connexion .mdpp', function(e){
		e.preventDefault();

		$('.connexion').hide();
		$('.mdp_perdu').show();
			

	});

$('body').on('click', '.mdp_perdu .envoie', function(e){
		e.preventDefault();

		$('.mdp_perdu').hide();
		$('.confirm_mdp').show();
			

	});

$('body').on('click', '.confirm_mdp .retour', function(e){
		e.preventDefault();

		$('.confirm_mdp').hide();
		$('.connexion').show();
			

	});

// $('body').on('click', '.page_inscription .inscription1', function(e){
// 		e.preventDefault();

// 		$('.page_inscription').hide();
// 		$('.connexion').show();
			

// 	});



	/*Rechercher offre*/

	$('body').on('click', '#main .type_recherche img', function(e){
		e.preventDefault();


		$('.choix_nourriture, .choix_boisson, .choix_autre').hide();
		$('.choix_nourriture1, .choix_boisson1, .choix_autre1').hide();
		$('.choix').show();
		$('.choix1').show();
			

	});

	$('body').on('click', '#main .choix .categorie:nth-child(1)', function(e){
		e.preventDefault();

		$('.choix').hide();
		$('.choix_nourriture').show();
			

	});

	$('body').on('click', '#main .choix .categorie:nth-child(2)', function(e){
		e.preventDefault();

		$('.choix').hide();
		$('.choix_boisson').show();
			

	});

	$('body').on('click', '#main .choix .categorie:nth-child(3)', function(e){
		e.preventDefault();

		$('.choix').hide();
		$('.choix_autre').show();
			

	});

	/*Déposer offre*/

	$('body').on('click', '#main .choix1 .categorie1:nth-child(1)', function(e){
		e.preventDefault();

		$('.choix1').hide();
		$('.choix_nourriture').show();
			

	});



	$('body').on('click', '#main .choix1 .categorie1:nth-child(2)', function(e){
		e.preventDefault();

		$('.choix1').hide();
		$('.choix_boisson').show();
			

	});

	$('body').on('click', '#main .choix1 .categorie1:nth-child(3)', function(e){
		e.preventDefault();

		$('.choix1').hide();
		$('.choix_autre').show();
			

	});

	/*Lorsque la catégorie est selectionné*/
	/*Page déposé offre*/

// 	$('body').on('click', '#main .choix_nourriture1 a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_nourriture1 a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});

// 	$('body').on('click', '#main .choix_boisson1 a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_boisson1 a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});

// 	$('body').on('click', '#main .choix_autre1 a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_autre1 a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});


// Page rechercher Offre

// $('body').on('click', '#main .choix_nourriture a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_nourriture a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});

// 	$('body').on('click', '#main .choix_boisson a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_boisson a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});

// 	$('body').on('click', '#main .choix_autre a', function(e){
// 		e.preventDefault();


// 		$('#main .choix_autre a.selection').removeClass('selection');
// 		$(this).addClass('selection');

			

// 	});

	/*Page Inscription , choix sexe*/

	// $('body').on('click', '.page_inscription sexe', function(e){
	// 	e.preventDefault();


	// 	$('.page_inscription .selection').removeClass('selection');
	// 	$(this).addClass('selection');

			

	// });

/*-------APPEL AJAX POUR INSCRIPTION---------*/

$('#formulaire').submit(function(e){
	e.preventDefault();

	var prenom = $(this).find("#prenom").val();
	var nom = $(this).find("#nom").val();
	var pseudo = $(this).find("#pseudo").val();
	var mail = $(this).find("#mail").val();
	var date_naissance = $(this).find("#date_naissance").val();
	var sexe = $('input:radio:checked').val();
	var mdp = $(this).find('#mdp').val();
	var mdp1 = $(this).find('#mdp1').val();

	//Mot de passe dans la BDD ?

	var dataString = 'prenom='+ prenom +'&nom='+ nom +'&pseudo='+ pseudo +'&mail='+ mail +'&date_naissance='+ date_naissance +'&sexe='+ sexe +'&mdp='+ mdp;

	// var $erreur = $(this).find(input == '');

if (prenom == '' || nom == '' || pseudo == '' || mail == '' || date_naissance == '' || sexe == '' || mdp == '') {

	alert('Tout les champs ne sont pas remplis !');

	// $erreur.addClass('erreur');

} else if(pseudo.length<3 ) {

	alert('Le pseudo doit comporter au moins 4 caractères !')

} else if (mdp === mdp1 ){

	$.ajax({
		type: 'GET',
        url: 'https://perso-etudiant.univ-mlv.fr/~llautric/formulaire.php',
        // dataType: 'html',
        data: dataString,
        error: function() {
          alert('API server error');
        },
        success: function(data) {

          if(data==1) 
			{ 
			alert("Un compte avec le même pseudo existe déja"); 
			} 
			else 
			{ 
			alert("Inscription ok");
			} 

        } 
      });

	} 

	else {
		alert('Les deux mots de passe doivent être identiques !')
	}


  });

	/*Formulaire de connexion*/

	$('#connex').submit( function(e) {
	e.preventDefault();	
	

	var pseudo = $(this).find("#login").val();
	var mdp = $(this).find('#pass').val();
	var donnees = 'pseudo='+ pseudo +'&mdp='+ mdp;

	if (pseudo=='' || mdp=='' ) {

		alert('Le pseudonyme et le mot de passe doivent être remplis !')

	}

	else {


		$.ajax({ 
		   type: "POST", 
		   url: "https://perso-etudiant.univ-mlv.fr/~llautric/connexion.php",
		   data: donnees,
		    error: function() {
          	alert('API server error');
        		},
		   success: function(msg){ 
				if(msg==1)
				{
					// $('#ecran').hide().load('page2.html', function() {
					// $(this).fadeIn(1000);
					// });
					
				}
				else 
				{
					alert("L'identifiant ou le mot de passe est incorrect !");
					
				}
		   }
		});

		}

	});



	// $('.paperasse').click(function(e){
	// 	e.preventDefault();

	// 	var mot_offre = $("#mot_offre").val();

	// 	info = 'mot_offre='+ mot_offre ;

	// 	$.ajax({ 
	// 	   type: "POST",
	// 	   dataType: 'json', 
	// 	   url: 'https://perso-etudiant.univ-mlv.fr/~llautric/annonces.json',
	// 	   data: info,
	// 	    error: function() {
 //          	alert('API server error');
 //        		},
	// 	   success: function(){ 
				


	// 	   }
	// 	});
	// });






	/*-------------DEPOT D'UNE OFFRE---------------*/

	$('#depot').submit(function(e){
	e.preventDefault();

	var mot = $(this).find("#mot_offre").val();
	var sous_cat = $(this).find('input:radio:checked').val();
	var contrepartie = $(this).find("#contrepartie").val();
	var fin_offre = $(this).find("#fin_offre").val();
	


	var string = 'mot_offre='+ mot +'&sous_cat='+ sous_cat +'&contrepartie='+ contrepartie +'&fin_offre='+ fin_offre;

	// var $erreur = $(this).find(input == '');

	if (mot == '' || sous_cat == '' || contrepartie == '' || fin_offre == '') {

			alert('Tous les champs doivent être remplis');
	} else {

	$.ajax({
		type: 'GET',
        url: 'https://perso-etudiant.univ-mlv.fr/~llautric/formulaire_depot.php',
        dataType: 'html',
        data: string,
        error: function() {
          alert('API server error');
        },
        success: function() {

        	alert('Ok');

          } 



      });

	}

  });



	/*-------------DEPOT D'UNE RECHERCHE---------------*/

	$('#depot_recherche').submit(function(e){
	e.preventDefault();

	var mot = $(this).find("#mot_offre").val();
	var sous_cat = $(this).find('input:radio:checked').val();
	var contrepartie = $(this).find("#contrepartie").val();
	var fin_offre = $(this).find("#fin_offre").val();
	


	var string = 'mot_offre='+ mot +'&sous_cat='+ sous_cat +'&contrepartie='+ contrepartie +'&fin_offre='+ fin_offre;

	// var $erreur = $(this).find(input == '');


	if (mot == '' || sous_cat == '' || contrepartie == '' || fin_offre == '') {

			alert('Tous les champs doivent être remplis');
	} else {

	$.ajax({
		type: 'GET',
        url: 'https://perso-etudiant.univ-mlv.fr/~llautric/formulaire_depot_recherche.php',
        dataType: 'html',
        data: string,
        error: function() {
          alert('API server error');
        },
        success: function() {

        	alert('Ok');

          } 



      });

	}




	

  });
		


$.ajax({
		type: 'POST',
        url: 'https://perso-etudiant.univ-mlv.fr/~llautric/result_recherche.php',
        dataType: 'json',
        error: function() {

          alert('API server error');
        },
        success: function(Things) {

        	

        	for (var i = 0; i < Things.length; i++){
        		var data = Things[i];
        	

        		 var html = '<li><div class="logo"><img src="img/cocktail.png" width="30"></div><div class="caracteristique1"><span id="motcle">1Pain</span><br>à <span id="distance">1 km</span> par <span id="nom">Sandra V</span></div> <div class="prix_produit"><span id="prix_produit">'+data.Prix+'</span></div></li>';

        			$('#result').append(html);

        	}

        	

          } 



      });





	
});








