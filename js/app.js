var app = angular.module('mainApp',['ngSanitize']);

app.controller('MainController',[('$http'),function($http) {

var _this = this;
this.all_pokemon = [];
this.caught_pokemon = [];
this.pokemon_moves = [];

/****** DATA CALLS ******/

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



this.isPokemonChosen = false;
this.chosenPartyPoke = null;
this.clickedPokeCount = 0;

this.clickedPokemon = [];


/**Function showInfoBox
/**Purpose: decide whether to show the pokemon info box
/**Receives: the index of the clicked pokemon, boolean to check if mobile
/**Returns: nothing (calls generateInfoBox)
**/

this.showInfoBox = function(clickedPoke, isMobile){

  //push the clicked pokemon into an array
  this.clickedPokemon.push(clickedPoke);

  //get the previously clicked pokemon
  this.previousPokemon = this.clickedPokemon[this.clickedPokemon.length-2];
  this.isPreviousExists = this.clickedPokemon.length >= 2;
  this.chosenPartyPoke = clickedPoke;

  //if statement to overcome problem of box closing and not showing new pokemon data
  if(this.isPreviousExists && this.isPokemonChosen && this.previousPokemon != clickedPoke){
      this.isPokemonChosen = !this.isPokemonChosen;
  }

  this.isPokemonChosen = !this.isPokemonChosen;

  //send chosen pokemon and boolean to generate the info box
  this.generateInfoBox(this.chosenPartyPoke, isMobile);
}

/**Function generateInfoBox
/**Purpose: print the info box of the selected pokemon
/**Receives: the index of the clicked pokemon, boolean to check if mobile
/**Returns: nothing (appends the HTML directly)
**/

this.generateInfoBox = function(chosenPoke, isMobile){

  this.pokemonPath = this.getPokemonPathCaught(chosenPoke);

  if(isMobile){
    document.getElementById("add-info-mobile").innerHTML = '<div class="row"><div class="col-xs-5 col-xs-offset-3" style="margin-left:30%!important;"><div style="display:table-row;"><span class="name-cell">' + this.pokemonPath.name + '</span>' + this.getN_Name() + this.printTypes(this.pokemonPath.types) + '</span></div><div style="width:inherit;margin-left:20%;margin-bottom:3%;"><img class="img-cell-mobile" src="assets/' + this.pokemonPath.dex_num + '.png" /><div style="display:table-row"><span class="level-cell">Lv' +  this.pokemonPath.current_lvl + '</span></div></div><ul class="move-box mobile-fix">' + this.printMoves(this.pokemonPath.move_set) +  '</ul></div></div>';
  } else{

  document.getElementById("add-info").innerHTML = '<div style="display:table-row;"><span class="name-cell">' + this.pokemonPath.name + '</span>' + this.getN_Name() + this.printTypes(this.pokemonPath.types) + '</span></div><div style="width:inherit;margin-left:20%;margin-bottom:3%;"><img class="img-cell" src="assets/' + this.pokemonPath.dex_num + '.png" /><div style="display:table-row"><span class="level-cell">Lv' +  this.pokemonPath.current_lvl + '</span></div></div><ul class="move-box">' + this.printMoves(this.pokemonPath.move_set) +  '</ul>';

  }

}


/**Function getN_Name
/**Purpose: retrieve n_name if one exists
/**Receives: nothing
/**Returns: HTML for n_name or empty <span>
**/
this.getN_Name = function(){

  if(this.pokemonPath.n_name){

    return  '<span class="nick-cell">/&#8220;' + this.pokemonPath.n_name + '&#8221;</span>';
  }
  else return '<span style="padding-right:20px;"></span>';

}

/**Function printTypes
/**Purpose: style the pokemon type boxes
/**Receives: givenTypes as an array
/**Returns: totalType, a collection of HTML with all appropriate <div>s
**/

this.printTypes = function(givenTypes){

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

/**Function printMoves
/**Receives: moveSet as an integer array
/**Returns: allMoves, a collection of HTML with all appropriate <li>s
**/

this.printMoves = function(moveSet){
  var allMoves = "";

  //Pokemon can only have a max of 4 moves
  for(var i = 0; i < 4; i++){

    for(var j = 0; j < this.pokemon_moves.length; j++){

      if(moveSet[i].localeCompare(this.pokemon_moves[j].name) == 0){

        allMoves += '<li class="move-cell"><span class="move-cell-type type ' + this.pokemon_moves[j].type + '">' + this.pokemon_moves[j].type + '</span><span>' + this.pokemon_moves[j].name + '</li>';

      }
    }

  }
  return allMoves;
}

/**Function printEvolut
/**Receives: givenDexNums as an integer array
/**Returns: totalEvolut, a collection of HTML with all appropriate <p>s
**/

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

/**Function getPokemonPathAll
/**Purpose: fixes the issue of improperly indexed JSON files
/**Receives: nextDexNum as an integer
/**Returns: this.all_pokemon[i], the matching pokemon
**/

this.getPokemonPathAll = function(nextDexNum){

  for (var i = 0; i < this.all_pokemon.length; i++){

    if (nextDexNum == this.all_pokemon[i].dex_num){
      return this.all_pokemon[i];
    }

  }

}

/*same as getPokemonPathAll but for caught pokemon*/
this.getPokemonPathCaught = function(nextDexNum){

  for (var i = 0; i < this.caught_pokemon.length; i++){

    if (nextDexNum == this.caught_pokemon[i].dex_num){
      return this.caught_pokemon[i];
    }

  }

}

/*same but for moves*/
this.getMovePath = function(moveName){

  for (var i = 0; i < this.pokemon_moves.length; i++){

    if (moveName.localeCompare(this.pokemon_moves[i].name) === 0){
      return this.pokemon_moves[i];
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
