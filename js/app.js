var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',[('$http'),function($http) {

var _this = this;
this.all_pokemon = [];
this.caught_pokemon = [];
this.pokemon_moves = [];


$http.get('js/pokedex.json')
    .success(function(allPokemonData){
      _this.all_pokemon = allPokemonData;
    })
    .error(function(msg){
      console.log("Pokedex request failed. \n" + msg);
    });


$http.get('js/caught.json')
    .success(function(caughtPokemonData){
      _this.caught_pokemon = caughtPokemonData;

    })
    .error(function(msg){
      console.log("Caught request failed. \n" + msg);

    });

$http.get('js/movedex.json')
    .success(function(pokemonMoveData){
      _this.pokemon_moves = pokemonMoveData;
      //console.log("caught: " + caughtPokemonData);
    })
    .error(function(msg){
      console.log("Caught request failed. \n" + msg);
      //console.log("pokemonMoveData" + pokemonMoveData);
    });

// this.isMobileShown = false;
//
// if(document.getElementsByClassName('.mobile-only').style.display == "none"){
//   this.isMobileShown = true;
// } else {
//   this.isMobileShown = false;
// }

this.isPokemonChosen = false;
this.chosenPartyPoke = null;
this.clickedPokeCount = 0;

this.clickedPokemon = [];

//shows pokemon party info box based on if a pokemon in the party was clicked
//passing in clickedPoke as an integer
this.showInfoBox = function(clickedPoke, isMobile){

  // console.log("CLICK:");

  //push the clicked pokemon into an array
  this.clickedPokemon.push(clickedPoke);

  //get the previously clicked pokemon
  this.previousPokemon = this.clickedPokemon[this.clickedPokemon.length-2];
  this.isPreviousExists = this.clickedPokemon.length >= 2;

  // console.log("you clicked on: " + clickedPoke);
  // console.log("previously you clicked on: " + this.previousPokemon);
  // console.log("isPokemonChosen: " + this.isPokemonChosen);

  // this.clickedPokeCount++;
  this.chosenPartyPoke = clickedPoke;

  //if statement to overcome problem of box closing and not showing new pokemon data
  if(this.isPreviousExists && this.isPokemonChosen && this.previousPokemon != clickedPoke){
      this.isPokemonChosen = !this.isPokemonChosen;
  }

  this.isPokemonChosen = !this.isPokemonChosen;

  // console.log("automatically switch to: " + this.isPokemonChosen);
  // console.log("isPokemonChosen: " + this.isPokemonChosen);

  this.generateInfoBox(this.chosenPartyPoke, isMobile);
}

this.generateInfoBox = function(chosenPoke, isMobile){

  //console.log("generate");


  console.log("sending in from generateInfoBox: " + chosenPoke);
  this.pokemonPath = this.getPokemonPathCaught(chosenPoke);

  // console.log("path: " + this.pokemonPath.n_name);
  console.log("move set: " + this.pokemonPath.move_set);

  if(isMobile){
    document.getElementById("add-info-mobile").innerHTML = '<div class="row"><div class="col-xs-5 col-xs-offset-3" style="margin-left:30%!important;"><div style="display:table-row;"><span class="name-cell">' + this.pokemonPath.name + '</span>' + this.getN_Name() + this.printTypes(this.pokemonPath.types) + '</span></div><div style="width:inherit;margin-left:20%;margin-bottom:3%;"><img class="img-cell-mobile" src="assets/' + this.pokemonPath.dex_num + '.png" /><div style="display:table-row"><span class="level-cell">Lv' +  this.pokemonPath.current_lvl + '</span></div></div><ul class="move-box mobile-fix">' + this.printMoves(this.pokemonPath.move_set) +  '</ul></div></div>';
  } else{

  document.getElementById("add-info").innerHTML = '<div style="display:table-row;"><span class="name-cell">' + this.pokemonPath.name + '</span>' + this.getN_Name() + this.printTypes(this.pokemonPath.types) + '</span></div><div style="width:inherit;margin-left:20%;margin-bottom:3%;"><img class="img-cell" src="assets/' + this.pokemonPath.dex_num + '.png" /><div style="display:table-row"><span class="level-cell">Lv' +  this.pokemonPath.current_lvl + '</span></div></div><ul class="move-box">' + this.printMoves(this.pokemonPath.move_set) +  '</ul>';

}

  // console.log(this.chosenPartyPoke);
}


this.getN_Name = function(){
  console.log("nick name: " + this.pokemonPath.n_name);
  if(this.pokemonPath.n_name){

    return  '<span class="nick-cell">/&#8220;' + this.pokemonPath.n_name + '&#8221;</span>';
  }
  else return '<span style="padding-right:20px;"></span>';

}


//printTypes takes the types for a given pokemon and prints out
//the stylized type boxes into the Pokedex table

this.printTypes = function(givenTypes){
// console.log("print types");
  var allTypes = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel"
  ];



var totalType = "";

  //loop through given array of types
  for(var i=0; i<givenTypes.length; i++){

    //loop through all possible types
    for(var j=0; j<allTypes.length; j++){
      givenType = givenTypes[i];
      compareType = allTypes[j];


      if(givenType.localeCompare(compareType)==0){

        totalType += "<div class='type " + allTypes[j] + "'>" + allTypes[j] + "</div>";

      }
    }

  }

  return totalType;

}

this.printMoves = function(moveSet){
  var allMoves = "";

  for(var i = 0; i < 4; i++){

    for(var j = 0; j < this.pokemon_moves.length; j++){

      if(moveSet[i].localeCompare(this.pokemon_moves[j].name) == 0){

        allMoves += '<li class="move-cell"><span class="move-cell-type type ' + this.pokemon_moves[j].type + '">' + this.pokemon_moves[j].type + '</span><span>' + this.pokemon_moves[j].name + '</li>';

      }
    }

  }
  return allMoves;
}

this.printEvolut = function(givenDexNums){

  var totalEvolut = "";

  //loop through given array of types
  for(var i = 0; i < givenDexNums.length; i++){
    this.nextDexNum = givenDexNums[i];

    this.pokemonPath = this.getPokemonPathAll(this.nextDexNum);

    totalEvolut += "<p>" + this.pokemonPath.name + "</p>";

  }
  return totalEvolut;
}

//function to fix the issue of improperly indexed JSON files
this.getPokemonPathAll = function(nextDexNum){

  for (var i = 0; i < this.all_pokemon.length; i++){

    if (nextDexNum == this.all_pokemon[i].dex_num){
      return this.all_pokemon[i];
    }

  }

}

this.getPokemonPathCaught = function(nextDexNum){

  for (var i = 0; i < this.caught_pokemon.length; i++){

    if (nextDexNum == this.caught_pokemon[i].dex_num){
      return this.caught_pokemon[i];
    }

  }

}

this.getMovePath = function(moveName){

  for (var i = 0; i < this.pokemon_moves.length; i++){

    if (moveName.localeCompare(this.pokemon_moves[i].name) === 0){
      return this.pokemon_moves[i];
    }

  }

}

this.setCaught = function(){

  $('.checkbox').change(function(){
    console.log("checkbox changed!");
    // var c = this.checked ? '#f00' : '#09f';
    // $('p').css('color', c);
  });

}


this.setSort = function(columnName){
  console.log("setSort");
        if (this.sort === columnName){
          this.direction = !this.direction;
        }
        this.sort = columnName;
      }

}]);
