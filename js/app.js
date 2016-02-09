var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',function() {



var caughtPokemonData = [
{
    dex_num: 1,
    name: "Bulbasaur",
    n_name: "Bulby",
    current_lvl: 14,
    types: [
      "grass"
    ],
    move_set: [
      "Tackle",
      "Growl",
      "Leech Seed",
      "Vine Whip"
    ],
    inTeam: false
  },

{
    dex_num: 8,
    name: "Wartortle",
    n_name: "",
    current_lvl: 35,
    types: [
      "water"
    ],
    move_set: [
      "Bite",
      "Water Gun",
      "Protect",
      "Withdraw"
    ],
    inTeam: true
  },

{
    dex_num: 148,
    name: "Dragonair",
    n_name: "",
    current_lvl: 34,
    types: [
      "dragon"
    ],
    move_set: [
      "Slam",
      "Thunder Wave",
      "Twister",
      "Dragon Rage"
    ],
    inTeam: true
  },

{
    dex_num: 57,
    name: "Primeape",
    n_name: "",
    current_lvl: 35,
    types: [
      "fight"
    ],
    move_set: [
      "Rage",
      "Seismic Toss",
      "Karate Chop",
      "Fury Swipes"
    ],
    inTeam: true
  },

{
    dex_num: 64,
    name: "Kadabra",
    n_name: "",
    current_lvl: 34,
    types: [
      "psychic"
    ],
    move_set: [
      "Recover",
      "Disable",
      "Psybeam",
      "Future Sight"
    ],
    inTeam: true
  },

{
    dex_num: 20,
    name: "Raticate",
    n_name: "Fluffy",
    current_lvl: 35,
    types: [
      "normal"
    ],
    move_set: [
      "Pursuit",
      "Cut",
      "Quick Attack",
      "Hyper Fang"
    ],
    inTeam: true
  },

{
    dex_num: 79,
    name: "Slowpoke",
    n_name: "",
    current_lvl: 31,
    types: [
      "water",
      "psychic"
    ],
    move_set: [
      "Surf",
      "Headbutt",
      "Confusion",
      "Disable"
    ],
    inTeam: true
  },

{
  dex_num: 12,
  name: "Butterfree",
  n_name: "Margarine",
  current_lvl: 35,
  types: [
    "bug",
    "flying"
  ],
  move_set: [
    "Aerial Ace",
    "Sleep Powder",
    "Psybeam",
    "Poisonpowder"
  ],
  inTeam: false
},

{
    dex_num: 17,
    name: "Pidgeotto",
    n_name: "Flip",
    current_lvl: 35,
    types: [
      "normal",
      "flying"
    ],
    move_set: [
      "Featherdance",
      "Fly",
      "Wing Attack",
      "Quick Attack"
    ],
    inTeam: false
  },

{
    dex_num: 97,
    name: "Hypno",
    n_name: "D'Eater",
    current_lvl: 35,
    types: [
      "psychic"
    ],
    move_set: [
      "Headbutt",
      "Meditate",
      "Disable",
      "Psychic"
    ],
    inTeam: false
  },

{
    dex_num: 51,
    name: "Dugtrio",
    n_name: "",
    current_lvl: 35,
    types: [
      "ground"
    ],
    move_set: [
      "Dig",
      "Fury Swipes",
      "Mud-Slap",
      "Sand Tomb"
    ],
    inTeam: false
  },

{
    dex_num: 135,
    name: "Jolteon",
    n_name: "",
    current_lvl: 35,
    types: [
      "electric"
    ],
    move_set: [
      "Double Kick",
      "Sand-Attack",
      "Shock Wave",
      "Quick Attack"
    ],
    inTeam: false
  },

{
    dex_num: 37,
    name: "Vulpix",
    n_name: "Pixa",
    current_lvl: 35,
    types: [
      "fire"
    ],
    move_set: [
      "Flamethrower",
      "Quick Attack",
      "Will-O-Wisp",
      "Confuse Ray"
    ],
    inTeam: false
  }

]



