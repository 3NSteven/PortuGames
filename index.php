<!DOCTYPE html>
<html>

<head>
		<meta charset="utf-8" />
		<title>PortuGames</title>
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
		<link rel="stylesheet" href="<?php echo $style; ?>.css" type="text/css" media="screen" charset="utf-8" />	<!-- appelle le fichier css correspondant -->
		<link rel="icon" href="portugal.png">
</head>

<body>

	<div class="titre" > <!-- utiliser le container titre et ses attributs définis dans la feuille de style ccs3.css -->
			PortuGames<br>
	</div>

	<div style="position: fixed; top: 16px; left: 32px; font-size: 18px; opacity: 0.33; float: left;"><a href="../"><img src="../back.jpg"></a></div>

	<div class="menu"> <!-- utiliser le container menu et ses attributs définis dans la feuille de style css3.css -->
			<div>Jeux</div><br>
			<div align="center"><a href="demineur\index.php">Démineur</a></div><br>
			<a href="demineur\classique.php">Classique</a><br><br>
			<a href="demineur\nucleaire.php">Nucléaire</a><br><br>
			<div align="center"><a href="morpion\index.php">Morpion</a></div><br>
			<a href="morpion\solo.php">Un Joueur</a><br><br>
      		<a href="morpion\duel.php">Deux Joueurs</a><br><br>
      		<div align="center"><a href="breakout\index.php">Atari Breakout</a></div><br>
	</div>

	<div class="principal"> <!-- utiliser le container principal et ses attributs définis dans la feuille de style css3.css -->
			<h1>Jeux</h1>
	</div>

	<div class="principal"><br> <!-- utiliser de nouveau le container principal et ses attributs définis dans la feuille de style css3.css -->
			<a href="demineur\index.php">
			<img src="demineur.png" width="50%" alt="Démineur" title="Démineur">
			</a>
			<br>
			<a href="morpion\index.php">
			<img src="m0rpi0n.png" width="50%" alt="Morpion" title="Morpion">
			</a>
			<br>
			<a href="breakout\index.php">
			<img src="breakout.png" width="50%" alt="Atari Breakout" title="Atari Breakout">
			</a>	
	</div>
