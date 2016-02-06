var app = angular.module('mainApp',[]);

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

      }

]


this.pokemon = data;

this.printTypes = function(pokeTypes){
  var printedType = "";
  console.log("print types: " + pokeTypes);

  for(var i=0; i<pokeTypes.length; i++){
    thisType = pokeTypes[i];
    if(thisType=="Fire"){
      printedType += "Fire";
    }
    else if(thisType=="Water") {
      printedType += "Water";
    }
    else if(thisType=="Flying"){
      printedType += "Flying";
    }
    else if(thisType == "Grass"){
      printedType += "Grass";
    }


    return printedType;
  }

}




});
