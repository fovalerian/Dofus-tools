$(document).ready(function(){
  console.log("#### Event DocumentReady")
// 1.Goal : 
// Fusioner ce projet avec mon ancien pour avoir menu/header/footer a peu près propre
// PHP simple ou Synfoni ? :(

// 2.Goal
// Faire un formulaire (Mailsender) boite à idée
// Voir si c'est possible de gober les donner de l'encyclopédie dofus
// Faire une bdd pour stocker les info item/classe:sort
//([Niveau de l'attaquant]/2 + [Dommages de poussée de l'attaquant - résistances de poussée de la cible] + 32) * [Distance de poussée restante]/4
// Class ##################################################

class sort {
  constructor(puissance,dommage,name) {
    this.puissance = puissance;
    this.dommage = dommage;
    this.name = namme;
  }

}

class Stats {
  constructor (intel,chance,agi,force,puissance,dommage,dommageFeu,dommageEau,dommageAir,dommageTerre,dommageNeutre,name) {
    this.intel = intel;
    this.chance = chance;
    this.agi = agi;
    this.force = force;
    this.puissance = puissance;
    this.dommage =  dommage;
    this.dommageFeu = dommageFeu;
    this.dommageEau = dommageEau;
    this.dommageAir = dommageAir;
    this.dommageTerre = dommageTerre;
    this.dommageNeutre = dommageNeutre;
    this.name = name;

  }

  myToString () {
    return "intel " +this.intel+"chance "+this.chance+"agi "+this.agi+"force "+this.force+"puissance "+this.puissance+
    "dommage "+this.dommage+"dommageFeu "+this.dommageFeu+"dommageEau "+this.dommageEau+"dommageAir "+this.dommageAir+
    "dommageTerre "+this.dommageTerre+"dommageNeutre "+this.dommageNeutre;
  }

  toJson () {
    return {
      agi : this.agi,
      intel: this.intel,
      force : this.force,
      chance : this.chance,
      dommage : this.dommage,
      puissance : this.puissance,
      dommageFeu : this.dommageFeu,
      dommageEau : this.dommageEau,
      dommageAir : this.dommageAir,
      dommageTerre : this.dommageTerre,
      dommageNeutre: this.dommageNeutre
    };
  }

  getStatsFromJson(json) {
    this.agi = json.agi;
    this.force = json.force;
    this.intel = json.intel;
    this.chance = json.chance;
    this.dommage = json.Dommage;
    this.puissance = json.puissance;
    this.dommageFeu = json.dommageFeu;
    this.dommageAir = json.dommageAir;
    this.dommageEau = json.dommageEau;
    this.dommageTerre = json.dommageTerre;
    this.dommageNeutre = json.dommageNeutre;

  }
}

class Degat {
  constructor(dommage,element,minMax){
    this.dommage = dommage;
    this.element = element;
    this.minMax = minMax;
  }
}


// Variable  ############################################
var countLigne = 0;
var fashionistaLink;
console.log("Instanciation de countligne = 0");
// Main  ############################################
addLigneOnClick();

$("#help").click(function(){
  help();
});

$("#toto").click(function(){
  help();
});

$("#cleanLignes").click(function(){
  cleanLignes();
});

$("#fashionista").click(function(){
  fashionista();
});

$("#cleanDo").click(function(){
   cleanDo();
});

$("#cleanStats").click(function(){
  cleanStats();
});

$("#cleanAll").click(function(){
    cleanAll();
});

$("#actionButton").click(function(){
    afficherDommage();
});

$("#save").click(function() {
    save();
});

$('#load').click(function(){
  load();
});

$('#dayNNight').click(function(){
  dayNNight();
});

$('#lessImgHelp').click(function(){
  plusDivs(-1);
})

$('#moreImgHelp').click(function(){
  plusDivs(1);
})

// TEST SESSION 
// Enregistrer des données dans sessionStorage
var imgFocus = 0;
var slideShowImg = $('#slideShow').children('img');

function help() {
  $('#slidShowHelp').is(':visible') ? $('#slidShowHelp').hide() : $('#slidShowHelp').show();
  console.log($('#slidShowHelp').is(':visible'));
  console.log($(slideShowImg[0]));
  $(slideShowImg).hide();
  $(slideShowImg[imgFocus]).show();
}

function plusDivs(int) {
  var lastFocusIndex;

  for (var i = 0; i < ($(slideShowImg)).length; i++) {
    if ($(slideShowImg[i]).is(':visible')) {
            lastFocusIndex = i;
    }
    console.log(i + " visible ? " + $(slideShowImg[i]).is(':visible'))
  } 
  if (lastFocusIndex + int >= 0 && lastFocusIndex+int < slideShowImg.length) {
    $(slideShowImg[lastFocusIndex]).hide();
    $(slideShowImg[lastFocusIndex+int]).show();
  }
}


function dayNNight() {
  $('body').hasClass('w3-light-gray') ? setNight() : setDay();
  setLinesColor();
}

function setDay() {
  $('#dayNNight').text('Mode nuit');
  $('#dayNNight').removeClass('w3-hover-khaki');
  $('#dayNNight').addClass('w3-hover-blue-gray');
//BODY
  $('body').attr('class','w3-light-gray');
// NAVBAR
  $('#navBar').removeClass('w3-dark-grey');
  $('#navBar').addClass('w3-light-gray');
// INPUT
  $("#intel").removeClass('w3-gray');
  $("#chance").removeClass('w3-gray');
  $("#agi").removeClass('w3-gray');
  $("#force").removeClass('w3-gray');
  $("#puissance").removeClass('w3-gray');
  $("#doFeu").removeClass('w3-gray');
  $("#doEau").removeClass('w3-gray');
  $("#doAir").removeClass('w3-gray');
  $("#doTerre").removeClass('w3-gray');
  $("#doNeutre").removeClass('w3-gray');
  $("#dommage").removeClass('w3-gray');
  $("#intel").addClass('w3-white');
  $("#chance").addClass('w3-white');
  $("#agi").addClass('w3-white');
  $("#force").addClass('w3-white');
  $("#puissance").addClass('w3-white');
  $("#doFeu").addClass('w3-white');
  $("#doEau").addClass('w3-white');
  $("#doAir").addClass('w3-white');
  $("#doTerre").addClass('w3-white');
  $("#doNeutre").addClass('w3-white');
  $("#dommage").addClass('w3-white');
}

function setNight() {
  $('#dayNNight').text('Mode jour');
  $('#dayNNight').removeClass('w3-hover-blue-gray');
  $('#dayNNight').addClass('w3-hover-khaki');
// BODY
  $('body').attr('class','w3-dark-grey');
// NAVBAR
  $('#navBar').removeClass('w3-light-gray');
  $('#navBar').addClass('w3-dark-grey');
// INPUT
  $("#intel").removeClass('w3-white');
  $("#chance").removeClass('w3-white');
  $("#agi").removeClass('w3-white');
  $("#force").removeClass('w3-white');
  $("#puissance").removeClass('class','w3-white');
  $("#doFeu").removeClass('w3-white');
  $("#doEau").removeClass('w3-white');
  $("#doAir").removeClass('w3-white');
  $("#doTerre").removeClass('w3-white');
  $("#doNeutre").removeClass('w3-white');
  $("#dommage").removeClass('w3-white');
  $("#intel").addClass('w3-gray');
  $("#chance").addClass('w3-gray');
  $("#agi").addClass('w3-gray');
  $("#force").addClass('w3-gray');
  $("#puissance").addClass('w3-gray');
  $("#doFeu").addClass('w3-gray');
  $("#doEau").addClass('w3-gray');
  $("#doAir").addClass('w3-gray');
  $("#doTerre").addClass('w3-gray');
  $("#doNeutre").addClass('w3-gray');
  $("#dommage").addClass('w3-gray');



  //.addClass('w3-light-gray');
}

function setLinesColor() {
  if ($('body').hasClass('w3-light-gray')) {
    $('#divLignes').find('input').removeClass('w3-gray');
    $('#divLignes').find('input').addClass('w3-white');  
  } else {
    $('#divLignes').find('input').removeClass('w3-white');
    $('#divLignes').find('input').addClass('w3-gray');    
  }
}


function fashionista() {
  fashionistaStats = prompt("Coller le tableau des stats fashionista : ");
  if (fashionistaStats!=null) {

      var strings = fashionistaStats.split(" ");
      var countFashinista=0;

      $("#intel").val(strings[13]);
      $("#chance").val(strings[16]);
      $("#agi").val(strings[19]);
      $("#force").val(strings[10]);
      $("#puissance").val(strings[21]);
      $("#doFeu").val(strings[96]);
      $("#doEau").val(strings[99]);
      $("#doAir").val(strings[102]);
      $("#doTerre").val(strings[93]);
      $("#doNeutre").val(strings[90]);
      $("#dommage").val(strings[87]);

      strings.forEach(function(string){
        console.log(string + " -> " +countFashinista);
        countFashinista++;
      });

  }
}

function setFashionista(string,count) {
  console.log("")
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// From w3c - a téster // COOKIIIIIIE FDP
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function save() {
    var statsToSave = getStatsFromInput().toJson();
    var newStatsToSave = JSON.stringify(statsToSave)
    setCookie("stats",newStatsToSave,360);
    console.log("COOKIE" + newStatsToSave);
}

function load(){
    var cookies = getCookie('stats');

    if (typeof cookies !== "undefined" ) {
      var stats = JSON.parse(cookies);

      $("#intel").val(stats.intel);
      $("#chance").val(stats.chance);
      $("#agi").val(stats.agi);
      $("#force").val(stats.force);
      $("#puissance").val(stats.puissance);
      $("#doFeu").val(stats.dommageFeu);
      $("#doEau").val(stats.dommageEau);
      $("#doAir").val(stats.dommageAir);
      $("#doTerre").val(stats.dommageTerre);
      $("#doNeutre").val(stats.dommageNeutre);
      $("#dommage").val(stats.dommage);
    } else {
      console.log("Cookie = undefined");

     } 
}

// Function  ############################################

function getColorligne(element) {
  if (element == "feu") {
    return "red";
  }

  if (element == "eau") {
    return "indigo";
  }

  if (element == "air") {
    return "teal";
  }

  if (element == "terre") {
    return "brown";
  }

  if (element == "neutre") {
    return "gray";
  }

  return "black";
}

// Ajout d'une ligne en réponse du boutton cliqué
function addLigneOnClick() {
  $("#feu").click(function(){
    addElem($(this).val());
    console.log("#### Event Click -> addLigneOnClick() :"+$(this).val());
  });
  $("#eau").click(function(){
    addElem($(this).val());
    console.log("#### Event Click -> addLigneOnClick() :"+$(this).val());
  });
  $("#air").click(function(){
    addElem($(this).val());
    console.log("#### Event Click -> addLigneOnClick() :"+$(this).val());
  });
  $("#terre").click(function(){
    addElem($(this).val());
    console.log("#### Event Click -> addLigneOnClick() :"+$(this).val());
  });
  $("#neutre").click(function(){
    addElem($(this).val());
    console.log("#### Event Click -> addLigneOnClick() :"+$(this).val());
  });
}

function afficherDommage () {
    console.log("#### actionButton -> "+ "afficherDommage ()");
    $("#result").children().remove();
    var resultDommages = calculDegatOnClick();
    var count = 0;
    var minMax;
    var text1 = "Vous allez infliger ";
    var text2 = " - ";
    var textMin;
    var textMax;
    var color = "black";
  

    resultDommages.forEach(function(dmg) {
      console.log(dmg.element + " ####### "+ getColorligne(dmg.element));
      if (dmg.minMax == "min") {
        textMin = text1 + dmg.dommage;
      } else {
        color = getColorligne(dmg.element);
        textMax = text2+ dmg.dommage + " " + dmg.element ;
        $("#result").append(
        "<p id =\"resultP\" class=\" w3-animate-left w3-text-"+color+"\">"+textMin + textMax + ".</p>"
        )
        count++;
        console.log("Dommage affiché !");
      }
    });
}

// calculDegatOnClick aura besoin des liste en argument
function calculDegatOnClick() {
  console.log("#### calculDegatOnClick()");
  var lignes = getIdLignes();
  var dommagelignes = getDommageLignes();
  var stats = getStatsFromInput();
  var resultDommages = new Array();;
  var count = 0;

  console.log("calculDegatOnClick() -> Propriétées chargées !");
  console.log(lignes.join(" ,"));
  for (var i=0; i < dommagelignes.length;i++){console.log(dommagelignes[i]);}
  lignes.forEach(function(item) {
  var degat = new Degat();
  console.log("Switch on "+item.charAt(3));

  switch(item.charAt(3)) {
    case "f": // Degat feu 
    degat.dommage = Math.round(dommagelignes[count] + stats.dommageFeu + stats.dommage +
     (dommagelignes[count] * stats.puissance / 100) + (dommagelignes[count] * stats.intel/ 100 ));
    degat.element = "feu";
    if (item.charAt(1) == "a") {
      degat.minMax = "max";
    } else {
      degat.minMax = "min";
    }
    console.log("calculDegatOnClick() -> Switch case fait "+degat.element+", "+degat.minMax);
    resultDommages.push(degat);

  count++;    
    break;
    case "e": // Degat eau
    degat.dommage = Math.round(dommagelignes[count] + stats.dommageEau + stats.dommage +
     (dommagelignes[count] * stats.puissance / 100) + (dommagelignes[count] * stats.chance/ 100 ));
    degat.element = "eau";
    if (item.charAt(1) == "a") {
      degat.minMax = "max";
    } else {
      degat.minMax = "min";
    }
    console.log("calculDegatOnClick() -> Switch case fait "+degat.element+", "+degat.minMax);
    resultDommages.push(degat);

  count++;
    break;
    case "a": // Degat air
    degat.dommage = Math.round(dommagelignes[count] + stats.dommageAir + stats.dommage +
     (dommagelignes[count] * stats.puissance / 100) + (dommagelignes[count] * stats.agi/ 100 ));
    degat.element = "air";
    if (item.charAt(1) == "a") {
      degat.minMax = "max";
    } else {
      degat.minMax = "min";
    }
    console.log("calculDegatOnClick() -> Switch case fait "+degat.element+", "+degat.minMax);
    resultDommages.push(degat);

  count++;
    break;
    case "t": // Degat terre
    degat.dommage = Math.round(dommagelignes[count] + stats.dommageTerre + stats.dommage +
     (dommagelignes[count] * stats.puissance / 100) + (dommagelignes[count] * stats.force/ 100 ));
    degat.element = "terre";
    if (item.charAt(1) == "a") {
      degat.minMax = "max";
    } else {
      degat.minMax = "min";
    }
    console.log("calculDegatOnClick() -> Switch case fait "+degat.element+", "+degat.minMax);
    resultDommages.push(degat);

  count++;
    break;
    case "n": // Degat neutre
    degat.dommage = Math.round(dommagelignes[count] + stats.dommageNeutre + stats.dommage +
     (dommagelignes[count] * stats.puissance / 100) + (dommagelignes[count] * stats.force/ 100 ));
    degat.element = "neutre";
    if (item.charAt(1) == "a") {
      degat.minMax = "max";
    } else {
      degat.minMax = "min";
    }
    console.log("calculDegatOnClick() -> Switch case fait "+degat.element+", "+degat.minMax);
    resultDommages.push(degat);

  count++;
    break;

    console.log("..!.."+degat.minMax + " " +degat.dommage + " "+ degat.element);
    }

    // AJOUTER LES DEGATS SUP DU SORT ICI 

  });

  return resultDommages;
}

// Ajoute l'élement en fonction de l'id sur le boutton cliqué dans la div #lignes
function addElem(element) {
  console.log("#### addElem() -> Check si le nombre de ligne est < à 6")
  countLigne++;
  if (countLigne < 6 ) {
  $("#divLignes").append(
    "<div id =\"lignes"+countLigne+"\" class=\"w3-col\" style=\"width: 20%\">" + 
    "<input id=\"min"+element+countLigne+"\" class=\"w3-input w3-border w3-round-large w3-padding\" type=\"text\" placeholder=\"min "+element+"\">"+
    "<input id=\"max"+element+countLigne+"\" class=\"w3-input w3-border w3-round-large w3-padding\" type=\"text\" placeholder=\"max "+element+"\">"+
    "</div>");
    console.log("Div lignes"+countLigne);
  }
  setLinesColor();
}

// Renvoie le premier char du de l'id du min au max de tous les dégats ajouté dans une liste
function getIdLignes() {
  var countId = 1;
  var lignes = new Array();
  console.log("#### getIdLignes()");
  $('#divLignes').children().each(function(){
    var childId ='#'+ $(this).attr('id');
    console.log(childId);
    $(childId).children().each(function(){
        console.log("on ajoute l'id : "+$(this).attr('id')+" à la liste retourné par getIdLignes()");
        lignes.push($(this).attr('id'));
        console.log("test Array : "+lignes[countId-1])
        countId++;
    });
  });
  return lignes; // Format des donné min/max+elem+rangMin/Max ex : minfeu1 = [0], maxfeu1 = [1]
}

// Renvoie la valeur de la ligne
function getDommageLignes() {
  console.log("#### getDommageLignes()");
  var countId = 1;
  var lignesDommage = new Array();
  $('#divLignes').children().each(function(){
    var childId ='#'+ $(this).attr('id');
    console.log(childId);
    $(childId).children().each(function(){
        console.log("on ajoute la valeur : "+$(this).val()+" à la liste retourné par getDommageLignes()");
        lignesDommage.push(parseInt($(this).val()));
      });
        countId++;
  });
  return lignesDommage;
}

// Retourne les stats
function getStatsFromInput() {
  console.log("getStatsFromInput()")
  var stats = new Stats();
  stats.intel = parseInt($("#intel").val());
  stats.chance = parseInt($("#chance").val());
  stats.agi = parseInt($("#agi").val());
  stats.force = parseInt($("#force").val());
  stats.puissance = parseInt($("#puissance").val());
  stats.dommageFeu = parseInt($("#doFeu").val());
  stats.dommageEau = parseInt($("#doEau").val());
  stats.dommageAir = parseInt($("#doAir").val());
  stats.dommageTerre = parseInt($("#doTerre").val());
  stats.dommageNeutre = parseInt($("#doNeutre").val());
  stats.dommage = parseInt($("#dommage").val());

  if (isNaN(stats.intel)) {
    stats.intel = 0;
  }
  if (isNaN(stats.chance)) {
    stats.chance = 0;
  }
  if (isNaN(stats.agi)) {
    stats.agi = 0;
  }
  if (isNaN(stats.force)) {
    stats.force = 0;
  }
  if (isNaN(stats.puissance)) {
    stats.puissance = 0;
  }
  if (isNaN(stats.dommageFeu)) {
    stats.dommageFeu = 0;
  }
  if (isNaN(stats.dommageEau)) {
    stats.dommageEau = 0;
  }
  if (isNaN(stats.dommageAir)) {
    stats.dommageAir = 0;
  }
  if (isNaN(stats.dommageTerre)) {
    stats.dommageTerre = 0;
  }
  if (isNaN(stats.dommageNeutre)) {
    stats.dommageNeutre= 0;
  }
  if (isNaN(stats.dommage)) {
    stats.dommage = 0;
  }
  console.log(stats.myToString());
  return stats;
 }

function cleanStats() {
    $('#statsInput').children().each(function(){
      $(this).children('input').val('');
      });
  }

function cleanDo() {
    $('#dommageInput').children().each(function(){
      $(this).children('input').val('');
  });
}

function cleanLignes() {
    $('#divLignes').children().remove();
    countLigne = 0;
  }

function cleanAll() {
    $('#statsInput').children().each(function(){
      $(this).children('input').val('');
    });
    $('#dommageInput').children().each(function(){
      $(this).children('input').val('');
    });
    $('#result').children().remove();
    $('#divLignes').children().remove();
    countLigne = 0;
}

}); // END DOC RDY

