<?php

	if(isset($_POST['go'])) {

		$json = array();
	
	$connexion=mysql_connect('sqletud.univ-mlv.fr','llautric','5Evuakyu');
	mysql_select_db('llautric_db', $connexion);


	$requete1 = "SELECT * ".
				"FROM campus ";

	$result = mysql_query($requete1, $connexion);

	while($donnees=mysql_fetch_assoc($result)){
		$json[$donnees["IdCampus"]][] = utf8_encode($donnees["Nom"]);
	}

	echo echo($json);

}

?>
