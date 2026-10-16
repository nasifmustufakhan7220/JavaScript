function cricketMatchResult(teamXRuns, teamYRuns) {
  if (
    typeof teamXRuns !== "number" ||
    typeof teamYRuns !== "number" ||
    teamXRuns < 0 ||
    teamYRuns < 0 ||
    !Number.isFinite(teamXRuns) ||
    !Number.isFinite(teamYRuns) ||
    teamXRuns % 1 !== 0 ||
    teamYRuns % 1 !== 0
  )
    return "Invalid";

  if (teamXRuns > teamYRuns) return "Team X Won";
  else if (teamYRuns > teamXRuns) return "Team Y Won";
  else return "Tie";
}

// console.log(cricketMatchResult(150, 120));

function isBackpackSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let total = 0;
  for (const weight of weights) {
    if (typeof weight !== "number" || weight <= 0 || !Number.isFinite(weight))
      return "Invalid";

    total += weight;
  }
  if (total <= 15) return true;
  else return false;
}

// console.log(isBackpackSafe("5,4,3"));

function calculateStorageCost(gbUsed) {
  if (typeof gbUsed !== "number" || gbUsed < 0 || !Number.isFinite(gbUsed))
    return "Invalid";

  if (gbUsed <= 5) {
    return 0;
  } else if (gbUsed > 5) {
    const extraGb = gbUsed - 5;
    const costOfExtraGb = Math.ceil(extraGb / 1) * 20;
    return costOfExtraGb;
  }
}

// console.log(calculateStorageCost("5"));

function countMentions(post) {
  if(typeof post !== "string") return "Invalid";

  const postArr = post.split(" ");

  let mentionCount = 0;
  let longestMention = "";
  
  const removeSymbol = postArr
  .filter(tag=>{
    if(tag.startsWith("@") && tag.length > 1){
        mentionCount++;
        return true;
    } 
  })
  .map(removeTag => {
    if(removeTag.startsWith("@")){
        const tag = removeTag.slice(1);
        if(tag.length > longestMention.length) longestMention = tag;
    } 
  });

    return {mentionCount, longestMention};

}


// console.log(countMentions("@"));


function topScorer(players) {
  if(
    !Array.isArray(players) ||
    players.length === 0
  ) return "Invalid";
  
  let highLightPlayerName = players[0];

  let error = "";
  players.forEach(player=>{
    if(
        typeof player !== "object" ||
        player === null ||
        !player.hasOwnProperty("name") ||
        !player.hasOwnProperty("points") ||
        typeof player.name !== "string" ||
        typeof player.points !== "number" 
    ) error = "Invalid";
    else{
        if(highLightPlayerName.points < player.points){
            highLightPlayerName = player;
        }
    }
  })

  if(error === "Invalid"){
    return "Invalid";
  }
  return highLightPlayerName.name.toUpperCase();
  

}

// console.log(topScorer([{name:"Mim",points:12},{name:"Tania",points:9}]));



function averageOrderValue(orders) {
  if (!Array.isArray(orders)) {
    return "Invalid";
  }
  if (orders.length === 0) {
    return "Invalid";
  }
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    if(typeof orders[i] !== "number") return "Invalid";
      total = total + orders[i];
  }
  return total / orders.length;
}
// console.log(averageOrderValue([200, "400", 300]));



