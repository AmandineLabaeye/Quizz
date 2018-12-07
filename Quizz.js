// [FR] Tableau de question pour Jeux avec les 10 questions
let Question = [

    { // Question 1
        "question": "De combien de joueurs se <br> composent une équipe de football ?"
    },

    { // Question 2
        "question": "Combien faut-il de carton  <br> jaune pour être expulser du terrain ?"
    },

    { // Question 3
        "question": "Quel équipements n'est <br> pas adapté au foot ?"
    },

    { // Question 4
        "question": "Combien mesure la cage <br> de but (en mètres) ?"
    },

    { // Question 5
        "question": "Quelle est la circonférence <br> d'un ballon (en centimètres)?"
    },

    { // Question 6
        "question": "Dans quelle zone se <br> tire un penalty ?"
    },

    { // Question 7
        "question": "Combien mesure un terrain <br> de foot (en mètres) ?"
    },

    { // Question 8
        "question": "A combien de metre <br> se tire un penalty ?"
    },

    { // Question 9
        "question": "Combien pèse <br> un ballon (en grammes) ?"
    },

    { // Question 10
        "question": "Combien il y a t-il d'arbitre sur <br> le terrain lors d'un match ?"
    }

];

// [FR] Tableau de question pour Ecran de résultats avec les 10 questions
let TableauQuestion2 = [

    { // Question 1
        "question": "De combien de joueurs se composent une équipe de football ?"
    },

    { // Question 2
        "question": "Combien faut-il de carton  jaune pour être expulser du terrain ?"
    },

    { // Question 3
        "question": "Quel équipements n'est pas adapté au foot ?"
    },

    { // Question 4
        "question": "Combien mesure la cage de but (en mètres) ?"
    },

    { // Question 5
        "question": "Quelle est la circonférence d'un ballon (en centimètres)?"
    },

    { // Question 6
        "question": "Dans quelle zone se tire un penalty ?"
    },

    { // Question 7
        "question": "Combien mesure un terrain de foot (en mètres) ?"
    },

    { // Question 8
        "question": "A combien de metre se tire un penalty ?"
    },

    { // Question 9
        "question": "Combien pèse un ballon (en grammes) ?"
    },

    { // Question 10
        "question": "Combien il y a t-il d'arbitre sur le terrain lors d'un match ?"
    }

];

// [FR] Tableau de réponse pour Jeux avec les 4 réponses + la value par question
let Reponse = [

    { // Réponse Question 1 value == bonne réponse
        value: "11",
        "Rep0": "8",
        "Rep1": "12",
        "Rep2": "11",
        "Rep3": "15"
    },

    { // Réponse Question 2 value == bonne réponse
        value: "2",
        "Rep0": "3",
        "Rep1": "4",
        "Rep2": "1",
        "Rep3": "2"
    },

    { // Réponse Question 3 value == bonne réponse
        value: "casque",
        "Rep0": "casque",
        "Rep1": "crampon",
        "Rep2": "protèges-tibias",
        "Rep3": "short"
    },

    { // Réponse Question 4 value == bonne réponse
        value: "7.32 de long et 2.44 de hauteur",
        "Rep0": "7.50 de long et 2.60 de hauteur",
        "Rep1": "7.32 de long et 2.44 de hauteur",
        "Rep2": "8.65 de long et 1.50 de hauteur",
        "Rep3": "5.45 de long et 3.00 de hauteur"
    },

    { // Réponse Question 5 value == bonne réponse
        value: "68 à 70",
        "Rep0": "66 à 68",
        "Rep1": "66 à 72",
        "Rep2": "70 à 72",
        "Rep3": "68 à 70"
    },

    { // Réponse Question 6 value == bonne réponse
        value: "surface de réparation",
        "Rep0": "zone de tir au but",
        "Rep1": "zone de penalty",
        "Rep2": "surface de réparation",
        "Rep3": "milieu de terrain"
    },

    { // Réponse Question 7 value == bonne réponse
        value: "90 à 120 de long et 45 à 90 de large",
        "Rep0": "90 à 120 de long et 45 à 90 de large",
        "Rep1": "80 à 110 de long et 35 à 80 de large",
        "Rep2": "100 à 130 de long et 55 à 100 de large",
        "Rep3": "80 à 130 de long et 35 à 80 de large"
    },

    { // Réponse Question 8 value == bonne réponse
        value: "11",
        "Rep0": "12",
        "Rep1": "11",
        "Rep2": "10",
        "Rep3": "9"
    },

    { // Réponse Question 9 value == bonne réponse
        value: "410 à 450",
        "Rep0": "420 à 460",
        "Rep1": "400 à 460",
        "Rep2": "410 à 450",
        "Rep3": "400 à 440"
    },

    { // Réponse Question 10 value == bonne réponse
        value: "3",
        "Rep0": "1",
        "Rep1": "5",
        "Rep2": "2",
        "Rep3": "3"
    }

];

// [FR] Div Résultats est invisible au démarrage de la page
$("#PartieResultats").hide();

// [FR] Div Quizz est invisible au démarrage de la page
$("#PartieQuizz").hide();

// [FR] Seul le titre et le bouton démarrer sont affichés au démarrage de la page

// $("#Reset").hide();

// [FR] Evenement jQuery click sur le bouton demarrer qui fait
$("#Play").click(function () {

    // [FR] Fait disparaitre le bouton play en animation
    $("#Play").fadeOut(function () {

        /* [FR] Apparaitre la div Quizz avec une animation pendant 2 secondes,
                seulement quand le bouton play sera disparu */
        $("#PartieQuizz").fadeIn(2000);

    });

    // [FR] Lance le chrono au clique
    Timer();

});

