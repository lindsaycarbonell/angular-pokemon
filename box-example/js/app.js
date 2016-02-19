var app = angular.module('boxes', []);

app.controller('BoxController', function() {

  this.buildings = data;

  this.availableColors = [
    'blue',
    'yellow',
    'green',
    'purple',
    'orange',
    'red',
    'black'
  ];

  this.shouldBeVisible = function() {
    return this.newBox.building_id !== "";
  };

  this.addBox = function() {

    var buildingIndex = this.newBox.building_id;
    this.buildings[buildingIndex].boxes.push({
      name: this.newBox.name,
      color: this.newBox.color,
      face: this.newBox.face
    });
    this.reset();

  };

  this.reset = function() {

    this.newBox = {
      building_id: "",
      name: "",
      color: "",
      face: ""
    };

  };

  this.reset();

});


app.filter('titlecase', function() {
    return function(s) {
        s = ( s === undefined || s === null ) ? '' : s;
        return s.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});

var data = [
  {
    name: "Office Building",
    description: "Where people work",
    boxes: [
      {
        name: "Sad Box",
        color: "blue",
        face: ":("
      },
      {
        name: "Happy Box",
        color: "yellow",
        face: ":("
      },
      {
        name: "Eh Box",
        color: "green",
        face: ":/"
      }
    ]
  },
  {
    name: "Gas Station",
    description: "Where people get gas",
    boxes: [
      {
        name: "Regular Box",
        color: "purple",
        face: ":("
      },
      {
        name: "Super Box",
        color: "orange",
        face: ":("
      },
      {
        name: "Premium Box",
        color: "red",
        face: ":/"
      },
      {
        name: "Premium Box",
        color: "black",
        face: ":/"
      }
    ]
  }
];
