
function matchWinner(teamAGoals, teamBGoals) {
    if(
        typeof teamAGoals !== "number" || 
        typeof teamBGoals !== "number" || 
        !Number.isFinite(teamAGoals) ||
        !Number.isFinite(teamBGoals) ||
        teamAGoals < 0 || 
        teamBGoals < 0 
    ){
        return "Invalid";
    }else if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else if(teamBGoals > teamAGoals){
        return "Team B Won"
    }else{
        return "Draw"
    }

    
}

function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    
    let totalWeight  = 0;

    for(let i = 0; i < weights.length; i++){
        if(typeof weights[i] !== "number" || 
            weights[i] < 0 || 
            !Number.isFinite(weights[i])
        ){
            return "Invalid";
        }

        totalWeight += weights[i];
    }
    if(totalWeight  <= 400){
        return true;
    }else{
        return false;
    }
}



function calculateAiCost(tokensUsed) {
    
    if(typeof tokensUsed !== "number" || 
        tokensUsed < 0  ||
        !Number.isFinite(tokensUsed) ||
        tokensUsed < 0
    ){
        return "Invalid";
    }else if(tokensUsed <= 500){
        return 0;
    }else if(tokensUsed > 500){
        let extraTokens = tokensUsed - 500;
        return Math.floor(extraTokens / 100)* 5;
    }
}


function topRatedRestaurant(restaurants) {
   if(!Array.isArray(restaurants) || 
      restaurants.length === 0
    ){
        return "Invalid";
   }

   for(let i = 0; i < restaurants.length; i++){
       if(typeof restaurants[i] !== "object" ||
            restaurants[i] === null ||
            !restaurants[i].hasOwnProperty("name") ||
            !restaurants[i].hasOwnProperty("rating") ||
            typeof restaurants[i].name !== "string" || 
            restaurants[i].name.trim() === "" ||
            typeof restaurants[i].rating !== "number" ||
            !Number.isFinite(restaurants[i].rating)
        ){
            return "Invalid";
        }
   }
   
   
   let topRatedName = restaurants[0].name;
   let topRatedRating = restaurants[0].rating;

   for(let i = 1; i< restaurants.length; i++){
        if(restaurants[i].rating > topRatedRating){
            topRatedRating = restaurants[i].rating;
            topRatedName = restaurants[i].name;
        }
   }

   return topRatedName.toUpperCase();

}


function averageResponseTime(times) {
  if (!Array.isArray(times)) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"||
            Number.isNaN(times[i])
        ) {
            return "Invalid";
        }
        total = total + times[i];
    }
   
  return total / times.length;
}

