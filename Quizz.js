let Question = [

    { // Question 1
        "question": "De combien de joueurs se composent une équipe de football ?"
    },

    { // Question 2
        "question": "Combien faut-il de carton jaune pour être expulser du terrain ?"
    },

    { // Question 3
        "question": "Quel équipements n'est pas adapté au foot ?"
    },

    { // Question 4
        "question": "Combien mesure la cage de but (en metres) ?"
    },

    { // Question 5
        "question": "Quelle est la circonférence d'un ballon (en centimetre)?"
    },

    { // Question 6
        "question": "Dans quelle zone se tire un penalty ?"
    },

    { // Question 7
        "question": "Combien mesure un terrain de foot (en metre) ?"
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
        value: "7.32 de long & 244 de hauteur",
        "Rep0": "7.50 de long & 260 de hauteur",
        "Rep1": "7.32 de long & 244 de hauteur",
        "Rep2": "8.65 de long & 150 de hauteur",
        "Rep3": "5.45 de long & 300 de hauteur"
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
        value: "90 à 120 de long & 45 à 90 de large",
        "Rep0": "90 à 120 de long & 45 à 90 de large",
        "Rep1": "80 à 110 de long & 35 à 80 de large",
        "Rep2": "100 à 130 de long & 55 à 100 de large",
        "Rep3": "80 à 130 de long & 35 à 80 de large"
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

$("#PartieResultats").hide();

let Index = 0;

let BonneRep = 0;

let MauvaiseRep = 0;

var Click = 0;

let Selector;

$("#Question").html(Question[0].question);

$("#Prop1").html(Reponse[0].Rep0);

$("#Prop2").html(Reponse[0].Rep1);

$("#Prop3").html(Reponse[0].Rep2);

$("#Prop4").html(Reponse[0].Rep3);


for (let i = 1; i <= 4; i++) {

    Selector = $("#Prop" + i);

    Selector.click(function () {

        if (Reponse[Index].value == $("#Prop" + i).html()) {

            BonneRep++;
            console.log(BonneRep);

        } else {

            MauvaiseRep++;
            console.log(MauvaiseRep);

        }

        Click++;
        Index++;
        console.log(Index);
        console.log(Click);

        if (Click > 9) {

            $("#PartieQuizz").hide();

            $("#PartieResultats").show();

            Resultats ();

        }

        $("#Question").html(Question[Index].question);

        $("#Prop1").html(Reponse[Index].Rep0);

        $("#Prop2").html(Reponse[Index].Rep1);

        $("#Prop3").html(Reponse[Index].Rep2);

        $("#Prop4").html(Reponse[Index].Rep3);

    });
    
}

function Resultats () {

    $("#ResBonne").html("Vous avez trouver " + BonneRep + " bonnes réponses ");

    $("#ResMauvaise").html("Vous avez trouver " + MauvaiseRep + " mauvaises réponses ")

    $("#ResTemps").html("");

}