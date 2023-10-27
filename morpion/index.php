<!DOCTYPE html>
<html>
    <head>
         <title>Morpion</title>
         <link rel="stylesheet" href="css.css" /> <!-- interface de la page -->
         <?php
          if (stristr($_SERVER['HTTP_USER_AGENT'], "iPhone")  
          || strpos($_SERVER['HTTP_USER_AGENT'], "iPod") 
          || strpos($_SERVER['HTTP_USER_AGENT'], "Android") ) 
          { 
           $style = "css2"; // ici la CSS pour les Smartphones précités 
          // ou la redirection vers la page adaptée
          }
          else {
           $style = "css3"; // CSS classique 
          }
        ?>
        <link rel="stylesheet" href="..\<?php echo $style; ?>.css" type="text/css" media="screen" charset="utf-8" /> <!-- appelle le fichier css correspondant -->
         <meta charset="UTF-8"/> <!-- encodage français/latin  -->
         <link rel="icon" href="morpion.png"> <!-- image de l'onglet -->
    </head>
  <body>
    <div class="back"><a href="../index.php"><img id="retour" src="../back.png"></a></div>
    <div class="titre" > <!-- utiliser le container titre et ses attributs définis dans la feuille de style css3.css -->
      PortuGames<br>
    </div>

    <div class="menu"> <!-- utiliser le container menu et ses attributs définis dans la feuille de style css3.css -->
      <div>Jeux</div><br>
      <div align="center"><a href="../demineur\index.php">Démineur</a></div><br>
      <a href="../demineur\classique.php">Classique</a><br><br>       <!-- Sommaire -->
      <a href="../demineur\nucleaire.php">Nucléaire</a><br><br>
      <div align="center"><a href="index.php">Morpion</a></div><br>
      <a href="solo.php">Un Joueur</a><br><br>
      <a href="duel.php">Deux Joueurs</a><br><br>
      <div align="center"><a href="../breakout\index.php">Atari Breakout</a></div><br>
    </div>

      <div id="principal"><h1><img src="..\m0rpi0n.png" width="60%" alt="Morpion" title=""></h1><br><br>
        <a href="solo.php"><img src="menusolo.png" width="40%" alt="Solo" title="Un Joueur"></a><br><h2>Jouez contre l'ordinateur.</h2><br>  <!-- bouton image vers le mode solo -->
        <a href="duel.php"><img src="menuduel.png" width="40%" alt="Duel" title="Deux Joueurs"></a><br><h2>Jouez avec un ami.</h2> <!-- bouton image vers le mode multi -->
      </div>

<script src="script.js"></script>
    </body>
</html>
