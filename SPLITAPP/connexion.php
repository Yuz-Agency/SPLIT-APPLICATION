<?php

// connexion avec la base de données
$connexion=mysql_connect('sqletud.univ-mlv.fr','llautric','5Evuakyu');
mysql_select_db('llautric_db', $connexion);

$pseudo = $_POST['pseudo'];
$mdp = $_POST['mdp'];
 
// on exécute maintenant la requete sql pour tester si les parametres de connexion sont ok
$result = mysql_query("SELECT * FROM utilisateur WHERE Pseudo = '".$pseudo."' AND Mdp = '".$mdp."'");
// $membre = mysql_fetch_assoc($result);

 $num_row = mysql_num_rows($result);
 // $row=mysql_fetch_assoc($result);
 
if( $num_row >= 1 )
{
	// setcookie("id",$membre[id]); // genere un cookie contenant l'id du membre
	// setcookie("login",$membre[login]); // genere un cookie contenant le login du membre		
	echo ('1'); 
}
else 
{
	echo ('0'); 

}

mysql_close()

?>