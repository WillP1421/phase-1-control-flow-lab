function scuberGreetingForFeet(feet){
  if(400 >= feet) {
    return "This one is on me!"
  } else if (2000 > feet) {
    return "That will be twenty bucks."
  } else if (2500> feet && feet > 2000) {
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return "No can do."
  }
    
  }
  

function ternaryCheckCity(city) {
  if(city === "NYC") {
    return "Ok, sounds good."
  } else if (city === "Pittsburgh") {
    return "No go."
  }
  
}

function switchOnCharmFromTip(tip){
  if(tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous") {
    return "Thank you."
  } else if (tip === "thanks for everything") {
    return "Bye."
  }
}