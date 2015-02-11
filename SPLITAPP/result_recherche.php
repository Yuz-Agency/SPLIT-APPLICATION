<?php
	
	$connexion=mysql_connect('sqletud.univ-mlv.fr','llautric','5Evuakyu');
	mysql_select_db('llautric_db', $connexion);

	$requete = "SELECT * ".
				"FROM annonce";
				// "WHERE annonce.Ex_Categorie = categorie.IdCategorie".
				// "AND annonces.Ex_Mot_Cle = mot_cle.IdMot_Cle";

	$result = mysql_query($requete, $connexion);

	$array_user = array();

	while($data = mysql_fetch_assoc($result)){

	$array_user[] = $data;

	}

	echo json_encode($array_user);

?>
