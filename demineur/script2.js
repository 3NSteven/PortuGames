    var nbcase = 1;
    var nbBOMBE = 1;
    var tasdebombe = [];
    var memoire_tasdebombe = [];
    var proxy_champ
    var moduloDroite = 0;
    var coloneGauche = [];
    var decouvert = [];
    var drapeaux = [];
    var drapeaux_bis = 0;
    var THISbombe = 0;
    var poscase = 0;
    var buttonPressed = 0;
    var avantObj = 0;
    var detect2 = [];
    var detect3 = 0;
    var detectH = 0;
    var detectN = 0;
    var pas = 0;
    var nbNUKE = 1;
    var nbHEART = 1;
    var tasdenuke = [];
    var tasdeheart = [];
    var memoire_tasdeheart = [];
    var memoire_tasdenuke = [];
    var gauche = 0;
    var somme_numero = 0;
    var totaldrapeau = 0;

    var explosion = new Audio('explosion.mp3');
    var explosion_nuke = new Audio('explosion_nuke.mp3');
    var bonus = new Audio('Solar Striker - Power Up.ogg');


    // Creer la grille de jeu
    while (nbcase <= 256)
    {
        $('#wrapper').append($("<div id='"+ nbcase +"' onclick='test(this);' oncontextmenu='clicDroit(this); event.preventDefault();' style='width: 30px;height: 30px;border: 1px solid black;display: inline-block;float: left;background-color: grey;'><p id='log"+nbcase+"'></p></div>")); //ajoute une div dans la div wrapper avec pour id nbcase(incrémente)
        nbcase++; 
    }

