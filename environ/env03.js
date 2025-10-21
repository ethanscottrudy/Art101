let Spaceship = {
characters: ["Xenomorph", "Facehugger", "Dead Body"],
damage: ["Broken window", "Blood"],
}
 let condition;
 let report;

condition = "<p>The characters on this spaceship are: " + Spaceship.characters[0] + ", " + Spaceship.characters[1] + ", " + Spaceship.characters[2] + "</p>";

report = "<p>Spaceship damage report: " + Spaceship.damage[0] + ", " + Spaceship.damage[1] + "</p>";

$("#condition").html(condition);

$("#report").html(report);