onEvent("dancingPg2", "click", function( ) {
  console.log("You clicked party hardy");
  playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
  setScreen("wildFlowers.html");
  console.log("Gameover!");
});

onEvent("prayerPg2", "click", function( ) {
  console.log("You clicked prayer life");
  setScreen("prayer4th.html");
  playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
  console.log("Game over!");
});

onEvent("shyPg2", "click", function( ) {
  console.log("You clicked secluded");
  setScreen("shy5th.html");
  playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
  console.log("Game over!");
});

onEvent("shadowPg2", "click", function( ) {
  console.log("You clicked mysterious");
  setScreen("shadow6th.html");
  playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
  console.log("Game over!");
});