function blanc(element)
{
    pas = element.id; 
    pas = parseFloat(pas);
    console.log(pas);
    var proxy2= [];

    //teste si la case fait partie d'une des cases des extrémités
	moduloDroite2 = pas%16;
	//remplit le tableau coloneGauche avec les valeurs des div tout à gauche
	var coloneGauche2 = [];
	var element_ligne_gauche2 = 1;

	while (element_ligne_gauche2 <= 241)
	{
    	coloneGauche2.push(element_ligne_gauche2);
    	element_ligne_gauche2 = element_ligne_gauche2 + 16;
	}

    coloneGauche2 = coloneGauche2.indexOf(pas); //cherche si la valeur existe dans le tableau
	
    if (moduloDroite2==0)   //si la case est à l'extrémité droite
    {
        proxy2.push(""+pas-1+"");
       
    }
	else if (coloneGauche2 >= 0)   //si la case est à l'extrémité gauche
	{  	
    	proxy2.push(""+pas-(-1)+"");
 	}
	else   //si la case est au centre
	{
    	proxy2.push(""+pas-1+"");
    	proxy2.push(""+pas-(-1)+"");
	}

    if (pas >= 17)  //si la case n'est pas à l'extrémité du haut
    {
        proxy2.push(""+pas-16+"");

        if (coloneGauche2 < 0)  //si la case n'est pas à l'extrémité gauche
        {
            proxy2.push(""+pas-17+""); 
        }
        if (moduloDroite2 != 0)  //si la case n'est pas à l'extrémité droite
        {
            proxy2.push(""+pas-15+""); 
        }
    }
    if (pas <= 240) //si la case n'est pas à l'extrémité du bas
    {
        proxy2.push(""+pas-(-16)+"");

        if (coloneGauche2 < 0)  //si la case n'est pas à l'extrémité gauche
        {
            proxy2.push(""+pas-(-15)+""); 
        }
        if (moduloDroite2 != 0)  //si la case n'est pas à l'extrémité droite
        {
            proxy2.push(""+pas-(-17)+""); 
        }
    }

    var b = 0;
    //effectue la fonction testblanc() pour chaque élément du tableau proxy2, c'est à dire les positions adjacentes à la case de départ "pas"
    while (proxy2.length >= b)
    {
        poscase = proxy2[b];
        var testdrapeaux = drapeaux.indexOf(poscase);   //teste si la case est déjà balisée d'un drapeau, affecte 0 ou + si élément présent et -1 si absent 
        if (testdrapeaux < 0)   //si la case n'est pas marquée d'un drapeau
        {
            chose = document.getElementById(""+poscase+"");
            ifbombe = memoire_tasdebombe.indexOf(poscase); //affecte 0 ou + si élément présent et -1 si absent 
            if (ifbombe < 0) //ne trouve pas de bombe, affectation numéro si bombe proche
            {
                poscase = parseFloat(poscase);
                var proxy= [];

                var testdecouvert = decouvert.indexOf(poscase); //teste si la case cliquée a déjà été découverte

                if (testdecouvert < 0)  //si la case n'a pas encore été découverte
                {
                    //teste si la case fait partie d'une des cases des extrémités
                    THISbombe = parseFloat(poscase);
                    gauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau
                    moduloDroite2 = poscase%16; //teste si la case fait partie d'une des cases des extrémités
                    
                    if (moduloDroite==0)
                    {
                        proxy.push(""+THISbombe-17+"");
                        proxy.push(""+THISbombe-16+"");
                        proxy.push(""+THISbombe-1+"");
                        proxy.push(""+THISbombe-(-15)+"");
                        proxy.push(""+THISbombe-(-16)+"");  
                    }
                    else if (gauche >= 0)
                    {
                        proxy.push(""+THISbombe-16+"");
                        proxy.push(""+THISbombe-15+"");
                        proxy.push(""+THISbombe-(-1)+"");
                        proxy.push(""+THISbombe-(-16)+"");
                        proxy.push(""+THISbombe-(-17)+"");
                    }
                    else
                    {
                        proxy.push(""+THISbombe-17+"");
                        proxy.push(""+THISbombe-16+"");
                        proxy.push(""+THISbombe-15+"");
                        proxy.push(""+THISbombe-1+"");
                        proxy.push(""+THISbombe-(-1)+"");
                        proxy.push(""+THISbombe-(-15)+"");
                        proxy.push(""+THISbombe-(-16)+"");
                        proxy.push(""+THISbombe-(-17)+"");
                    }

                    //teste qu'il n'y ait pas de bombes autour de la case
                    ntrouve = 0;
                    var iftasdebombe = 0;
                    var proxy_champ = proxy.length;
                    proxy_champ = proxy_champ - 1;
                    var numero = 0;
                    while (iftasdebombe <= proxy_champ)
                    {
                        ntrouve = memoire_tasdebombe.indexOf(proxy[iftasdebombe]); //savoir si la valeur n°iftasdebombe du tableau proxy est contenue dans le tableau tasdebombe
                        if (ntrouve >= 0)
                        {
                            numero++;
                        }
                        iftasdebombe++;
                    }

                    //teste qu'il n'y ait pas de bombes nucléaires autour de la case
                    ntrouve = 0;
                    var iftasdenuke = 0;
                    var proxy_champ = proxy.length;
                    proxy_champ = proxy_champ - 1;
                    var numero_b = 0;
                    while (iftasdenuke <= proxy_champ)
                    {
                        ntrouve = tasdenuke.indexOf(proxy[iftasdenuke]); //savoir si la valeur n°iftasdenuke du tableau proxy est contenue dans le tableau tasdenuke
                        if (ntrouve >= 0)
                        {
                            numero_b++;
                        }
                        iftasdenuke++;
                    }

                    //teste qu'il n'y ait pas de coeurs autour de la case
                    ntrouve = 0;
                    var iftasdeheart = 0;
                    var proxy_champ = proxy.length;
                    proxy_champ = proxy_champ - 1;
                    var numero_c = 0;
                    while (iftasdeheart <= proxy_champ)
                    {
                        ntrouve = memoire_tasdeheart.indexOf(proxy[iftasdeheart]); //savoir si la valeur n°iftasdeheart du tableau proxy est contenue dans le tableau tasdeheart
                        if (ntrouve >= 0)
                        {
                            numero_c++;
                        }
                        iftasdeheart++;
                    }

                    $('#'+ THISbombe +'').empty;   //vide la case cliquée
                    
                    somme_numero = 0;
                    somme_numero = numero+numero_b+numero_c;    //regroupe le nombre de chaque objet autour de la case
                    console.log(somme_numero);
                    if (somme_numero ==0)      //attribue le bon numéro à la case +THISbombe+
                    {
                        $('#'+ THISbombe +'').append($("<img src='0.png' style='width:100%;height:100%;'>"));
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        if(chose){

                            chose.style.backgroundColor= "#e8e8e8";
                            blanc(chose);
                            proxy2.push(THISbombe);
                        }

                        //enclenche algorithme des cases blanches
                        /*var compris = decouvert.indexOf(poscase);*/
                        
                        //console.log(""+proxy2+"");
                    }
                    else if (somme_numero ==1)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='1n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='1.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==2)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='2n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='2n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='2.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==3)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='3n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='3n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='3.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==4)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='4n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='4n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='4.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==5)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='5n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='5n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='5.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==6)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='6n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='6n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='6.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==7)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='7n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='7n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='7.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                    else if (somme_numero ==8)
                    {
                        if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='8n.png' style='width:100%;height:100%;'>"));
                        }
                        else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                        {
                            $('#'+ THISbombe +'').append($("<img src='8n.png' style='width:100%;height:100%;'>"));
                        }
                        else
                        {
                            $('#'+ THISbombe +'').append($("<img src='8.png' style='width:100%;height:100%;'>"));
                        }
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        chose.style.backgroundColor= "#e8e8e8";
                    }
                }
            }
        }  
    b++;
    }

    //test victoire
    var totaldrapeau = drapeaux.length ;
    var totaldecouvert = decouvert.length;
    var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
    var allnuke = tasdenuke.length;
    var allbombe = tasdebombe.length;
    var somme_fin = allbombe+allnuke;
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    if (restecase == somme_fin)
    {
        if (somme_fin == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
        {
            //joue la musique de victoire
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
            music.pause();  //arrête la musique d'arrière plan
            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
            music.loop = false;  //active la répétition du son en question
            if (muet == 0)  //si le son est activé
            {
                //activation du volume
                music.volume = "1";
            }
            else if (muet == 1) //si le son est désactivé
            {
                //volume à 0
                music.volume = "0";
            }
            music.play(); //joue le son "music"

            //affiche l'image de la victoire
            var ecran = document.getElementById('ecran');
            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
            win = "win.png"; //change la source de l'image
            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
            window.location.href="index.php";  //renvoie le joueur à la page du menu du jeu
        } 
    }
}



