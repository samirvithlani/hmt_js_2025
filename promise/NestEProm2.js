

const fetchPlayers =()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(["Ms","Virat","Rohit","Pandya"])
        }, 3000);
    })
    return promise
}
const createTeam =(players)=>{
    console.log("selected players",players)
    const promise = new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            resolve({players:players,team:"CSK"})
        }, 2000);
    })

    return promise
}

const playMatch = (team)=>{

    console.log("playing match ......",team)
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({team:team.team,players:team.players,score:100})
        }, 4000);
    })
    return promise

}

const match =()=>{

    console.log("fetching players..")
    var players = fetchPlayers()
    players.then((playerData)=>{
        console.log("playerData",playerData)
        var t = createTeam(playerData)
        t.then((teamData)=>{
            console.log("TeamData",teamData)
            const pm = playMatch(teamData)
            pm.then((matchData)=>{
                console.log("matchData",matchData)
            })
        })
        
    })

}
match()