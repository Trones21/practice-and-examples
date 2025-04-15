

function tournamentWinner(competitions, results) {
    // Write your code here.
    //Must I validate that each has played each other?
    // {
    // 	[home, away],
    // 	[home, away],
    // }
    let teams = [];
    for (let idx in results) {
        //Away Team Won 
        if (results[idx] === 0) {

            if (!teams.includes(competitions[idx][0])) {
                teams.push({ team: competitions[idx][0], wins: 0 });
            }
            teams.find(i => i.team === competitions[idx][0]).wins += 1

        }
        //Home Team Won 
        if (results[idx] === 1) {

            if (!teams.includes(competitions[idx][1])) {
                teams.push({ team: competitions[idx][1], wins: 0 });
            }
            teams.find(i => i.team === competitions[idx][1]).wins += 1
        }

    }

    console.log(teams);

    let winner = ""
    let maxWins = 0;
    for (let team of teams) {
        if (team.wins > maxWins) {
            maxWins = team.wins;
            winner = team.team;
        }
    }

    return winner;
}

let c = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];

let r = [0, 0, 1];

let teamsArr = [...new Set(c.reduce((prev, next) => prev.concat(next)))].map(i => { return { t: i, wins: 0 } })

//.forEach(i => {return {team: i, wins:0}})
console.log(teamsArr)
  //tournamentWinner(c, r);