var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',function() {

this.message = "hello";


var data = [
    {
        dex_num: 1,
        name: "Bulbasaur",
        types: [
          "Grass"
        ],
        location: "unknown",
        evolut_chain: [
            1,
            2,
            3
        ],
        base_hp: 45,
        base_atk: 49,
        base_def: 49,
        base_spdef: 65,
        base_spatk: 65,
        base_speed: 45,
        isCaught: false
      },

      {
        dex_num: 6,
        name: "Charizard",
        types: [
          "Fire",
          "Flying"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 78,
        base_atk: 84,
        base_def: 78,
        base_spatk: 85,
        base_spdef: 85,
        base_speed: 100,
        isCaught: false

      },

      {
        dex_num: 7,
        name: "Squirtle",
        types: [
          "Water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 44,
        base_atk: 48,
        base_def: 65,
        base_spatk: 50,
        base_spdef: 64,
        base_speed: 43,
        isCaught: false

      }

]


this.pokemon = data;

this.printTypes = function(givenTypes){

  var allTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel"
  ];

//colors from Bulbapedia
  var allColors = [
      "#A8A878",
      "#F08030",
      "#6890F0",
      "#F8D030",
      "#78C850",
      "#98D8D8",
      "#C03028",
      "#A040A0",
      "#E0C068",
      "#A890F0",
      "#F85888",
      "#A8B820",
      "#B8A038",
      "#705898",
      "#7038F8",
      "#705848",
      "#B8B8D0"
  ];

var totalType = "";

  //loop through given array of types
  for(var i=0; i<givenTypes.length; i++){

    //loop through all possible types
    for(var j=0; j<allTypes.length; j++){
      givenType = givenTypes[i];
      compareType = allTypes[j];

      //if you find a match in the all possible types array...
      if(givenType.localeCompare(compareType)==0){
        console.log("This pokemon is a " + allTypes[j] + " type.");
        console.log("The color for this Pokemon is " + allColors[j] + ".");
        totalType += "<div style='background-color:" + allColors[j] + ";'>" + allTypes[j] + "</div>";
      }
    }

  }

  return totalType;



//now we create and style the types
// var totalType = "";
//
//   for(var i=0; i<givenTypes.length; i++){
//     thisType = givenTypes[i];
//
//     if (numOfTypes == 1){
//       totalType = givenTypes[0];
//     }
//     else if(numOfTypes == 2){
//
//       totalType = givenTypes[0] + "/" + givenTypes[1];
//     }
//
//   }



}




});
