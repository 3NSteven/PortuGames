//initialisation des variables
var carreau = 0;
var nbtour = 0;
var choix = 0;
var fin = 0;
//choisit au hasard qui joue le premier tour puis l'affiche dans la div gameStatus pour savoir quel joueur commence
var tour = Math.floor(Math.random() * Math.floor(2));	//choisit un nombre au hasard de 0 à 1 et l'enregistre dans la variable initour
tour = tour+1;	//ajoute 1 à la variable tour pour qu'elle affiche le bon numéro de joueur (1 ou 2) au lieu de ceux générés par la commande ci-dessus (0 ou 1)
document.getElementById("gameStatus").innerHTML = "Au tour du joueur "+tour+".";	//affiche le contenu entre guillemets à l'intérieur de l'élément à l'id="gameStatus"

//chaque case possède un élément dans le tableau égal à 0 tant qu'elle n'est pas utilisée, à 1 si elle est cochée par le joueur 1 et à 2 si elle est entourée par le joueur 2
var tableau = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//la fonction se lançant lors d'un clic sur un bouton
function clic(element)
{
	carreau = element.id;  //la variable carreau prend l'id du bouton cliqué
  	document.getElementById("gameStatus").innerHTML = "Cette case est déjà prise !";	//affiche le contenu entre guillemets à l'intérieur de l'élément à l'id="gameStatus"

  	if (tour == 1)	//tour du joueur 1
  	{
  		if (tableau[carreau-1] == 0)	//si la case cliquée est encore vide
	  	{
			tableau[carreau-1] = 1;	//remplace l'élément correspondant à la case cliquée dans le tableau par un 1
			document.getElementById(""+carreau+"").innerHTML = "<img style='width: 100%;height: 100%;'' src='x.png'>";	//place une balise <img> dans la balise bouton cliquée

			tour = 2;	//tour du joueur 1 terminé
			document.getElementById("gameStatus").innerHTML = "Au tour du joueur 2.";	//affiche le contenu entre guillemets à l'intérieur de l'élément à l'id="gameStatus"
			// Lance  fonction qui verifie les victoires
			Verification();
			
	  	}
  	}
  	
  	if (tour == 2)	//tour du joueur 2
  	{
  		if (tableau[carreau-1] == 0)	//si la case cliquée est encore vide
	  	{
			tableau[carreau-1] = 2;	//remplace l'élément correspondant à la case cliquée dans le tableau par un 2
			document.getElementById(""+carreau+"").innerHTML = "<img style='width: 100%;height: 100%;'' src='o.png'>";	//place une balise <img> dans la balise bouton cliquée

			tour = 1;	//tour du joueur 2 terminé
			document.getElementById("gameStatus").innerHTML = "Au tour du joueur 1.";	//affiche le contenu entre guillemets à l'intérieur de l'élément à l'id="gameStatus"
			// Lance  fonction qui verifie les victoires
			Verification();
			
	  	}
  	}
  	
  	setTimeout("document.getElementById('gameStatus').innerHTML = 'Au tour du joueur '+tour+'.'", 1500);   //attend 1,5 seconde puis affiche le contenu entre guillemets à l'intérieur de l'élément à l'id="gameStatus"
}

//vérifie la victoire
 function Verification()
 {
  	//pour l'horizontale du haut
	if ((tableau[0] == 1) && (tableau[1] == 1) && (tableau[2] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[1] == 2) && (tableau[2] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour l'horizontale du milieu
	if ((tableau[3] == 1) && (tableau[4] == 1) && (tableau[5] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[3] == 2) && (tableau[4] == 2) && (tableau[5] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour l'horizontale du bas
	if ((tableau[6] == 1) && (tableau[7] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[6] == 2) && (tableau[7] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale de gauche
	if ((tableau[0] == 1) && (tableau[3] == 1) && (tableau[6] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[3] == 2) && (tableau[6] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale du milieu
	if ((tableau[1] == 1) && (tableau[4] == 1) && (tableau[7] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[1] == 2) && (tableau[4] == 2) && (tableau[7] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale 2de droite
	if ((tableau[2] == 1) && (tableau[5] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[2] == 2) && (tableau[5] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour la diagonale partant d'en haut à gauche
	if ((tableau[0] == 1) && (tableau[4] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[4] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//pour la diagonale partant d'en bas
	if ((tableau[6] == 1) && (tableau[4] == 1) && (tableau[2] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 1 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 1 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[6] == 2) && (tableau[4] == 2) && (tableau[2] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
  		alert('\t\tLe joueur 2 a gagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur 2 qu'il a gagné la partie
		window.location.href="duel.php";  //actualise la page pour relancer une partie
  	}

	//match nul
	if (fin == 0)
	{
		if (tableau[0] != 0)
		{
			if (tableau[1] != 0)
			{
				if (tableau[2] != 0)
				{
					if (tableau[3] != 0)
					{
						if (tableau[4] != 0)
						{
							if (tableau[5] != 0)
							{
								if (tableau[6] != 0)
								{
									if (tableau[7] != 0)
									{
										if (tableau[8] != 0)
										{
											fin = 1;	//empêche le match nul de se relancer
											document.getElementById("gameStatus").innerHTML = "";	//vide le contenu texte à l'intérieur de la div à l'id="gameStatus"
											alert('\t\t\tMatch nul !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant qu'aucun des joueurs n'a gagné
											window.location.href="duel.php";  //actualise la page pour relancer une partie
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
 }