//fonction des drapeaux
function clicDroit(element)
{
    var poscase = element.id;

    event = event || window.event;
    if(event.button != 2) // si ce n'est pas un clic droit
    {
        test(); //appelle la fonction test
    }
    else // si c'est un clic droit
    {   
        THISbombe = element.id;
        THISbombe = parseFloat(THISbombe);

        var testdecouvert = decouvert.indexOf(THISbombe); //teste si la case cliquée a déjà été découverte

        if (testdecouvert < 0)  //si la case n'a pas encore été découverte
        {
             var testdrapeaux = drapeaux.indexOf(poscase);   //teste si la case est déjà balisée d'un drapeau
             if (testdrapeaux < 0)   //si la case n'est pas marquée d'un drapeau
            {
                drapeaux.push(""+poscase+"");   //stocke la coordonnée dans le tableau des drapeaux
                $(element).append($("<img src='drapeau.png' style='width:100%;height:100%;'>"));
                element.style.backgroundColor= "#42b3f4";
            }
            else  //si la case est déjà marquée d'un drapeau
            {
                 //déstocke la coordonnée du tableau des drapeaux
                drapeaux_bis = drapeaux.slice(0);// je fais une sauvegarde de mon tableau drapeaux
                drapeaux.length = 0; // je suprime le contenu de drapeaux
                for (i=0; i<drapeaux_bis.length; i++)
                {
                    if(drapeaux_bis[i] != element.id)// je re-remplis le tableau drapeaux avec toutes les anciennes valeurs sauf l'id actuel
                    {
                        drapeaux.push(drapeaux_bis[i]);
                    }
                }
                drapeaux_bis.length = 0;

                $(element).empty(); // retire l'image dans la div en question
                element.style.backgroundColor= "grey";
            }
        }
    }

    totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+""; //j'actualise l'affichage du nombre total de drapeaux

    //test victoire
    var totaldecouvert = decouvert.length;
    var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
    var allnuke = tasdenuke.length;
    var allbombe = tasdebombe.length;
    var somme_fin = allbombe+allnuke;
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    if (restecase == somme_fin)
    {
        if (somme_fin == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
        {
            //joue la musique de victoire
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
            music.pause();  //arrête la musique d'arrière plan
            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
            music.loop = false;  //active la répétition du son en question
            if (muet == 0)  //si le son est activé
            {
                //activation du volume
                music.volume = "1";
            }
            else if (muet == 1) //si le son est désactivé
            {
                //volume à 0
                music.volume = "0";
            }
            music.play(); //joue le son "music"

            //affiche l'image de la victoire
            var ecran = document.getElementById('ecran');
            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
            win = "win.png"; //change la source de l'image
            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
            window.location.href="index.php";  //renvoie le joueur à la page du menu du jeu
        } 
    }
}

function droite(element)
{
    var poscase = element.id;
    THISbombe = element.id;
    THISbombe = parseFloat(THISbombe);

    var testdecouvert = decouvert.indexOf(THISbombe); //teste si la case cliquée a déjà été découverte      

    if (testdecouvert < 0)  //si la case n'a pas encore été découverte
    {
         var testdrapeaux = drapeaux.indexOf(poscase);   //teste si la case est déjà balisée d'un drapeau
         if (testdrapeaux < 0)   //si la case n'est pas marquée d'un drapeau
        {
            drapeaux.push(""+poscase+"");   //stocke la coordonnée dans le tableau des drapeaux
            $(element).append($("<img src='drapeau.png' style='width:100%;height:100%;'>"));
            element.style.backgroundColor= "#42b3f4";
        }
        else  //si la case est déjà marquée d'un drapeau
        {
             //déstocke la coordonnée du tableau des drapeaux
            drapeaux_bis = drapeaux.slice(0);// je fais une sauvegarde de mon tableau drapeaux
            drapeaux.length = 0; // je suprime le contenu de drapeaux
            for (i=0; i<drapeaux_bis.length; i++)
            {
                if(drapeaux_bis[i] != element.id)// je re-remplis le tableau drapeaux avec toutes les anciennes valeurs sauf l'id actuel
                {
                    drapeaux.push(drapeaux_bis[i]);
                }
            }
            drapeaux_bis.length = 0;

            $(element).empty(); // retire l'image dans la div en question
            element.style.backgroundColor= "grey";
        }
    }

    totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+""; //j'actualise l'affichage du nombre total de drapeaux

    //test victoire
    var totaldrapeau = drapeaux.length ;
    var totaldecouvert = decouvert.length;
    var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
    var allnuke = tasdenuke.length;
    var allbombe = tasdebombe.length;
    var somme_fin = allbombe+allnuke;
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    if (restecase == somme_fin)
    {
        if (somme_fin == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
        {
            //joue la musique de victoire
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
            music.pause();  //arrête la musique d'arrière plan
            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
            music.loop = false;  //active la répétition du son en question
            if (muet == 0)  //si le son est activé
            {
                //activation du volume
                music.volume = "1";
            }
            else if (muet == 1) //si le son est désactivé
            {
                //volume à 0
                music.volume = "0";
            }
            music.play(); //joue le son "music"

            //affiche l'image de la victoire
            var ecran = document.getElementById('ecran');
            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
            win = "win.png"; //change la source de l'image
            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
            window.location.href="index.php";  //renvoie le joueur à la page du menu du jeu
        } 
    }
}

// Selectionne une case
function test(element)
{
    if (avantObj == 0)    //placement des objets suite au premier clic
    {
        THISbombe = element.id; //THISbombe prend l'id de la div cliquée
        poscase = parseFloat(THISbombe);
        var detect2 = [];
        //pour tester si la case fait partie d'une des cases des extrémités
        moduloDroite = poscase%16;
        //remplit le tableau coloneGauche avec les valeurs des div tout à gauche
        var element_ligne_gauche = 1;

        while (element_ligne_gauche <= 241) //jusqu'à la case n°241
        {
            coloneGauche.push(element_ligne_gauche);    //ajouter au tableau coloneGauche la variable element_ligne_gauche
            element_ligne_gauche = element_ligne_gauche + 16;   //ajoute 16 à la valeur d'element_ligne_gauche pour descendre d'une ligne
        }
                
        gauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau         

        if (moduloDroite==0)    //si la case se situe à l'extrémité droite
        {
            detect2.push(""+poscase-17+"");
            detect2.push(""+poscase-16+"");
            detect2.push(""+poscase-1+"");
            detect2.push(""+poscase-(-15)+"");
            detect2.push(""+poscase-(-16)+"");
            detect2.push(""+poscase+"");
        }
        else if (gauche >= 0) //si la case se situe à l'extrémité gauche
        {
            detect2.push(""+poscase-16+"");
            detect2.push(""+poscase-15+"");
            detect2.push(""+poscase-(-1)+"");
            detect2.push(""+poscase-(-16)+"");
            detect2.push(""+poscase-(-17)+"");
            detect2.push(""+poscase+"");
        }
        else    //si la case se situe au centre
        {
            detect2.push(""+poscase-17+"");
            detect2.push(""+poscase-16+"");
            detect2.push(""+poscase-15+"");
            detect2.push(""+poscase-1+"");
            detect2.push(""+poscase-(-1)+"");
            detect2.push(""+poscase-(-15)+"");
            detect2.push(""+poscase-(-16)+"");
            detect2.push(""+poscase-(-17)+"");
            detect2.push(""+poscase+"");
        }

        //placement des bombes
        while (nbBOMBE <= limiteBombe)
        {
            min = Math.ceil(1); //définit la case minimum pouvant obtenir une bombe
            max = Math.floor(256); //définit la case maximum pouvant obtenir une bombe
            BOMBE = Math.floor(Math.random() * (max - min +1)) + min;
            detect = tasdebombe.indexOf(""+BOMBE+""); //affecte 0 ou + si élément présent et -1 si absent 

            if (detect >= 0)
            {
                nbBOMBE--; //recommence l'action
            }
            else if (detect < 0)
            {
                detect3 = detect2.indexOf(""+BOMBE+""); //affecte 0 ou + si élément présent et -1 si absent 

                if (detect3 >= 0) //affecte 0 ou + si élément présent et -1 si absent 
                {
                    nbBOMBE--; //recommence l'action
                }    
                else if (detect3 < 0)
                {
                    tasdebombe.push(""+BOMBE+""); //stocke la coordonnée de la bombe dans le tableau tasdebombe (nbBombe en tout)
                    memoire_tasdebombe.push(""+BOMBE+"");
                }
            }
            nbBOMBE++;
        }

        //placement des bombes nucléaires
        while (nbNUKE <= limiteNuke)
        {
            min = Math.ceil(1); //définit la case minimum pouvant obtenir une bombe nucléaire
            max = Math.floor(256); //définit la case maximum pouvant obtenir une bombe nucléaire
            NUKE = Math.floor(Math.random() * (max - min +1)) + min;
            detect = tasdebombe.indexOf(""+NUKE+""); //affecte 0 ou + si élément présent et -1 si absent 
            detectN = tasdenuke.indexOf(""+NUKE+""); //affecte 0 ou + si élément présent et -1 si absent 

            if (detectN >= 0)
            {
                 nbNUKE--; //recommence l'action
            }
            else if (detectN < 0)
            {
                if (detect >= 0)
                {
                    nbNUKE--; //recommence l'action
                }
                else if (detect < 0)
                {
                    detect3 = detect2.indexOf(""+NUKE+""); //affecte 0 ou + si élément présent et -1 si absent 

                    if (detect3 >= 0) //affecte 0 ou + si élément présent et -1 si absent 
                    {
                        nbNUKE--; //recommence l'action
                    }    
                    else if (detect3 < 0)
                    {
                        tasdenuke.push(""+NUKE+""); //stocke la coordonnée de la bombe dans le tableau tasdebnuke (nbNuke en tout)
                        memoire_tasdenuke.push(""+NUKE+"");
                    }
                }
            }
            nbNUKE++;
        }

        //placement des coeurs
        while (nbHEART <= limiteHeart)
        {
            min = Math.ceil(1); //définit la case minimum pouvant obtenir une bombe nucléaire
            max = Math.floor(256); //définit la case maximum pouvant obtenir une bombe nucléaire
            HEART = Math.floor(Math.random() * (max - min +1)) + min;
            detect = tasdebombe.indexOf(""+HEART+""); //affecte 0 ou + si élément présent et -1 si absent 
            detectN = tasdenuke.indexOf(""+HEART+""); //affecte 0 ou + si élément présent et -1 si absent 
            detectH = tasdeheart.indexOf(""+HEART+""); //affecte 0 ou + si élément présent et -1 si absent 

            if (detectH >= 0)
            {
                nbHEART--; //recommence l'action
            }
            else if (detectH < 0)
            {
                if (detectN >= 0)
                {
                    nbHEART--; //recommence l'action
                }
                else if (detectN < 0)
                {
                    if (detect >= 0)
                    {
                        nbHEART--; //recommence l'action
                    }
                    else if (detect < 0)
                    {
                        detect3 = detect2.indexOf(""+HEART+""); //affecte 0 ou + si élément présent et -1 si absent 

                        if (detect3 >= 0) //affecte 0 ou + si élément présent et -1 si absent 
                        {
                            nbHEART--; //recommence l'action
                        }    
                        else if (detect3 < 0)
                        {
                            tasdeheart.push(""+HEART+""); //stocke la coordonnée de la bombe dans le tableau tasdeheart (nbHeart en tout)
                            memoire_tasdeheart.push(""+HEART+"");
                        }
                    }
                }
            }
            nbHEART++;
        }
    	avantObj = 1;
    }

    //actualise le compteur des bombes nucléaires
    var totalnuke = tasdenuke.length ;
    document.getElementById("nuke").innerHTML= "<img src='nuke.png' style='width:2%;height:2%;'> x "+totalnuke+"";
    //actualise le compteur des bombes
    var totalbombe = tasdebombe.length ;
    document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+totalbombe+"";
     //actualise le compteur des coeurs
    var totalheart = tasdeheart.length ;
    document.getElementById("heart").innerHTML= "<img src='heart.png' style='width:2%;height:2%;'> x "+totalheart+"";
    //actualise le compteur des drapeaux
    var totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+"";


	THISbombe = element.id;
    var poscase = element.id;
       
    var testdrapeaux = drapeaux.indexOf(poscase);   //teste si la case est déjà balisée d'un drapeau, affecte 0 ou + si élément présent et -1 si absent 
    if (testdrapeaux < 0)   //si la case n'est pas marquée d'un drapeau
    {
        ifbombe = memoire_tasdebombe.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 
        ifheart = memoire_tasdeheart.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 
        ifnuke = memoire_tasdenuke.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 
        if ((ifbombe < 0) && (ifheart < 0) && (ifnuke < 0)) //ne trouve pas d'objet, affectation numéro si objet proche
        {
            THISbombe = parseFloat(THISbombe);
            var proxy= [];

            var testdecouvert = decouvert.indexOf(THISbombe); //teste si la case cliquée a déjà été découverte

            if (testdecouvert < 0)	//si la case n'a pas encore été découverte
        	{	
                poscase = parseFloat(THISbombe);
                gauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau
                moduloDroite = poscase%16;  //pour tester si la case fait partie d'une des cases des extrémités
            	
                if (moduloDroite==0)    //si la case se situe à l'extrémité droite
                {
                    proxy.push(""+THISbombe-17+"");
                    proxy.push(""+THISbombe-16+"");
                    proxy.push(""+THISbombe-1+"");
                    proxy.push(""+THISbombe-(-15)+"");
                    proxy.push(""+THISbombe-(-16)+"");	
                }
            	else if (gauche >= 0)    //si la case se situe à l'extrémité gauche
            	{
                	proxy.push(""+THISbombe-16+"");
                	proxy.push(""+THISbombe-15+"");
                	proxy.push(""+THISbombe-(-1)+"");
                	proxy.push(""+THISbombe-(-16)+"");
                	proxy.push(""+THISbombe-(-17)+"");
             	}
            	else   //si la case se situe au centre
            	{
                	proxy.push(""+THISbombe-17+"");
                	proxy.push(""+THISbombe-16+"");
                	proxy.push(""+THISbombe-15+"");
                	proxy.push(""+THISbombe-1+"");
                	proxy.push(""+THISbombe-(-1)+"");
                	proxy.push(""+THISbombe-(-15)+"");
                	proxy.push(""+THISbombe-(-16)+"");
                	proxy.push(""+THISbombe-(-17)+"");
            	}

                //teste qu'il n'y ait pas de bombes autour de la case
                ntrouve = 0;
            	var iftasdebombe = 0;
            	var proxy_champ = proxy.length;
            	proxy_champ = proxy_champ - 1;
            	var numero = 0;
            	while (iftasdebombe <= proxy_champ)
            	{
                	ntrouve = memoire_tasdebombe.indexOf(proxy[iftasdebombe]); //savoir si la valeur n°iftasdebombe du tableau proxy est contenue dans le tableau tasdebombe
                	if (ntrouve >= 0)
                	{
                    	numero++;
                	}
                	iftasdebombe++;
            	}

                //teste qu'il n'y ait pas de bombes nucléaires autour de la case
                ntrouve = 0;
                var iftasdenuke = 0;
                var proxy_champ = proxy.length;
                proxy_champ = proxy_champ - 1;
                var numero_b = 0;
                while (iftasdenuke <= proxy_champ)
                {
                    ntrouve = memoire_tasdenuke.indexOf(proxy[iftasdenuke]); //savoir si la valeur n°iftasdenuke du tableau proxy est contenue dans le tableau tasdenuke
                    if (ntrouve >= 0)
                    {
                        numero_b++;
                    }
                    iftasdenuke++;
                }

                //teste qu'il n'y ait pas de coeurs autour de la case
                ntrouve = 0;
                var iftasdeheart = 0;
                var proxy_champ = proxy.length;
                proxy_champ = proxy_champ - 1;
                var numero_c = 0;
                while (iftasdeheart <= proxy_champ)
                {
                    ntrouve = memoire_tasdeheart.indexOf(proxy[iftasdeheart]); //savoir si la valeur n°iftasdeheart du tableau proxy est contenue dans le tableau tasdeheart
                    if (ntrouve >= 0)
                    {
                        numero_c++;
                    }
                    iftasdeheart++;
                }

            	$('#'+ THISbombe +'').empty;   //vide la case cliquée

                somme_numero = 0;
                somme_numero = numero+numero_b+numero_c;    //regroupe le nombre de chaque objet autour de la case
                console.log(somme_numero);
                if (somme_numero ==0)      //attribue le bon numéro à la case +THISbombe+
                {
                    $('#'+ THISbombe +'').append($("<img src='0.png' style='width:100%;height:100%;'>"));
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";

                    //enclenche algorithme des cases blanches
                    blanc(element);
                }
                else if (somme_numero ==1)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='1n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='1.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==2)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='2n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='2n.png' style='width:100%;height:100%;'>"));
                    }
                    else if (numero > 0)    //si il n'y a que des bombes autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='2.png' style='width:100%;height:100%;'>"));
                    }
                    else if (numero_c > 0)  //si il n'y a que des coeurs autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='2.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==3)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='3n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='3n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='3.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==4)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='4n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='4n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='4.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==5)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='5n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='5n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='5.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==6)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='6n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='6n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='6.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==7)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='7n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='7n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='7.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
                else if (somme_numero ==8)
                {
                    if (numero_b > 0)   //si il y a au moins une bombe nucléaire autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='8n.png' style='width:100%;height:100%;'>"));
                    }
                    else if ((numero > 0) && (numero_c > 0)) //si il y a au moins une bombe et un coeur autour
                    {
                        $('#'+ THISbombe +'').append($("<img src='8n.png' style='width:100%;height:100%;'>"));
                    }
                    else
                    {
                        $('#'+ THISbombe +'').append($("<img src='8.png' style='width:100%;height:100%;'>"));
                    }
                    decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    element.style.backgroundColor= "#e8e8e8";
                }
            }     
        }
        else if (ifbombe >= 0) //trouve une bombe
        {
            dejavubombe = tasdebombe.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 

            if (dejavubombe >= 0) //si la bombe n'a pas encore été découverte
            {
                //joue la musique de game over
                muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

                if (muet == 0)  //si le son est activé
                {
                    //activation du volume
                    explosion.volume = "1";
                }
                else if (muet == 1) //si le son est désactivé
                {
                    //volume à 0
                    explosion.volume = "0";
                }
                
                explosion.play(); //joue le son "explosion"

	            //fait apparaître la bombe dans la case cliquée sur fond rouge
	            $(element).append($("<img src='bomb.png' style='width:100%;height:100%;'>"));
	            element.style.backgroundColor= "red";
	            
	            totalbombe--; //retire la bombe trouvée au nombre de bombes cachées (le principe d'un démineur étant de ne pas révéler les bombes)
	            document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+totalbombe+""; //actualise le compteur de bombes
	            
	            //déstocke la coordonnée de la bombe trouvée du tableau tasdebombe
                tasdebombe_bis = tasdebombe.slice(0);// je fais une sauvegarde de mon tableau tasdebombe dans le tableau tasdebombe_bis
                tasdebombe.length = 0; // je suprime le contenu de tasdebombe
                for (i=0; i<tasdebombe_bis.length; i++)	//tant que i est inférieur au nombre d'éléments dans le tableau tasdebombe_bis, on l'incrémente de 1 et on répète l'action ci-dessous
                {
                    if(tasdebombe_bis[i] != element.id)//pour tout élément du tableau tasdebombe_bis différent de celui cliqué(element)
                    {
                        tasdebombe.push(tasdebombe_bis[i]);	//je re-remplis tasdebombe avec toutes les anciennes valeurs sauf l'id actuel element
                    }
                }
                tasdebombe_bis.length = 0;	//je vide le tableau tasdebombe_bis
                
                var totalbombe = tasdebombe.length ;
                 document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+totalbombe+"";
            

            	vie = vie-10;   //retire 10% de la vie
		        document.getElementById("vie").style= "width:"+vie+"%; height:100%; background:red;";   //actualise l'affichage de la barre de vie

		        if (vie <= 0)	//si le joueur n'a plus de vie
		        {
		            //joue la musique de game over
		            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

		            music.pause();  //arrête la musique d'arrière plan

		            music = new Audio('06 Searching (Game Over).ogg');  //attribue la musique du game over à la variable music
		            music.loop = true;  //active la répétition du son en question

		            if (muet == 0)  //si le son est activé
		            {
		                //activation du volume
		                music.volume = "1";
		            }
		            else if (muet == 1) //si le son est désactivé
		            {
		                //volume à 0
		                music.volume = "0";
		            }
		            music.play(); //joue le son "music"

		            //affiche l'image du game over
		            var ecran = document.getElementById('ecran');	//la variable ecran devient la balise <img> ayant pour id="ecran"
		            var gameover = ecran.getAttribute("src");  //la variable gameover devient la balise "src" contenue dans la balise <img>
		            gameover = "gameover.png"; //change la source de l'image
		            ecran.setAttribute("src", gameover);   //modifie l'attribut "src" de la balise <img> (change l'image)

		            alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
		            window.location.href="nucleaire.php";  //actualise la page pour relancer une partie
		        }
            }
        }
        else if (ifheart >= 0)  //trouve un coeur
        {
            var dejavuheart = tasdeheart.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 

            if (dejavuheart >= 0) //si le coeur n'a pas encore été découverte
            {
                //joue la musique de game over
                muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

                if (muet == 0)  //si le son est activé
                {
                    //activation du volume
                    bonus.volume = "1";
                }
                else if (muet == 1) //si le son est désactivé
                {
                    //volume à 0
                    bonus.volume = "0";
                }
                
                bonus.play(); //joue le son "bonus"

                //fait apparaître le coeur dans la case cliquée sur fond rose
                $(element).append($("<img src='heart.png' style='width:100%;height:100%;'>"));
                element.style.backgroundColor= "pink";
                
                totalheart--; //retire le coeur trouvé au nombre de coeurs cachées
                document.getElementById("heart").innerHTML= "<img src='heart.png' style='width:2%;height:2%;'> x "+totalheart+""; //actualise le compteur de coeurs
                
                //déstocke la coordonnée du coeur trouvé du tableau tasdeheart
                var tasdeheart_bis = tasdeheart.slice(0);// je fais une sauvegarde de mon tableau tasdeheart dans le tableau tasdeheart_bis
                tasdeheart.length = 0; // je suprime le contenu de tasdeheart
                for (i=0; i<tasdeheart_bis.length; i++) //tant que i est inférieur au nombre d'éléments dans le tableau tasdeheart_bis, on l'incrémente de 1 et on répète l'action ci-dessous
                {
                    if(tasdeheart_bis[i] != element.id)//pour tout élément du tableau tasdeheart_bis différent de celui cliqué(element)
                    {
                        tasdeheart.push(tasdeheart_bis[i]); //je re-remplis tasdeheart avec toutes les anciennes valeurs sauf l'id actuel element
                    }
                }
                tasdeheart_bis.length = 0;  //je vide le tableau tasdeheart_bis
                
                var totalheart = tasdeheart.length ;
                 document.getElementById("heart").innerHTML= "<img src='heart.png' style='width:2%;height:2%;'> x "+totalheart+"";
            

                vie = vie+30;   //ajoute 30% de vie
                if (vie > 100)  //si la vie dépasse les 100% (la barre de vie va déborder)
                {
                    vie = 100;  //replace la barre de vie à 100% (remplit la barre de vie sans la faire déborder)
                }
                document.getElementById("vie").style= "width:"+vie+"%; height:100%; background:red;";   //actualise l'affichage de la barre de vie
            }
        }
        else if (ifnuke >= 0) //trouve une bombe nucléaire
        {
            var dejavunuke = tasdenuke.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 

            if (dejavunuke >= 0) //si la bombe nucléaire n'a pas encore été découverte
            {
                //joue la musique de game over
                muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

                if (muet == 0)  //si le son est activé
                {
                    //activation du volume
                    explosion_nuke.volume = "1"; 
                }
                else if (muet == 1) //si le son est désactivé
                {
                    //volume à 0
                    explosion_nuke.volume = "0";
                }
                
                explosion_nuke.play(); //joue le son "explosion_nuke"

                //fait apparaître la bombe dans la case cliquée sur fond rouge
                $(element).append($("<img src='nuke.png' style='width:100%;height:100%;'>"));
                element.style.backgroundColor= "green";

                totalnuke--; //retire la bombe nucléaire trouvée au nombre de bombes nucléaires cachées
                document.getElementById("nuke").innerHTML= "<img src='nuke.png' style='width:2%;height:2%;'> x "+totalnuke+""; //actualise le compteur de bombes nucléaires
                
                //déstocke la coordonnée du coeur trouvé du tableau tasdenuke
                var tasdenuke_bis = tasdenuke.slice(0);// je fais une sauvegarde de mon tableau tasdenuke dans le tableau tasdenuke_bis
                tasdenuke.length = 0; // je suprime le contenu de tasdenuke
                for (i=0; i<tasdenuke_bis.length; i++) //tant que i est inférieur au nombre d'éléments dans le tableau tasdenuke_bis, on l'incrémente de 1 et on répète l'action ci-dessous
                {
                    if(tasdenuke_bis[i] != element.id)//pour tout élément du tableau tasdenuke_bis différent de celui cliqué(element)
                    {
                        tasdenuke.push(tasdenuke_bis[i]); //je re-remplis tasdenuke avec toutes les anciennes valeurs sauf l'id actuel element
                    }
                }
                tasdenuke_bis.length = 0;  //je vide le tableau tasdenuke_bis
                
                var totalnuke = tasdenuke.length ;
                 document.getElementById("nuke").innerHTML= "<img src='nuke.png' style='width:2%;height:2%;'> x "+totalnuke+"";
            
                vie = 5;   //retire 95% de la vie(en laisse 5%)
                document.getElementById("vie").style= "width:"+vie+"%; height:100%; background:red;";   //actualise l'affichage de la barre de vie 

                if (vie <= 0)   //si le joueur n'a plus de vie
                {
                    //joue la musique de game over
                    muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

                    music.pause();  //arrête la musique d'arrière plan

                    music = new Audio('06 Searching (Game Over).ogg');  //attribue la musique du game over à la variable music
                    music.loop = true;  //active la répétition du son en question

                    if (muet == 0)  //si le son est activé
                    {
                        //activation du volume
                        music.volume = "1";
                    }
                    else if (muet == 1) //si le son est désactivé
                    {
                        //volume à 0
                        music.volume = "0";
                    }
                    music.play(); //joue le son "music"

                    //affiche l'image du game over
                    var ecran = document.getElementById('ecran');   //la variable ecran devient la balise <img> ayant pour id="ecran"
                    var gameover = ecran.getAttribute("src");  //la variable gameover devient la balise "src" contenue dans la balise <img>
                    gameover = "gameover.png"; //change la source de l'image
                    ecran.setAttribute("src", gameover);   //modifie l'attribut "src" de la balise <img> (change l'image)

                    alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
                    window.location.href="nucleaire.php";  //actualise la page pour relancer une partie
                }
            }
        }

        var poscase = element.id;
        THISbombe = parseFloat(poscase);

        var testdecouvert = decouvert.indexOf(THISbombe); //teste si la case cliquée a déjà été ajoutée au tableau des cases découvertes
            if (testdecouvert < 0)  //si la case n'a pas encore été marquée comme découverte
            {
                decouvert.push(THISbombe);    //ajoute le numéro de la case poscase dans le tableau des cases découvertes
            }
            
        
    }

    	//test victoire
        var totaldecouvert = decouvert.length;
        var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
        var allnuke = tasdenuke.length;
        var allbombe = tasdebombe.length;
        var somme_fin = allbombe+allnuke;
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    if (restecase == somme_fin)
        {
            if (somme_fin == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
            {
                //joue la musique de victoire
                muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
                music.pause();  //arrête la musique d'arrière plan
                music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
                music.loop = false;  //active la répétition du son en question
                if (muet == 0)  //si le son est activé
                {
                    //activation du volume
                    music.volume = "1";
                }
                else if (muet == 1) //si le son est désactivé
                {
                    //volume à 0
                    music.volume = "0";
                }
                music.play(); //joue le son "music"

                //affiche l'image de la victoire
                var ecran = document.getElementById('ecran');
                var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
                win = "win.png"; //change la source de l'image
                ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

                alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
                window.location.href="index.php";  //renvoie le joueur à la page du menu du jeu
            } 
        }


}	


