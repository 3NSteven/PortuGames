<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>Démineur</title>	
		<?php
			if (stristr($_SERVER['HTTP_USER_AGENT'], "iPhone")  
			|| strpos($_SERVER['HTTP_USER_AGENT'], "iPod") 
			|| strpos($_SERVER['HTTP_USER_AGENT'], "Android") ) 
			{ 
			 $style = "css2";	// ici la CSS pour les Smartphones précités 
			// ou la redirection vers la page adaptée
			}
			else {
			 $style = "css3";	// CSS classique 
			}
		?>
		<link rel="stylesheet" href="..\<?php echo $style; ?>.css" type="text/css" media="screen" charset="utf-8" />	<!-- appelle le fichier css correspondant -->
		<link rel="icon" href="..\portugal.png">
	</head>
	<body>
		<div class="back"><a href="../index.php"><img id="retour" src="../back.png"></a></div>
		<div class="titre" > <!-- utiliser le container titre et ses attributs définis dans la feuille de style css3.css -->
			PortuGames<br>
		</div>

		<div class="menu"> <!-- utiliser le container menu et ses attributs définis dans la feuille de style css3.css -->
			<div>Jeux</div><br>
			<div align="center"><a href="index.php">Démineur</a></div><br>
			<a href="classique.php">Classique</a><br><br>
			<a href="nucleaire.php">Nucléaire</a><br><br>
			<div align="center"><a href="../morpion\index.php">Morpion</a></div><br>
			<a href="../morpion\solo.php">Un Joueur</a><br><br>
      		<a href="../morpion\duel.php">Deux Joueurs</a><br><br>
      		<div align="center"><a href="../breakout\index.php">Atari Breakout</a></div><br>
		</div>

	<div class="principal"><h1><img src="..\demineur.png" width="40%" alt="Démineur" title=""></h1><br>

			<a href="classique.php"><img src="classique.png" width="40%" alt="Classique" title="Partie Classique"></a><br><h2>Le démineur connu de tous.</h2><br>
			<a href="nucleaire.php"><img src="nucleaire.png" width="40%" alt="Nucléaire" title="Partie Nucléaire"></a><br><h2>Un démineur revisité avec l'ajout d'une barre de vie.</h2>
			- Un <img src="timer.png" style="width:2%;height:2%;"> chrono de 60 secondes s'écoule en boucle et retire <b>20%</b> de vie à chaque fois qu'il atteint zéro.
			- Les <img src="bomb.png" style="width:2%;height:2%;"> bombes font perdre <b>10%</b> de vie.
			- Les <img src="heart.png" style="width:2%;height:2%;"> coeurs font récupérer <b>30%</b> de vie.
			- Les <img src="nuke.png" style="width:2%;height:2%;"> bombes nucléaires laissent <b>5%</b> de la barre de vie, peu importe la vie qu'il vous reste.
			Le but de la partie est de marquer toutes les <img src="nuke.png" style="width:2%;height:2%;"> bombes nucléaires et les <img src="bomb.png" style="width:2%;height:2%;"> bombes restantes avec un <img src="drapeau.png" style="width:2%;height:2%;">drapeau, peu importe l'avancement de la grille.
			<img src="3.png" style="width:2%;height:2%;"> Un numéro coloré signifie que soit <b><u>uniquement</u></b> des <img src="heart.png" style="width:2%;height:2%;"> <b>coeurs</b>, soit <b><u>uniquement</u></b> des <img src="bomb.png" style="width:2%;height:2%;"> <b>bombes</b> sont à proximité.
			<img src="3n.png" style="width:2%;height:2%;"> Un numéro <b>radioactif</b>(<i>noir avec une aura verte</i>) signifie que soit une <img src="nuke.png" style="width:2%;height:2%;"> <b>bombe nucléaire</b> est à proximité, soit des <img src="bomb.png" style="width:2%;height:2%;"> <b>bombes <u>et</u> des <img src="heart.png" style="width:2%;height:2%;"> coeurs</b>, ou <b>les trois <u>en même temps</u></b>.
			Par exemple, un <img src="1n.png" style="width:2%;height:2%;"> radioactif signifie forcément qu'une  <img src="nuke.png" style="width:2%;height:2%;"> bombe nucléaire se trouve à côté.
			
			<a href="#.php" onclick="mute(this)">
			<img id="son" src="son.png" width="4%" alt="Son" title="Son">
			</a>

	</div>

		


<script>

		var x = 0;
		var v = 0;
		var muet = 0;	//configure le son comme activé par défaut
		
		if (sessionStorage.getItem("muet") != undefined)
		{
    		muet = sessionStorage.getItem("muet");
		}


		min = Math.ceil(1);   //décide du minimum
        max = Math.floor(4);  //décide du maximum
        random = Math.floor(Math.random() * (max - min +1)) + min;	//choisit un nombre aléatoire entre le minimum 1 et le maximum 4

        	if (random == 1)
        	{
        		var music = new Audio('11 HHavok-intro (Menu 1 Classique).ogg');	//attribue une musique pour "random = 1"
        	}
			else if (random == 2)
			{
        		var music = new Audio('01 A Night Of Dizzy Spells (Menu 2).ogg');	//attribue une musique pour "random = 2"
			}
			else if (random == 3)
			{
        		var music = new Audio('Solar Striker - Intro Screen (Menu 1).ogg');	//attribue une musique pour "random = 3"
			}
			else if (random == 4)
			{
        		var music = new Audio('Game Over - Asterix (Menu 2).ogg');	//attribue une musique pour "random = 4"
			}

				music.loop = true;	//active la répétition du son en question
				if (muet == 1)
				{
					music.volume = "0";	//met le volume sonore au minimum(inaudible)
				}
				else if (muet == 0)
				{
					music.volume = "1";	//configure le volume du son en question
				}
                music.play(); //joue le son "music"


    if (muet == 1)
		{
			x = document.getElementById('son');	//la variable x devient la balise ayant pour id="son" (la balise <img>)
			v = x.getAttribute("src");	//la variable v devient la balise "src" contenue dans la balise <img>
			v = "muet.png";	//change l'image du bouton du son
			x.setAttribute("src", v);	//modifie l'attribut "src" de la balise <img> (change l'image)
		}
    

function mute(element)
{
	
	x = element.getElementsByTagName("img").item(0);	//la variable x devient la balise <img> contenue dans le <a>
  	v = x.getAttribute("src");	//la variable v devient la balise "src" contenue dans la balise <img>


  	//teste si la page est déjà paramétrée comme muette ou non
	if (muet == 0)	//si le son est activé
	{
		v = "muet.png";	//change l'image du bouton du son
		music.volume = "0";	//met le volume sonore au minimum(inaudible)
		muet = 1;	//active la variable muet
		sessionStorage.setItem("muet","1");
	}
	else if (muet == 1)	//si le son est désactivé
	{
		v = "son.png";	//change l'image du bouton du son
		music.volume = "1";	//met du volume sonore
		muet = 0;	//désactive la variable muet
		sessionStorage.setItem("muet","0");
	}

	 x.setAttribute("src", v);	//modifie l'attribut "src" de la balise <img> (change l'image)
	 sessionStorage.setItem("x", "x"); //stocke la variable "x" de valeur "x" dans la session actuelle

}
</script>
	</body>
</html>
