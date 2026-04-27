/*
I'm not sure whether the same basic code with swapped out values counts as different interactions, but I've been super sick so I only added one more
*/
// default cards
let currArray = liquidMinutes;
let currID = "lmCards";
let cards = document.getElementById(currID);
cards.id = currID;

//desc or splash
let desc = true;

// loads the cards
function loadCards(){
  cards.innerHTML = ``;
  if (desc){
    for (let x = 0; x < currArray.length; x++) {
      cards.innerHTML += 
      `<div>${currArray[x].image}
        <h1>${currArray[x].name}</h1>
        <p>${currArray[x].description}</p>
      </div>`;
    }
  }
  else {
    for (let x = 0; x < currArray.length; x++) {
      cards.innerHTML += 
      `<div>${currArray[x].image}
        <h1>${currArray[x].name}</h1>
        <p>${currArray[x].splash}</p>
      </div>`;
    }
  }
  console.log("currID = " + cards.id);
}

// load default cards
loadCards();

// load LM cards when LM clicked
document.getElementById("lmButton").addEventListener("click", function(event){
  currArray = liquidMinutes;
  currID = "lmCards";
  cards.id = currID;
  loadCards();
})

// load TM cards when TM clicked
document.getElementById("tmButton").addEventListener("click", function(event){
  currArray = manna;
  currID = "tmCards";
  cards.id = currID;
  loadCards();
})

// load UT cards when UT clicked
document.getElementById("utButton").addEventListener("click", function(event){
  currArray = uppertown;
  currID = "utCards";
  cards.id = currID;
  loadCards();
})

// load PC cards when PC clicked
document.getElementById("pcButton").addEventListener("click", function(event){
  currArray = paperCranes;
  currID = "pcCards";
  cards.id = currID;
  loadCards();
})

//switch all to splash/desc when cards clicked
document.getElementById(currID).addEventListener("click", function(event){
  if (desc){
    desc = false;
  }
  else {
    desc = true;
  }
  loadCards();
})