var allPokemonData = [
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
        isCaught: true
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
        isCaught: true

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
        isCaught: true

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

      },

      {
        dex_num: 10,
        name: "Caterpie",
        types: [
          "bug"
        ],
        location: "Route 25, Viridian Forest (Red)",
        evolut_chain: [
          10,
          11,
          12
        ],
        base_hp: 45,
        base_atk: 30,
        base_def: 35,
        base_spatk: 20,
        base_spdef: 20,
        base_speed: 45,
        isCaught: true

      },

      {
        dex_num: 11,
        name: "Metapod",
        types: [
          "bug"
        ],
        location: "Route 25, Viridian Forest",
        evolut_chain: [
          10,
          11,
          12
        ],
        base_hp: 50,
        base_atk: 20,
        base_def: 55,
        base_spatk: 25,
        base_spdef: 25,
        base_speed: 30,
        isCaught: true

      },

      {
        dex_num: 12,
        name: "Butterfree",
        types: [
          "bug",
          "flying"
        ],
        location: "unknown",
        evolut_chain: [
          10,
          11,
          12
        ],
        base_hp: 60,
        base_atk: 45,
        base_def: 50,
        base_spatk: 80,
        base_spdef: 80,
        base_speed: 70,
        isCaught: true

      },

      {
        dex_num: 16,
        name: "Pidgey",
        types: [
          "flying"
        ],
        location: "Routes 1-15, 21, 24, 25",
        evolut_chain: [
          16,
          17,
          18
        ],
        base_hp: 40,
        base_atk: 45,
        base_def: 40,
        base_spatk: 35,
        base_spdef: 35,
        base_speed: 56,
        isCaught: true

      },

      {
        dex_num: 17,
        name: "Pidgeotto",
        types: [
          "normal",
          "flying"
        ],
        location: "Route 14, 15, 21",
        evolut_chain: [
          16,
          17,
          18
        ],
        base_hp: 63,
        base_atk: 60,
        base_def: 55,
        base_spatk: 50,
        base_spdef: 50,
        base_speed: 71,
        isCaught: true

      },

      {
        dex_num: 18,
        name: "Pidgeot",
        types: [
          "normal",
          "flying"
        ],
        location: "unknown",
        evolut_chain: [
          16,
          17,
          18
        ],
        base_hp: 83,
        base_atk: 80,
        base_def: 75,
        base_spatk: 70,
        base_spdef: 70,
        base_speed: 91,
        isCaught: false

      },

      {
        dex_num: 19,
        name: "Rattata",
        types: [
          "normal"
        ],
        location: "Route 1, 2, 4, 9, 16, 21, 22",
        evolut_chain: [
          19,
          20
        ],
        base_hp: 30,
        base_atk: 56,
        base_def: 35,
        base_spatk: 25,
        base_spdef: 35,
        base_speed: 72,
        isCaught: true

      },

      {
        dex_num: 20,
        name: "Raticate",
        types: [
          "normal"
        ],
        location: "Route 16, 17, 18, 21",
        evolut_chain: [
          19,
          20
        ],
        base_hp: 55,
        base_atk: 81,
        base_def: 60,
        base_spatk: 50,
        base_spdef: 70,
        base_speed: 97,
        isCaught: true

      },

      {
        dex_num: 37,
        name: "Vulpix",
        types: [
          "fire"
        ],
        location: "Pokemon Mansion",
        evolut_chain: [
          37,
          38
        ],
        base_hp: 38,
        base_atk: 41,
        base_def: 40,
        base_spatk: 50,
        base_spdef: 65,
        base_speed: 65,
        isCaught: true

      },

      {
        dex_num: 38,
        name: "Ninetales",
        types: [
          "fire"
        ],
        location: "unknown",
        evolut_chain: [
          38,
          39
        ],
        base_hp: 73,
        base_atk: 76,
        base_def: 75,
        base_spatk: 81,
        base_spdef: 100,
        base_speed: 100,
        isCaught: false

      },

      {
        dex_num: 50,
        name: "Diglett",
        types: [
          "ground"
        ],
        location: "Diglett's Cave",
        evolut_chain: [
          50,
          51
        ],
        base_hp: 10,
        base_atk: 55,
        base_def: 25,
        base_spatk: 35,
        base_spdef: 45,
        base_speed: 95,
        isCaught: true

      },

      {
        dex_num: 51,
        name: "Dugtrio",
        types: [
          "ground"
        ],
        location: "Diglett's Cave",
        evolut_chain: [
          50,
          51
        ],
        base_hp: 35,
        base_atk: 80,
        base_def: 50,
        base_spatk: 50,
        base_spdef: 70,
        base_speed: 120,
        isCaught: true

      },

      {
        dex_num: 56,
        name: "Mankey",
        types: [
          "fighting"
        ],
        location: "Route 5, 6, 7, 8 (Red)",
        evolut_chain: [
          56,
          57
        ],
        base_hp: 40,
        base_atk: 80,
        base_def: 35,
        base_spatk: 35,
        base_spdef: 45,
        base_speed: 70,
        isCaught: true

      },

      {
        dex_num: 57,
        name: "Primeape",
        types: [
          "fighting"
        ],
        location: "Route 23 (Yellow)",
        evolut_chain: [
          56,
          57
        ],
        base_hp: 65,
        base_atk: 105,
        base_def: 60,
        base_spatk: 60,
        base_spdef: 70,
        base_speed: 95,
        isCaught: true

      },

      {
        dex_num: 63,
        name: "Abra",
        types: [
          "psychic"
        ],
        location: "Route 24, 25",
        evolut_chain: [
          63,
          64,
          65
        ],
        base_hp: 25,
        base_atk: 20,
        base_def: 25,
        base_spatk: 105,
        base_spdef: 55,
        base_speed: 90,
        isCaught: true

      },

      {
        dex_num: 64,
        name: "Kadabra",
        types: [
          "psychic"
        ],
        location: "Cerulean Cave",
        evolut_chain: [
          63,
          64,
          65
        ],
        base_hp: 40,
        base_atk: 35,
        base_def: 30,
        base_spatk: 120,
        base_spdef: 70,
        base_speed: 105,
        isCaught: true

      },

      {
        dex_num: 65,
        name: "Alakazam",
        types: [
          "psychic"
        ],
        location: "unknown",
        evolut_chain: [
          63,
          64,
          65
        ],
        base_hp: 55,
        base_atk: 50,
        base_def: 45,
        base_spatk: 135,
        base_spdef: 85,
        base_speed: 120,
        isCaught: false

      },

      {
        dex_num: 79,
        name: "Slowpoke",
        types: [
          "water",
          "psychic"
        ],
        location: "Route 10, Celadon City, Safari Zone, Seafoam Islands",
        evolut_chain: [
          79,
          80
        ],
        base_hp: 90,
        base_atk: 65,
        base_def: 65,
        base_spatk: 40,
        base_spdef: 40,
        base_speed: 15,
        isCaught: true

      },

      {
        dex_num: 80,
        name: "Slowbro",
        types: [
          "water",
          "psychic"
        ],
        location: "Route 23, Cerulean Cave, Seafoam Islands",
        evolut_chain: [
          80,
          81
        ],
        base_hp: 95,
        base_atk: 75,
        base_def: 110,
        base_spatk: 100,
        base_spdef: 80,
        base_speed: 30,
        isCaught: false

      },

      {
        dex_num: 96,
        name: "Drowzee",
        types: [
          "psychic"
        ],
        location: "Route 11",
        evolut_chain: [
          96,
          97
        ],
        base_hp: 60,
        base_atk: 48,
        base_def: 45,
        base_spatk: 43,
        base_spdef: 90,
        base_speed: 42,
        isCaught: true

      },

      {
        dex_num: 97,
        name: "Hypno",
        types: [
          "psychic"
        ],
        location: "Cerulean Cave",
        evolut_chain: [
          96,
          96
        ],
        base_hp: 85,
        base_atk: 73,
        base_def: 70,
        base_spatk: 73,
        base_spdef: 115,
        base_speed: 67,
        isCaught: true

      },

      {
        dex_num: 133,
        name: "Eevee",
        types: [
          "normal"
        ],
        location: "Gift in Cerulean City",
        evolut_chain: [
          133,
          135
        ],
        base_hp: 55,
        base_atk: 55,
        base_def: 50,
        base_spatk: 45,
        base_spdef: 65,
        base_speed: 55,
        isCaught: true

      },

      {
        dex_num: 135,
        name: "Jolteon",
        types: [
          "electric"
        ],
        location: "unknown",
        evolut_chain: [
          133,
          135
        ],
        base_hp: 65,
        base_atk: 65,
        base_def: 60,
        base_spatk: 110,
        base_spdef: 95,
        base_speed: 130,
        isCaught: true

      },

      {
        dex_num: 147,
        name: "Dratini",
        types: [
          "dragon"
        ],
        location: "Safari Zone",
        evolut_chain: [
          147,
          148,
          149
        ],
        base_hp: 41,
        base_atk: 64,
        base_def: 45,
        base_spatk: 50,
        base_spdef: 50,
        base_speed: 50,
        isCaught: true

      },

      {
        dex_num: 148,
        name: "Dragonair",
        types: [
          "dragon"
        ],
        location: "unknown",
        evolut_chain: [
          147,
          148,
          149
        ],
        base_hp: 61,
        base_atk: 84,
        base_def: 65,
        base_spatk: 70,
        base_spdef: 70,
        base_speed: 70,
        isCaught: true

      },

      {
        dex_num: 149,
        name: "Dragonite",
        types: [
          "dragon"
        ],
        location: "unknown",
        evolut_chain: [
          147,
          148,
          149
        ],
        base_hp: 91,
        base_atk: 134,
        base_def: 95,
        base_spatk: 100,
        base_spdef: 100,
        base_speed: 80,
        isCaught: false

      }
]




this.all_pokemon = allPokemonData;
this.caught_pokemon = caughtPokemonData;

this.isPokemonChosen = false;
this.chosenPartyPoke = null;

//shows pokemon party info box based on if a pokemon in the party was clicked
this.showInfoBox = function(clickedPoke){
  this.isPokemonChosen = !this.isPokemonChosen;
  this.chosenPartyPoke = clickedPoke;
}

this.generateInfoBox = function(){
  console.log("generate");
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
// console.log("print evolut");


var totalEvolut = "";


  //loop through given array of types
  for(var i=0; i<givenDexNums.length; i++){

    this.nextDexNum = givenDexNums[i];
    // console.log(this.nextDexNum);

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

});
