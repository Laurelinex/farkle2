use farkle2; 
db.dropDatabase();

db.players.insertMany([
    {
        playerName: 'Henry of Skalitz',
        wins: 30,
        losses: 50
    },
    {
        playerName: 'Hans',
        wins: 10,
        losses: 10
    },
])
