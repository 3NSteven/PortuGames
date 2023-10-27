    var nbcase = 1;
    var nbBOMBE = 1;
    var tasdebombe = [];
    var memoire_tasdebombe = [];
    var proxy_champ
    var moduloDroite = 0;
    var coloneGauche = 0;
    var decouvert = [];
    var drapeaux = [];
    var drapeaux_bis = 0;
    var THISbombe = 0;
    var poscase = 0;
    var buttonPressed = 0;
    var avantBombe = 0;
    var detect2 = [];
    var detect3 = 0;
    var pas = 0;
    var chose = 0;
    
    var explosion = new Audio('explosion.mp3');
    var redo = [];

/*
    if(!$_POST['score']){
        var score = $_POST['score'];
    }
    else{
        var score = 0;
    }
*/    

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
    var proxy2= [];

    //teste si la case fait partie d'une des cases des extrémités
    moduloDroite2 = pas%16;
    //remplit le tableau coloneGauche avec les valeurs des div tout à gauche
    var coloneGauche2 = [];
    var element_ligne_gauche2 = 1;
    var side = 0;

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
                    moduloDroite = poscase%16;
                    //remplit le tableau coloneGauche avec les valeurs des div tout à gauche
                    var coloneGauche = [];
                    var element_ligne_gauche = 1;

                    while (element_ligne_gauche <= 241)
                    {
                        coloneGauche.push(element_ligne_gauche);
                        element_ligne_gauche = element_ligne_gauche + 16;
                    }
                    
                    THISbombe = parseFloat(poscase);
                    coloneGauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau
                    
                    if (moduloDroite==0)
                    {
                        proxy.push(""+THISbombe-17+"");
                        proxy.push(""+THISbombe-16+"");
                        proxy.push(""+THISbombe-1+"");
                        proxy.push(""+THISbombe-(-15)+"");
                        proxy.push(""+THISbombe-(-16)+"");  
                    }
                    else if (coloneGauche >= 0)
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

                    var iftasdebombe = 0; //teste qu'il n'y ait pas de bombes autour de la case
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

                    //test victoire
                    var totaldecouvert = decouvert.length;
                    var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
                    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
                    console.log(restecase);
                    console.log(limiteBombe);
                    console.log(totaldrapeau);
                    if (restecase == limiteBombe)
                    {
                        if (limiteBombe == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
                        {
                            //joue la musique de victoire
                            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
                            music.pause();  //arrête la musique d'arrière plan
                            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
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

                            //affiche l'image de la victoire
                            var ecran = document.getElementById('ecran');
                            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
                            win = "win.png"; //change la source de l'image
                            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

                            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
                            score++;
                            $("#GereScore").val() = score;
                            document.getElementById("GereScore").submit();
                        }
                    }

                    $('#'+ THISbombe +'').empty;
                    if (numero==0)      //attribue le bon numéro à la case +THISbombe+
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='0.png' style='width:100%;height:100%;'>"));
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                        if(chose){

                            chose.style.backgroundColor= "#e8e8e8";
                            blanc(chose);
                        }

                        /*var compris = decouvert.indexOf(poscase);*/
                        /*proxy2.push(THISbombe); */
                        
                    }
                    else if (numero==1)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='1.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==2)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='2.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==3)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='3.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==4)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='4.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==5)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='5.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==6)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='6.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==7)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='7.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                    else if (numero==8)
                    {
                        
                        $('#'+ THISbombe +'').append($("<img src='8.png' style='width:100%;height:100%;'>"));
                        chose.style.backgroundColor= "#e8e8e8";
                        decouvert.push(THISbombe);    //rajoute la case au tableau des cases découvertes
                    }
                }   
            }
        }  
    b++;
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
	//vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
	if (restecase == limiteBombe)
    {
        if (limiteBombe == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
        {
            //joue la musique de victoire
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
            music.pause();  //arrête la musique d'arrière plan
            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
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

            //affiche l'image de la victoire
            var ecran = document.getElementById('ecran');
            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
            win = "win.png"; //change la source de l'image
            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
            score++;
            $("#GereScore").val() = score;
            document.getElementById("GereScore").submit();
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
    var totaldecouvert = decouvert.length;
    var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    if (restecase == limiteBombe)
    {
        if (limiteBombe == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
        {
            //joue la musique de victoire
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
            music.pause();  //arrête la musique d'arrière plan
            music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
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

            //affiche l'image de la victoire
            var ecran = document.getElementById('ecran');
            var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
            win = "win.png"; //change la source de l'image
            ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
            score++;
            $("#GereScore").val() = score;
            document.getElementById("GereScore").submit();
        }
    }
}

// Selectionne une case
function test(element)
{
    if (avantBombe == 0)    //placement des bombes suite au premier clic
    {
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
                THISbombe = element.id;
                poscase = parseFloat(THISbombe);
                var detect2 = [];

                //teste si la case fait partie d'une des cases des extrémités
                moduloDroite = poscase%16;
                //remplit le tableau coloneGauche avec les valeurs des div tout à gauche
                var coloneGauche = [];
                var element_ligne_gauche = 1;

                while (element_ligne_gauche <= 241)
                {
                    coloneGauche.push(element_ligne_gauche);
                    element_ligne_gauche = element_ligne_gauche + 16;
                }
                        
                coloneGauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau         

                if (moduloDroite==0)
                {
                    detect2.push(""+poscase-17+"");
                    detect2.push(""+poscase-16+"");
                    detect2.push(""+poscase-1+"");
                    detect2.push(""+poscase-(-15)+"");
                    detect2.push(""+poscase-(-16)+"");
                    detect2.push(""+poscase+"");
                }
                else if (coloneGauche >= 0)
                {
                    detect2.push(""+poscase-16+"");
                    detect2.push(""+poscase-15+"");
                    detect2.push(""+poscase-(-1)+"");
                    detect2.push(""+poscase-(-16)+"");
                    detect2.push(""+poscase-(-17)+"");
                    detect2.push(""+poscase+"");
                }
                else
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

                detect3 = detect2.indexOf(""+BOMBE+""); //affecte 0 ou + si élément présent et -1 si absent 

                if (detect3 >= 0) //affecte 0 ou + si élément présent et -1 si absent 
                {
                    nbBOMBE--; //recommence l'action
                }    
                else if (detect < 0)
                {
                    tasdebombe.push(""+BOMBE+""); //stocke la coordonnée de la bombe dans le tableau tasdebombe (nbBombe en tout)
                    memoire_tasdebombe.push(""+BOMBE+"");
                }
            
            }
            nbBOMBE++;
        }
    	avantBombe = 1;
    }

    //actualise le compteur des bombes
    var totalbombe = tasdebombe.length ;
    document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+totalbombe+"";
    //actualise le compteur des drapeaux
    var totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+"";
		

	THISbombe = element.id;
    var poscase = element.id;
       
    var testdrapeaux = drapeaux.indexOf(poscase);   //teste si la case est déjà balisée d'un drapeau, affecte 0 ou + si élément présent et -1 si absent 
    if (testdrapeaux < 0)   //si la case n'est pas marquée d'un drapeau
    {
        ifbombe = memoire_tasdebombe.indexOf(THISbombe); //affecte 0 ou + si élément présent et -1 si absent 
        if (ifbombe < 0) //ne trouve pas de bombe, affectation numéro si bombe proche
        {
            THISbombe = parseFloat(THISbombe);
            var proxy= [];

            var testdecouvert = decouvert.indexOf(THISbombe); //teste si la case cliquée a déjà été découverte

            if (testdecouvert < 0)	//si la case n'a pas encore été découverte
        	{
        		//teste si la case fait partie d'une des cases des extrémités
            	moduloDroite = poscase%16;
            	//remplit le tableau coloneGauche avec les valeurs des div tout à gauche
            	var coloneGauche = [];
            	var element_ligne_gauche = 1;

            	while (element_ligne_gauche <= 241)
            	{
                	coloneGauche.push(element_ligne_gauche);
                	element_ligne_gauche = element_ligne_gauche + 16;
            	}
            	
                poscase = parseFloat(THISbombe);
                coloneGauche = coloneGauche.indexOf(poscase); //cherche si la valeur existe dans le tableau
            	
                if (moduloDroite==0)    //si case cliquee tout a droite
                {
                    proxy.push(""+THISbombe-17+"");
                    proxy.push(""+THISbombe-16+"");
                    proxy.push(""+THISbombe-1+"");
                    proxy.push(""+THISbombe-(-15)+"");
                    proxy.push(""+THISbombe-(-16)+"");	
                }
            	else if (coloneGauche >= 0) //si case cliquee tout a gauche
            	{
                	proxy.push(""+THISbombe-16+"");
                	proxy.push(""+THISbombe-15+"");
                	proxy.push(""+THISbombe-(-1)+"");
                	proxy.push(""+THISbombe-(-16)+"");
                	proxy.push(""+THISbombe-(-17)+"");
             	}
            	else    //si case cliquee ni tout a gauche ni tout a droite
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

            	var iftasdebombe = 0; //teste qu'il n'y ait pas de bombes autour de la case
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

            	$('#'+ THISbombe +'').empty;

                var testdecouvert = decouvert.indexOf(poscase); //teste si la case cliquée a déjà été ajoutée au tableau des cases découvertes
                if (testdecouvert < 0)  //si la case n'a pas encore été marquée comme découverte
                {
                    decouvert.push(poscase);    //ajoute le numéro de la case poscase dans le tableau des cases découvertes
                }

            	if (numero==0)		//attribue le bon numéro à la case +THISbombe+
            	{
                 	$('#'+ THISbombe +'').append($("<img src='0.png' style='width:100%;height:100%;'>"));
                 	element.style.backgroundColor= "#e8e8e8";
////
                    //enclenche algorithme des cases blanches
                    blanc(element);
            	}
            	else if (numero==1)
            	{
                	$('#'+ THISbombe +'').append($("<img src='1.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==2)
            	{
                	$('#'+ THISbombe +'').append($("<img src='2.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==3)
            	{
                	$('#'+ THISbombe +'').append($("<img src='3.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==4)
            	{
                	$('#'+ THISbombe +'').append($("<img src='4.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==5)
            	{
                	$('#'+ THISbombe +'').append($("<img src='5.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==6)
            	{
                	$('#'+ THISbombe +'').append($("<img src='6.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==7)
            	{
                	$('#'+ THISbombe +'').append($("<img src='7.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            	else if (numero==8)
            	{
                	$('#'+ THISbombe +'').append($("<img src='8.png' style='width:100%;height:100%;'>"));
                	element.style.backgroundColor= "#e8e8e8";
            	}
            }     
        }
        else if (ifbombe >= 0) //trouve une bombe
        { 
            //joue la musique de game over
            muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session

            music.pause();  //arrête la musique d'arrière plan

            music = new Audio('06 Searching (Game Over).ogg');  //attribue la musique du game over à la variable music
            music.loop = true;  //active la répétition du son en question

            if (muet == 0)  //si le son est activé
            {
                //activation du volume
                explosion.volume = "1"; 
                music.volume = "1";
            }
            else if (muet == 1) //si le son est désactivé
            {
                //volume à 0
                explosion.volume = "0";
                music.volume = "0";
            }
            
            explosion.play(); //joue le son "explosion"
            music.play(); //joue le son "music"

            //fait apparaître la bombe dans la case cliquée sur fond rouge
            $(element).append($("<img src='bomb.png' style='width:100%;height:100%;'>"));
            element.style.backgroundColor= "red";

            //affiche l'image du game over
            var ecran = document.getElementById('ecran');
            var gameover = ecran.getAttribute("src");  //la variable gameover devient la balise "src" contenue dans la balise <img>
            gameover = "gameover.png"; //change la source de l'image
            ecran.setAttribute("src", gameover);   //modifie l'attribut "src" de la balise <img> (change l'image)

            alert('\t\t\tPerdu !\n\nUne nouvelle partie va commencer.');   //ouvre une fenêtre indiquant au joueur qu'il a perdu la partie
            window.location.href="classique.php";  //actualise la page pour relancer une partie
        }  
    }

    	//test victoire
        var totaldecouvert = decouvert.length;
        var restecase = 256-totaldecouvert; //soustrait le nombre de cases cliquées au nombre total de cases de la grille pour obtenir le nombre de cases non-cliquées restantes
    //vérifie si le nombre de case restantes non-découvertes est égal au nombre de bombes
    console.log(restecase);
    console.log(limiteBombe);
    console.log(totaldrapeau);
    if (restecase == limiteBombe)
        {
            if (limiteBombe == totaldrapeau) //vérifie si le nombre de bombe restant est égal au nombre de drapeaux sur la grille
            {
                //joue la musique de victoire
                muet = sessionStorage.getItem("muet");  //récupère la valeur de la variable muet enregitrée dans la session
                music.pause();  //arrête la musique d'arrière plan
                music = new Audio('03 Chibi Ninja (Victory).ogg');  //attribue la musique du game over à la variable music
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

                //affiche l'image de la victoire
                var ecran = document.getElementById('ecran');
                var win = ecran.getAttribute("src");  //la variable win devient la balise "src" contenue dans la balise <img>
                win = "win.png"; //change la source de l'image
                ecran.setAttribute("src", win);   //modifie l'attribut "src" de la balise <img> (change l'image)

                alert('\t\t\tGagné !\n\nVous allez être redirigé vers le menu.');   //ouvre une fenêtre indiquant au joueur qu'il a gagné la partie
                score++;
                $("#GereScore").val() = score;
                document.getElementById("GereScore").submit();
            } 
        }


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
        minBombe = Math.ceil(33);   //décide du total minimum de bombes dans la partie
        maxBombe = Math.floor(58);  //décide du total maximum de bombes dans la partie
        limiteBombe = Math.floor(Math.random() * (maxBombe - minBombe +1)) + minBombe;

    document.getElementById("compteur").innerHTML= "<img src='bomb.png' style='width:2%;height:2%;'> x "+limiteBombe+"";

    var totaldrapeau = drapeaux.length ;
    document.getElementById("drapeau").innerHTML= "<img src='flag.png' style='width:2%;height:2%;'> x "+totaldrapeau+"";

    var tel = document.getElementById("tel").value;
    if (tel == 1)
    { 
        $('#bouton').append($("<div id='button' onclick='bouton(this);' class='gamescreen' style='width: 50px;height: 50px;border: 1px solid black;background-color: grey;'>"));
        var teldrapeau = 0;
    }

