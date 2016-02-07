var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',function() {


this.message = "hello";


var data = [
    {
        dex_num: 1,
        name: "Bulbasaur",
        types: [
          "grass"
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
        dex_num: 2,
        name: "Ivysaur",
        types: [
          "grass",
          "poison"
        ],
        location: "unknown",
        evolut_chain: [
          1,
          2,
          3
        ],
        base_hp: 60,
        base_atk: 62,
        base_def: 63,
        base_spatk: 80,
        base_spdef: 80,
        base_speed: 60,
        isCaught: false

      },

      {
        dex_num: 3,
        name: "Venusaur",
        types: [
          "grass",
          "poison"
        ],
        location: "unknown",
        evolut_chain: [
          1,
          2,
          3
        ],
        base_hp: 80,
        base_atk: 82,
        base_def: 83,
        base_spdef: 100,
        base_spatk: 100,
        base_speed: 80,
        isCaught: false

      },

      {
        dex_num: 4,
        name: "Charmander",
        types: [
          "fire"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 39,
        base_atk: 52,
        base_def: 43,
        base_spatk: 50,
        base_spdef: 50,
        base_speed: 65,
        isCaught: false

      },

      {
        dex_num: 5,
        name: "Charmeleon",
        types: [
          "fire"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 58,
        base_atk: 64,
        base_def: 58,
        base_spatk: 65,
        base_spdef: 65,
        base_speed: 80,
        isCaught: false

      },

      {
        dex_num: 6,
        name: "Charizard",
        types: [
          "fire",
          "flying"
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
          "water"
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

      },

      {
        dex_num: 8,
        name: "Wartortle",
        types: [
          "water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 59,
        base_atk: 63,
        base_def: 80,
        base_spatk: 65,
        base_spdef: 80,
        base_speed: 58,
        isCaught: false

      },

      {
        dex_num: 9,
        name: "Blastoise",
        types: [
          "water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 79,
        base_atk: 83,
        base_def: 100,
        base_spatk: 85,
        base_spdef: 105,
        base_speed: 78,
        isCaught: false

      }
]



this.pokemon = data;

//printTypes takes the types for a given pokemon and prints out
//the stylized type boxes into the Pokedex table

this.printTypes = function(givenTypes){
console.log("print types");
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

      //if you find a match in the all possible types array add it to TotalType
      //with the proper color from allColors
      if(givenType.localeCompare(compareType)==0){
        //console.log("This pokemon is a " + allTypes[j] + " type.");

        // totalType += "<div style='font-style:bold;background-color:" + allColors[j] + ";'>" + allTypes[j] + "</div>";
        totalType += "<div class='type " + allTypes[j] + "'>" + allTypes[j] + "</div>";

      }
    }

  }

  return totalType;

}

this.printEvolut = function(givenDexNums){
console.log("print evolut");


var totalEvolut = "";


  //loop through given array of types
  for(var i=0; i<givenDexNums.length; i++){

    this.nextDexNum = givenDexNums[i];
    console.log(this.nextDexNum);

    totalEvolut += "<p>" + this.pokemon[this.nextDexNum-1].name + "</p>";


  }

  return totalEvolut;




}

});
