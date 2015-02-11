<?php
	
	$connexion=mysql_connect('sqletud.univ-mlv.fr','llautric','5Evuakyu');
	mysql_select_db('llautric_db', $connexion);

	$nom = $_GET['nom'];
	$prenom = $_GET['prenom'];
	$pseudo = $_GET['pseudo'];
	$mdp = $_GET['mdp'];
	$mail = $_GET['mail'];
	$date_naissance = $_GET['date_naissance'];
	$sexe = $_GET['sexe'];
	// $campus = $_POST['campus'];

	$query ="SELECT Pseudo FROM utilisateur WHERE Pseudo='".$pseudo."'";

	$pseudo_exist=mysql_query($query);

	if(mysql_num_rows($pseudo_exist)>0) 
{ 


		echo ('1'); 
} 
else 
{ 

	$requete = "INSERT INTO utilisateur (Pseudo, Nom, Prenom, Mail, Date_de_naissance, Sexe, Mdp) VALUES ('$pseudo', '$nom', '$prenom', '$mail', '$date_naissance', '$sexe', '$mdp')";
	mysql_query($requete, $connexion);

	echo ('0');
}

mysql_close()


?>