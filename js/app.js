var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',[('$http'),function($http) {

var _this = this;
this.all_pokemon = [];
this.caught_pokemon = [];


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


this.isPokemonChosen = false;
this.chosenPartyPoke = null;
this.clickedPokeCount = 0;

this.clickedPokemon = [];

//shows pokemon party info box based on if a pokemon in the party was clicked
this.showInfoBox = function(clickedPoke){

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

  this.generateInfoBox(this.chosenPartyPoke);
}

this.generateInfoBox = function(){

  //console.log("generate");

  // return '<div class="info-box"><img src="assets/' +
  // this.chosenPartyPoke + '.png" /></div>';
  // console.log(this.chosenPartyPoke);
    console.log("sending in from generateInfoBox: " + this.chosenPartyPoke);
  this.pokemonPath = this.getPokemonPathCaught(this.chosenPartyPoke);


  return '<div style="display:table-row;"><span class="name-cell">' + this.pokemonPath.name + '</span>' + this.printTypes(this.pokemonPath.types) + '</span></div><div style="width:inherit;margin-left:20%;margin-bottom:3%;"><img class="img-cell" src="assets/' + this.pokemonPath.dex_num + '.png" /><div style="display:table-row"><span class="nick-cell">' + this.pokemonPath.n_name + '</span>';
//       <span class="level-cell">/Lv 35</span>
//     </div>
//   </div>
//
//   <ul class="move-box">
//     <li class="move-cell">
//       <span class="move-cell-type type bug">Bug</span>
//       <span>Fury Cutter</span>
//     </li>
//
//     <li class="move-cell">
//       <span class="move-cell-type type grass">Grass</span>
//       <span>Magical Leaf</span>
//     </li>
//     <li class="move-cell">
//       <span class="move-cell-type type grass">Grass</span>
//       <span>Absorb</span>
//     </li>
//     <li class="move-cell">
//         <span class="move-cell-type type normal">Normal</span>
//         <span>Cut</span>
//     </li>
//   </ul>
// </div>



  // console.log(this.chosenPartyPoke);
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
    nextDexNum = givenDexNums[i];
    // console.log("Given Name: " + givenName);
    // console.log("All: " + givenDexNums);
    // console.log("Next: " + nextDexNum + " "+this.all_pokemon[nextDexNum-1].name);
    // console.log("sending in from printEvolut: " + nextDexNum);
    this.pokemonPath = this.getPokemonPathAll(nextDexNum);

    totalEvolut += "<p>" + this.pokemonPath.name + "</p>";

  }
  return totalEvolut;
}

//function to fix the issue of improperly indexed JSON files
this.getPokemonPathAll = function(nextDexNum){
  // console.log("get path where nextDexNum = " + nextDexNum);

  for (var i = 0; i < this.all_pokemon.length; i++){

    if (nextDexNum == this.all_pokemon[i].dex_num){
      // console.log("this is being returned: " + this.all_pokemon[nextDexNum-1].name);
      return this.all_pokemon[nextDexNum-1];
    }

  }

}

this.getPokemonPathCaught = function(nextDexNum){
  // console.log("get path where nextDexNum = " + nextDexNum);

  for (var i = 0; i < this.caught_pokemon.length; i++){

    if (nextDexNum == this.caught_pokemon[i].dex_num){
      // console.log("this is being returned: " + this.all_pokemon[nextDexNum-1].name);
      return this.all_pokemon[nextDexNum-1];
    }

  }

}

this.setSort = function(columnName){
  console.log("setSort");
        if (this.sort === columnName){
          this.direction = !this.direction;
        }
        this.sort = columnName;
      }

}]);
