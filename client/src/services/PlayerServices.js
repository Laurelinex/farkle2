const baseURL = 'http://localhost:5000/api/players/';

export const fetchAll = () => {
    return fetch(baseURL).then(res => res.json());
};

export const addPlayer = (newPlayer) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newPlayer),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
};

export const increaseWinOrLosses = (player) => {

    return fetch(baseURL + player._id, { 
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(console.error);
};