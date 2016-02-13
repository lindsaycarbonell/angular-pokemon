var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',[('$http'),function($http) {

var _this = this;
this.all_pokemon = [];
this.caught_pokemon = [];
//var caughtPokemonData
//var allPokemonData

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
      //console.log("caught: " + caughtPokemonData);
    })
    .error(function(msg){
      console.log("Caught request failed. \n" + msg);
      console.log("caughtPokemonData" + caughtPokemonData);
    });





// this.all_pokemon = allPokemonData;
//this.caught_pokemon = caughtPokemonData;

this.isPokemonChosen = false;
this.chosenPartyPoke = null;
this.clickedPokeCount = 0;

this.clickedPokemon = [];

//shows pokemon party info box based on if a pokemon in the party was clicked
this.showInfoBox = function(clickedPoke){

  console.log("CLICK:");

  //push the clicked pokemon into an array
  this.clickedPokemon.push(clickedPoke);

  //get the previously clicked pokemon
  this.previousPokemon = this.clickedPokemon[this.clickedPokemon.length-2];
  this.isPreviousExists = this.clickedPokemon.length >= 2;

  console.log("you clicked on: " + clickedPoke);
  console.log("previously you clicked on: " + this.previousPokemon);
  console.log("isPokemonChosen: " + this.isPokemonChosen);

  // this.clickedPokeCount++;
  this.chosenPartyPoke = clickedPoke;

  //if statement to overcome problem of box closing and not showing new pokemon data
  if(this.isPreviousExists && this.isPokemonChosen && this.previousPokemon != clickedPoke){
      this.isPokemonChosen = !this.isPokemonChosen;
  }

  this.isPokemonChosen = !this.isPokemonChosen;
  
  console.log("automatically switch to: " + this.isPokemonChosen);
  console.log("isPokemonChosen: " + this.isPokemonChosen);
}

this.generateInfoBox = function(){
  //console.log("generate");
  return '<p>' + this.chosenPartyPoke + '</p>';
  console.log(this.chosenPartyPoke);
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
        //console.log("This pokemon is a " + allTypes[j] + " type.");

        // totalType += "<div style='font-style:bold;background-color:" + allColors[j] + ";'>" + allTypes[j] + "</div>";
        totalType += "<div class='type " + allTypes[j] + "'>" + allTypes[j] + "</div>";

      }
    }

  }

  return totalType;

}

this.printEvolut = function(givenDexNums, givenName){
// console.log("print evolut");


var totalEvolut = "";

//console.log("start printevolut with " + givenDexNums.length);
  //loop through given array of types
  for(var i=0; i<givenDexNums.length; i++){

    this.nextDexNum = givenDexNums[i];
    //console.log("Given Name: " + givenName);
    //console.log("All: " + givenDexNums);
    //console.log("Next: " + this.nextDexNum);

    totalEvolut += "<p>" + this.all_pokemon[this.nextDexNum-1].name + "</p>";


  }

  return totalEvolut;




}

this.setSort = function(columnName){
  console.log("setSort");
        if (this.sort === columnName){
          this.direction = !this.direction;
        }
        this.sort = columnName;
      }

}]);