// [FR] Variable Index à 0
let Index = 0;

// [FR] Variable des bonnes réponses à 0
let BonneRep = 0;

// [FR] Variable des mauvaises réponses à 0
let MauvaiseRep = 0;

// [FR]  Variable des cliques à 0
let Click = 0;

// [FR] Variable des secondes qui commence à 00
let secondes = "00";

// [FR] Variable des minutes qui commence à 00
let minutes = "00";

// [FR] Variable Times (setTimeOut du chrono)
let Times;

// [FR] Variable Selector (Pour éviter de réecrire un élément) Useless
let Selector;

// [FR] Fonction Jeu
function Play() {

    // [FR] On initialise la premiere question en dehors de la boucle avec l'index 0
    $("#Question").html(Question[0].question);

    // [FR] On initialise la premiere proposition en dehors de la boucle avec l'index 0
    $("#Prop1").html(Reponse[0].Rep0);

    // [FR] On initialise la deuxieme proposition en dehors de la boucle avec l'index 0
    $("#Prop2").html(Reponse[0].Rep1);

    // [FR] On initialise la troisième proposition en dehors de la boucle avec l'index 0
    $("#Prop3").html(Reponse[0].Rep2);

    // [FR] On initialise la quatrième proposition en dehors de la boucle avec l'index 0
    $("#Prop4").html(Reponse[0].Rep3);

    // [FR] Boucle i = Nombre de proposition et i s'incrémente de 1 jusqu'a 4 maximum
    for (let i = 1; i <= 4; i++) {

        /* [FR] Rappel de la variable Selector qui stock l'id de base des
                4 proposition plus i  */
        Selector = $("#Prop" + i);

        /* [FR] Fonction qui écoute le clique de la variable Selector
                soit les 4 réponses, donc chaque clique effectuer sur une réponse sera
                écouter */
        Selector.click(function () {

            /* [FR] Si la valeur du value dans le tableau réponse
             est égale au clique sur une réponse alors */
            if (Reponse[Index].value == $("#Prop" + i).html()) {

                // [FR] On incrémente de 1 la variable BonneRep pour les dix questions
                BonneRep++;

            }
            // [FR]  Sinon (Si les deux valeurs sont différentes alors)
            else {

                // [FR] On incrémente de 1 la variable MauvaiseRep pour les dix questions
                MauvaiseRep++;

                /* [FR] A chaque mauvaise réponse on récupere ca question + la bonne
                réponse et on la stocke dans l'écran Résultats */
                $("#MauvaiseReponse").append(TableauQuestion2[Index].question + " La réponse était : " + Reponse[Index].value + "<br><br>");

            }

            // [FR]  On incrémente la variable Click de 1 à chaque clique
            Click++;

            // [FR]  On incrémente la variable Index de 1 à chaque clique
            Index++;

            // [FR] Si la variable Clique est supérieur à 9 alors
            if (Click > 9) {

                $("#PartieQuizz").hide();

                $("#PartieResultats").slideDown(3000);

                Resultats();

            }

            $("#PartieQuizz").fadeOut(1000, function () {

                $("#Question").html(Question[Index].question);

                $("#Prop1").html(Reponse[Index].Rep0);

                $("#Prop2").html(Reponse[Index].Rep1);

                $("#Prop3").html(Reponse[Index].Rep2);

                $("#Prop4").html(Reponse[Index].Rep3);

                $("#PartieQuizz").fadeIn(1000);
            })

        });

    }

}

Play();

function Timer() {

    $("#Temps").html(minutes + " : " + secondes);

    secondes++;

    if (secondes == 60) {

        minutes++;

        secondes = "00";

    }

    Times = setTimeout(Timer, 1000);

}

function Resultats() {

    $("#ResBonne").html("Vous avez trouver " + BonneRep + " bonnes réponses ");

    $("#ResMauvaise").html("Vous avez trouver " + MauvaiseRep + " mauvaises réponses ");

    clearTimeout(Times);

    $("#ResTemps").html("Il vous a fallu " + minutes + " minutes et " + secondes + " secondes");

    minutes = "00";

    secondes = "00";

    // $("#Reset").fadeIn(2000);

}


/* function Reset() {

    $("#PartieResultats").slideUp(2000);

    $("#PartieQuizz").hide();

   //  $("#Reset").hide();

    $("#Play").fadeIn();

    $("#ResBonne").html("");

    $("#ResMauvaise").html("");

    $("#ResTemps").html("");

    $("#MauvaiseReponse").html("");


    minutes = "00";

    secondes = "00";

    Index = 0;

    BonneRep = 0;

    MauvaiseRep = 0;

    Click = 0;

    $("#Question").html(Question[0].question);

    $("#Prop1").html(Reponse[0].Rep0);

    $("#Prop2").html(Reponse[0].Rep1);

    $("#Prop3").html(Reponse[0].Rep2);

    $("#Prop4").html(Reponse[0].Rep3);

    for (let i = 1; i <= 4; i++) {

        Selector.click(function () {

            $("#Question").html(Question[Index].question);

            $("#Prop1").html(Reponse[Index].Rep0);

            $("#Prop2").html(Reponse[Index].Rep1);

            $("#Prop3").html(Reponse[Index].Rep2);

            $("#Prop4").html(Reponse[Index].Rep3);

        });

    }

}

$("#Reset").click(function () {

    Reset();

}); */
