//initialisation des variables
var carreau = 0;
var tour = 1;
var nbtour = 0;
var choix = 0;
var fin = 0;
var chance = 0;

//chaque case possède un élément dans le tableau égal à 0 tant qu'elle n'est pas utilisée, à 1 si elle est cochée par le joueur et à 2 si elle est entourée par l'ordinateur
var tableau = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//la fonction se lançant lors d'un clic sur un bouton
function clic(element)
{
	carreau = element.id;  //la variable carreau prend l'id du bouton cliqué
  	document.getElementById("gameStatus").innerHTML = ""+carreau+"";	//affiche à l'intérieur de l'élément à l'id="gameStatus" la variable carreau

  	if (tour == 1)
  	{
  		if (tableau[carreau-1] == 0)	//si la case cliquée est encore vide
	  	{
			tableau[carreau-1] = 1;	//remplace l'élément correspondant à la case cliquée dans le tableau par un 1
			document.getElementById(""+carreau+"").innerHTML = "<img style='width: 100%;height: 100%;' src='x.png'>";	//place une balise <img> dans la balise bouton cliquée

			tour = 2;	//tour du joueur terminé

			nbtour++;
			// Lance  fonction qui verifie les victoires
			Verification();

			console.log(choix);
			console.log(tableau);
	  	}
  	}
}

//fonction de l'intelligence artificielle
function Bot()
{
	if (fin != 1)
	{
		/*
		//au tour le l'ordinateur
		choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
		choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
		while (tableau[choix-1] != 0)	//tant que l'élément du tableau choisi par le hasard n'est pas égal à 0, c'est à dire tant que la case choisie n'est pas libre
		{
			choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
			choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
		}
		tableau[choix-1] = 2;	//remplace l'élément correspondant à la case choisie par le hasard dans le tableau par un 2
		document.getElementById(""+choix+"").innerHTML = "<img style='width: 100%;height: 100%;'' src='o.png'>";	//place une balise <img> dans la balise bouton choisi par le hasard
		*/

		//TOUR N°1
		if (nbtour == 1)
		{
			if ((tableau[0] == 1) || (tableau[2] == 1) || (tableau[6] == 1) || (tableau[8] == 1)) // SI le joueur à joué dans un coin
			{
				choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
				choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
				while ((choix == carreau) || (choix == 1) || (choix == 3) || (choix == 7) || (choix == 9))		//tant que l'aléatoire prend la case prise par le joueur ou un coin
				{
					choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
					choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
				}
			}
			else	//SI le joueur n'a pas joué dans un coin
			{
				//choisit une case totalement aléatoirement
				choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
				choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
			}
			tableau[choix-1] = 2;	//remplace l'élément correspondant à la case choisie par le hasard dans le tableau par un 2
			document.getElementById(""+choix+"").innerHTML = "<img style='width: 100%;height: 100%;' src='o.png'>";	//place une balise <img> dans la balise bouton choisi par le hasard
		}

		//TOUR N°2
		if (nbtour == 2)
		{
			chance = Math.floor(Math.random() * Math.floor(100));	//choisit un nombre au hasard de 0 à 100 pour configurer la marge d'étourdissement de l'IA
			if (chance <= 80)	//si l'IA est CONSCIENTE
			{
				//vérifie si besoin de DEFENSE										//pour les HORIZONTALES
				if ((tableau[0] == 1) && (tableau[1] == 1) && (tableau[2] == 0))	//du HAUT
				{
					choix = 3;	//l'IA choisit la case n°choix
				}
				else if ((tableau[0] == 1) && (tableau[2] == 1) && (tableau[1] == 0))
				{
					choix = 2;	//l'IA choisit la case n°choix
				}
				else if ((tableau[1] == 1) && (tableau[2] == 1) && (tableau[0] == 0))
				{
					choix = 1;	//l'IA choisit la case n°choix
				}
				else if ((tableau[3] == 1) && (tableau[4] == 1) && (tableau[5] == 0))	//du CENTRE
				{
					choix = 6;	//l'IA choisit la case n°choix
				}
				else if ((tableau[3] == 1) && (tableau[5] == 1) && (tableau[4] == 0))
				{
					choix = 5;	//l'IA choisit la case n°choix
				}
				else if ((tableau[4] == 1) && (tableau[5] == 1) && (tableau[3] == 0))
				{
					choix = 4;	//l'IA choisit la case n°choix
				}
				else if ((tableau[6] == 1) && (tableau[7] == 1) && (tableau[8] == 0))	//du BAS
				{
					choix = 9;	//l'IA choisit la case n°choix
				}
				else if ((tableau[6] == 1) && (tableau[8] == 1) && (tableau[7] == 0))
				{
					choix = 8;	//l'IA choisit la case n°choix
				}
				else if ((tableau[7] == 1) && (tableau[8] == 1) && (tableau[6] == 0))
				{
					choix = 7;	//l'IA choisit la case n°choix
				}																		//pour les VERTICALES
				else if ((tableau[0] == 1) && (tableau[3] == 1) && (tableau[6] == 0))	//de GAUCHE
				{
					choix = 7;	//l'IA choisit la case n°choix
				}
				else if ((tableau[0] == 1) && (tableau[6] == 1) && (tableau[3] == 0))
				{
					choix = 4;	//l'IA choisit la case n°choix
				}
				else if ((tableau[3] == 1) && (tableau[6] == 1) && (tableau[0] == 0))
				{
					choix = 1;	//l'IA choisit la case n°choix
				}
				else if ((tableau[1] == 1) && (tableau[4] == 1) && (tableau[7] == 0))	//du CENTRE
				{
					choix = 8;	//l'IA choisit la case n°choix
				}
				else if ((tableau[1] == 1) && (tableau[7] == 1) && (tableau[4] == 0))
				{
					choix = 5;	//l'IA choisit la case n°choix
				}
				else if ((tableau[4] == 1) && (tableau[7] == 1) && (tableau[1] == 0))
				{
					choix = 2;	//l'IA choisit la case n°choix
				}
				else if ((tableau[2] == 1) && (tableau[5] == 1) && (tableau[8] == 0))	//de DROITE
				{
					choix = 9;	//l'IA choisit la case n°choix
				}
				else if ((tableau[2] == 1) && (tableau[8] == 1) && (tableau[5] == 0))
				{
					choix = 6;	//l'IA choisit la case n°choix
				}
				else if ((tableau[5] == 1) && (tableau[8] == 1) && (tableau[2] == 0))
				{
					choix = 3;	//l'IA choisit la case n°choix
				}																		//pour les DIAGONALES
				else if ((tableau[0] == 1) && (tableau[4] == 1) && (tableau[8] == 0))	//d'en HAUT à GAUCHE
				{
					choix = 9;	//l'IA choisit la case n°choix
				}
				else if ((tableau[0] == 1) && (tableau[8] == 1) && (tableau[4] == 0))
				{
					choix = 5;	//l'IA choisit la case n°choix
				}
				else if ((tableau[4] == 1) && (tableau[8] == 1) && (tableau[0] == 0))
				{
					choix = 1;	//l'IA choisit la case n°choix
				}
				else if ((tableau[2] == 1) && (tableau[4] == 1) && (tableau[6] == 0))	//d'en HAUT à DROITE
				{
					choix = 7;	//l'IA choisit la case n°choix
				}
				else if ((tableau[2] == 1) && (tableau[6] == 1) && (tableau[4] == 0))
				{
					choix = 5;	//l'IA choisit la case n°choix
				}
				else if ((tableau[4] == 1) && (tableau[6] == 1) && (tableau[2] == 0))
				{
					choix = 3;	//l'IA choisit la case n°choix
				}
				else																	//si il n'y a RIEN à DEFENDRE
				{
					
				}
			}
			else	//si l'IA est ETOURDIE
			{
				//choisit une case totalement aléatoirement
				choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
				choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
				while (tableau[choix-1] != 0)	//tant que l'élément du tableau choisi par le hasard n'est pas égal à 0, c'est à dire tant que la case choisie n'est pas libre
				{
					choix = Math.floor(Math.random() * Math.floor(9));	//choisit un nombre au hasard de 0 à 8 et l'enregistre dans la variable choix
					choix = choix+1;	//ajoute 1 à la variable choix pour qu'elle corresponde à l'id du bouton qu'elle va entourer
				}
			}
			
			tableau[choix-1] = 2;	//remplace l'élément correspondant à la case choisie par le hasard dans le tableau par un 2
			document.getElementById(""+choix+"").innerHTML = "<img style='width: 100%;height: 100%;' src='o.png'>";	//place une balise <img> dans la balise bouton choisi par le hasard
		}

		document.getElementById("gameStatus").innerHTML = ""+chance+"";	//affiche à l'intérieur de l'élément à l'id="gameStatus" la variable carreau
		tour = 1;
		Verification();
	}	
}

