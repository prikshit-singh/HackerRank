
        var ranked=[100,90,90,80];
var player=[70,80,105];

function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked = Array.from(new Set(ranked));
    
    const player_ranks = [];
    for (const score of player) {
        while (ranked && score >= ranked[ranked.length - 1])
            ranked.pop()
        player_ranks.push(ranked.length + 1)
    }

    return player_ranks
}





console.log(climbingLeaderboard(ranked, player))
  