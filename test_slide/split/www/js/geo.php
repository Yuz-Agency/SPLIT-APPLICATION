<?php

	//Insertion
	//Donné dans BDD 
	//conection a BDD
	//recupere donné en post
	// envoyer donné a ma bdd
	
	//se connecter a la bdd
	$connexion=mysql_connect('sqletud.univ-mlv.fr','tpierr04','pierret1');
	mysql_select_db('tpierr_db', $connexion);

	$lati = $_POST['latitude'];
	$long = $_POST['longitude'];
	
	$inser =  "INSERT INTO coordonnees(latitude, longitude) VALUES ('"$lati"','"$long"')";
	mysql_query($inser, $connexion);



	//REcupération
	//connectio a la bdd
	//recupéreer les donnée
	//puis encoder tout ca en json
?>