function chrono(element)
{
    if (temps > 1)  //si le chrono affiche une valeur supérieure à 1
    {
        temps = temps-1;    //on soustrait 1 seconde à la valeur du chrono
    }
    else if (temps == 1)    //si le chrono affiche 1 seconde
    {
        //joue le son d'explosion
        muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
        if (muet == 0)  //si le son est activé
        {
            //activation du volume
            explosion.volume = "1";
        }
        else if (muet == 1) //si le son est désactivé
        {
            //volume à 0
            explosion.volume = "0";
        }
        explosion.play(); //joue le son "explosion"

        vie = vie-20;   //retire 20% de la vie
        document.getElementById("vie").style= "width:"+vie+"%; height:100%; background:red;";   //actualise l'affichage de la barre de vie

        if (vie <= 0)	//si le joueur n'a plus de vie
        {
        	document.getElementById("timer").innerHTML= "<img src='timer.png' style='width:5%;height:5%;'><span style='font-size: 3em;'>&ensp;0</span>";	//on affiche 0 secondes au chrono, le temps est écoulé
            //joue la musique de game over
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

            music.pause();  //arrête la musique d'arrière plan

            music = new Audio('06 Searching (Game Over).ogg');  //attribue la musique du game over à la variable music
            music.loop = true;  //active la répétition du son en question

            if (muet == 0)  //si le son est activé
            {
                //activation du volume
                music.volume = "1";
            }
            else if (muet == 1) //si le son est désactivé
            {
                //volume à 0
                music.volume = "0";
            }
            music.play(); //joue le son "music"

            //affiche l'image du game over
            var ecran = document.getElementById('ecran');	//la variable ecran devient la balise <img> ayant pour id="ecran"
            var gameover = ecran.getAttribute("src");  //la variable gameover devient la balise "src" contenue dans la balise <img>
            gameover = "gameover_chrono.png"; //change la source de l'image
            ecran.setAttribute("src", gameover);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
            window.location.href="nucleaire.php";  //actualise la page pour relancer une partie
        }

        temps = 60; //on réinitialise le chrono à 60 secondes
    }
    document.getElementById("timer").innerHTML= "<img src='timer.png' style='width:5%;height:5%;'><span style='font-size: 3em;'>&ensp;"+temps+"</span>";
    setTimeout(chrono, 1000);   //on rappelle la fonction dans 1 seconde
}

