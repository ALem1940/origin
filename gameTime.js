var healing = ["Enhances memory", "Accerlerates Healing", "Reduces Stress & Anxiety", "Boosts Mood", "Improves Cognitive Function", "Strengthens Relationships", "Supports Mental Health", "Improves Indoor Air Quality", "Provides Medicinal Remedies", "Aids Sleep", "Provides Nutritous Food", "Symbolizes & Celebrates", "Provides Aesthetic Value", "Creates Perfumes & Oils", "Supports Natural Ecosystems"]
var randomHealing = randomNumber(0,14);
var flowerNames = ["Roses", "Peonies", "Hyacinth", 'Sunflowers', "Daffodils", "Echinacea", "Chamomile", "Lavender St. John’s Wort", "Hawthorne", "Passionflower", "Rosemary", "Calendula", "Nasturtium", "Prunella vulgaris",] 
var randomFlowerNames = randomNumber(0,14);
var treats = ["Relaxation & skin", "Reduces anxiety & stress", "Emotional recovery", "Lowers blood pressure", "Lifts your spirits", "Reduces cold/flu symptoms", "Anti-inflammatory", "Reduces anxiety & pain", "Manages depression", "Improves circulation", "Helps with sleep", "Improves memory", "Heals skin", "Fights Infection", "Treats various ailments"]
var randomTreats = randomNumber(0,14);
var index = 0;



playSound("https://codehs.com/uploads/194afde97752a22e0324bc6cac443bd0", false);
onEvent ("leftBtn", "click", function () {
  if(index > 0) {
      index = index - 1
      updateDisplay();
  }else{
      index = healing.length - 1
  }
  updateDisplay();
});

onEvent ("rightBtn2", "click", function () {
  if(index < healing.length -1) {
     index = index + 1
     updateDisplay();
     
  }else{
      index = 0;
      updateDisplay();
  }
  setText("healing", healing[index]);
});
//updateDisplay and display items from each array on the screen//
function updateDisplay(){
 setText ("healing",healing[index]);
 setText ("flowerNames",flowerNames[index]);
 setText ("treats",treats[index]);
}


//The purpose of the conditional is a decision maker if one condition is met it runs the code for it and if not it will do else code.//
//The purpose of the function is used to loop through flowerNames array and display a random flower.//
//The purpose of the loop is to make sure that everything listed in the array will be viewable for the user.//

onEvent ("againBtn", "click", function () {
  setscreen ("index.html");  
});

function random() {
    var randomIndex = randomNumber(0, flowerNames.length - 1)
    for(var i = 0; i < flowerNames.length; i++) {
    setText("cureAll", flowerNames[randomIndex])    
    }
}
random();


level1();
done();

function level1() {
    console.log("Only an Amazing God could have put so much power in something so small.");
}

function done () {
    console.log("Just look at you. He created you and you are powerful too!");
}