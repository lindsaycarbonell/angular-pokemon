var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',[('$http'),function($http) {

  this.caught_pokemon = [];
  _this = this;

  $http.get('js/caught.json')
    .success(function(caughtPokemonData){
      _this.caught_pokemon = caughtPokemonData;

    })
    .error(function(msg){
      console.log("Caught request failed. \n" + msg);

    });


this.isBoxOpen = false;
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
  //there is only a previously clicked pokemon if...
  this.isPreviousExists = this.clickedPokemon.length >= 2;

  console.log("you clicked on: " + clickedPoke);
  console.log("previously you clicked on: " + this.previousPokemon);
  console.log("isBoxOpen: " + this.isBoxOpen);

  this.chosenPartyPoke = clickedPoke;

  //if statement to overcome problem of box closing and not showing new pokemon data
  if(this.isPreviousExists && this.isBoxOpen && this.previousPokemon != clickedPoke){
      this.isBoxOpen = !this.isBoxOpen;
  }

  this.isBoxOpen = !this.isBoxOpen;

  console.log("automatically switch to: " + this.isBoxOpen);
  console.log("isBoxOpen: " + this.isBoxOpen);
}

this.generateInfoBox = function(){
  //console.log("generate");
  return '<p>' + this.chosenPartyPoke + '</p>';
  console.log(this.chosenPartyPoke);
}

}]);
