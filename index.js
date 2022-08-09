function scuberGreetingForFeet(feet) {

  if (feet > 2500) {
    return 'No can do.'
  };
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet < 2000) {
    return 'That will be twenty bucks.'
  } else if (feet >= 2000) {
    return 'I will gladly take your thirty bucks.'
  };
  };

scuberGreetingForFeet();

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return 'Thank you so much.'
      break;
    case "not as generous":
      return 'Thank you.'
      break;
    case "thanks for everything":
      return "Bye."
  }
}