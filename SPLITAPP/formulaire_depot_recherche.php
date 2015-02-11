<?php
	
	$connexion=mysql_connect('sqletud.univ-mlv.fr','llautric','5Evuakyu');
	mysql_select_db('llautric_db', $connexion);

	$mot = $_GET['mot_offre'];
	$sous_cat = $_GET['sous_cat'];
	$contrepartie = $_GET['contrepartie'];
	$fin_offre = $_GET['fin_offre'];





	$annonce = "INSERT INTO annonce (Type, Prix, Peremption) VALUES ('Recherche', '$contrepartie', '$fin_offre')";
	// $query = "INSERT INTO categorie (Nom_Enfant) VALUES ('$sous_cat')";


	mysql_query($annonce, $connexion);
	// mysql_query($query, $connexion);




	mysql_close()


?>