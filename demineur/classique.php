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
			$tel = 1;
			}
			else {
			 $style = "css3";	// CSS classique 
			 $tel = 0;
			}
		?>
		<link rel="stylesheet" href="..\<?php echo $style; ?>.css" type="text/css" media="screen" charset="utf-8" />	<!-- appelle le fichier css correspondant -->
		<input type=hidden id="tel" value="<?php echo $tel; ?>">
		<link rel="icon" href="bomb.png">
	</head>
	<body>
		<div class="back"><a href="index.php"><img id="retour" src="../back.png"></a></div>
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

	<div class="principal"><img id="ecran" src="" width="60%" class="endgame"><h1><img src="classique.png" width="60%" alt="Classique" title=""></h1><div id="wrapper" style="width: 520px;height: 485px;z-index: -1;left: 3vw; margin-top: 100px;"></div><br><br><div id="bouton"></div><div id="compteur"></div><div id="drapeau"></div>
			<a href="#.php" onclick="mute(this)">
			<img id="son" src="son.png" width="4%" alt="Son" title="Son">
			</a>
	</div>

	<form method="POST" action="classique.php" id="GereScore">
		<input type="hidden" name="score" value="0" />
	</form>
			
		
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
        random = Math.floor(Math.random() * (max - min +1)) + min;	//choisit un nombre aléatoire entre le minimum 1 et le maximum 3

    	if (random == 1)
    	{
    		var music = new Audio('04 All of Us (Classique 1).ogg');	//attribue une musique pour "random = 1"
    	}
		else if (random == 2)
		{
    		var music = new Audio('Solar Striker - Stage 4 (Classique 1).ogg');	//attribue une musique pour "random = 2"
		}
		else if (random == 3)
		{
    		var music = new Audio('Metroid - Kraids Lair (Classique 2).ogg');	//attribue une musique pour "random = 3"
		}
		else if (random == 4)
		{
			var music = new Audio('11 HHavok-intro (Menu 1 Classique).ogg');	//attribue une musique pour "random = 4"
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
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script src="script.js"></script>
	</body>
</html>
