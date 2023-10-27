<!DOCTYPE html>
<html>
    <head>
         <title>Morpion</title>
         <link rel="stylesheet" href="css.css" />
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
         <meta charset="UTF-8"/>
         <link rel="icon" href="morpion.png">
    </head>
  <body>
    <div class="back"><a href="index.php"><img id="retour" src="../back.png"></a></div>
    <div class="titre" > <!-- utiliser le container titre et ses attributs définis dans la feuille de style css3.css -->
      PortuGames<br>
    </div>

    <div class="menu"> <!-- utiliser le container menu et ses attributs définis dans la feuille de style css3.css -->
      <div>Jeux</div><br>
      <div align="center"><a href="../demineur\index.php">Démineur</a></div><br>
      <a href="../demineur\classique.php">Classique</a><br><br>
      <a href="../demineur\nucleaire.php">Nucléaire</a><br><br>
      <div align="center"><a href="index.php">Morpion</a></div><br>
      <a href="solo.php">Un Joueur</a><br><br>
      <a href="duel.php">Deux Joueurs</a><br><br>
      <div align="center"><a href="../breakout\index.php">Atari Breakout</a></div><br>
    </div>

      <div id="principal"><h1><img src="solo.png" width="60%" alt="Morpion" title=""></h1>
        <div id="jeu">
          
          <div style="margin: auto;width: 200px;position: relative;">
            <button id="1" onclick="clic(this)"></button>
            <button id="2" onclick="clic(this)"></button>
            <button id="3" onclick="clic(this)"></button>
        
            <button id="4" onclick="clic(this)"></button>
            <button id="5" onclick="clic(this)"></button>    <!-- les 9 boutons du morpion -->

            <button id="6" onclick="clic(this)"></button>
           
           
            <button id="7" onclick="clic(this)"></button>   
            <button id="8" onclick="clic(this)"></button>
            <button id="9" onclick="clic(this)"></button>
          </div>
              
           
           
           <div id="gameStatus"></div>
        </div>
      </div>

<script src="script.js"></script> 
    </body>
</html>