//vérifie la victoire
 function Verification()
 {
  	//pour l'horizontale du haut
	if ((tableau[0] == 1) && (tableau[1] == 1) && (tableau[2] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[1] == 2) && (tableau[2] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour l'horizontale du milieu
	if ((tableau[3] == 1) && (tableau[4] == 1) && (tableau[5] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[3] == 2) && (tableau[4] == 2) && (tableau[5] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour l'horizontale du bas
	if ((tableau[6] == 1) && (tableau[7] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[6] == 2) && (tableau[7] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale de gauche
	if ((tableau[0] == 1) && (tableau[3] == 1) && (tableau[6] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[3] == 2) && (tableau[6] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale du milieu
	if ((tableau[1] == 1) && (tableau[4] == 1) && (tableau[7] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[1] == 2) && (tableau[4] == 2) && (tableau[7] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour la verticale 2de droite
	if ((tableau[2] == 1) && (tableau[5] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[2] == 2) && (tableau[5] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour la diagonale partant d'en haut à gauche
	if ((tableau[0] == 1) && (tableau[4] == 1) && (tableau[8] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[0] == 2) && (tableau[4] == 2) && (tableau[8] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}

	//pour la diagonale partant d'en bas
	//si les cases contiennent des X
	if ((tableau[6] == 1) && (tableau[4] == 1) && (tableau[2] == 1))	//si les cases contiennent des X
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tGagné !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
  	}
  	else if ((tableau[6] == 2) && (tableau[4] == 2) && (tableau[2] == 2))	//si les cases contiennent des O
  	{
  		fin = 1;	//empêche le match nul
  		alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		window.location.href="solo.php";  //actualise la page pour relancer une partie
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
											fin = 1;	//empêche le match nul
											alert('\t\t\tMatch nul !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
											window.location.href="solo.php";  //actualise la page pour relancer une partie
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
	//exécute la fonction du bot si c'est à son tour de jouer
	if (tour == 2)
	{
		Bot();
	}
 }
	

	
