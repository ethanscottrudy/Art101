let Spaceship = {
characters: ["Xenomorph", "Facehugger", "Thomas Kane", "Dead Body"],
damage: ["Broken window", "Blood"],
}
 let condition;
 let report;
 let Dead = "False";


condition = "<p>The characters on this spaceship are: " + Spaceship.characters[0] + ", " + Spaceship.characters[1] + ", " + Spaceship.characters[2] + "</p>";

report = "<p>Spaceship damage report: " + Spaceship.damage[0] + ", " + Spaceship.damage[1] + "</p>";

conditionDeath = "<p>The characters on this spaceship are: " + Spaceship.characters[0] + ", " + Spaceship.characters[3] + " of " + Spaceship.characters[2] + "</p>";




if (Dead = "False") {
    $("#condition").html(condition);
    $("#report").html(report);
}
else {
    $("#condition").html(conditionDeath);
    $("#report").html(report);}


$("#huggerAttack").click(function () {
   Dead = "True";
});