function bouton(element)
{
    if (teldrapeau == 0)    //désactivé
    {
        document.getElementById("button").style.backgroundColor = "#42b3f4";
        document.getElementById("button").innerHTML = "<img src='drapeau.png' style='width:100%;height:100%;'>";
        var nbcase2 = 1;
        while (nbcase2 <= 256)
        {
            document.getElementById(""+nbcase2+"").setAttribute( "onClick", "javascript: droite(this);" );
            nbcase2++;
        }
        teldrapeau = 1;
    }
    else if (teldrapeau == 1)   //activé
    {
        document.getElementById("button").style.backgroundColor = "grey";
        document.getElementById("button").innerHTML = "";
        var nbcase2 = 1;
        while (nbcase2 <= 256)
        {
            document.getElementById(""+nbcase2+"").setAttribute( "onClick", "javascript: test(this);" );
            nbcase2++;
        }
        teldrapeau = 0;
    }
    
}

    // Decide de la position des bombes
        minBombe = Math.ceil(36);   //décide du total minimum de bombes dans la partie
        maxBombe = Math.floor(63);  //décide du total maximum de bombes dans la partie
        limiteBombe = Math.floor(Math.random() * (maxBombe - minBombe +1)) + minBombe;

    // Decide de la position des bombes nucléaires
        minNuke = Math.ceil(2);   //décide du total minimum
        maxNuke = Math.floor(7);  //décide du total maximum
        limiteNuke = Math.floor(Math.random() * (maxNuke - minNuke +1)) + minNuke;

    // Decide de la position des coeurs     (+5)
        minHeart = Math.ceil(13);   //décide du total minimum
        maxHeart = Math.floor(24);  //décide du total maximum
        limiteHeart = Math.floor(Math.random() * (maxHeart - minHeart +1)) + minHeart;

    //génère les compteurs dans les div aux id correspondants
    document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+limiteBombe+"";    //actualise le compteur des bombes
    //actualise le compteur des bombes nucléaires
    document.getElementById("nuke").innerHTML= "<img src='nuke.png' style='width:2%;height:2%;'> x "+limiteNuke+"";
     //actualise le compteur des coeurs
    document.getElementById("heart").innerHTML= "<img src='heart.png' style='width:2%;height:2%;'> x "+limiteHeart+"";
    //actualise le compteur des drapeaux
    var totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+"";

    //initialisation de la barre de vie
    var vie = 100;
    document.getElementById("vie").style= "width:"+vie+"%; height:100%; background:red;";
    //initialisation du chronomètre
    var temps = 60;
    document.getElementById("timer").innerHTML= "<img src='timer.png' style='width:5%;height:5%;'><span style='font-size: 3em;'>&ensp;"+temps+"</span>";
    setTimeout(chrono, 1000); 

    var tel = document.getElementById("tel").value;
    if (tel == 1)
    { 
        $('#bouton').append($("<div id='button' onclick='bouton(this);' class='gamescreen' style='width: 50px;height: 50px;border: 1px solid black;background-color: grey;'>"));
        var teldrapeau = 0;
    }


