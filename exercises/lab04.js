// declaring an array with name myCommutes
let myCommutes = ["Bus 16", "My Car", "Bicycle", "Bus 19", "Uber", "Carpool"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    size: "large",
    crowd: "small",
    color: ["Blue", "White", "Yellow", "Green"],
    
};
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", Size: " + myFavouriteCommute.size + ", with a " + myFavouriteCommute.crowd + " crowd and color: " + myFavouriteCommute.color[3] + "</p>";

$("#output").html(megaSentence);    

