export default class Api {
    server = "https://balandrau.salle.url.edu/i3/"

    static joinArenaAPICall(gameId, token) {
        return fetch("https://balandrau.salle.url.edu/i3/arenas/" + gameId + "/play", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static newArenaAPICall(gameId, size, maxHp, token) {
        const createNewArenaRequest = {game_ID: gameId, size: size, HP_max: maxHp}
        console.log("createNewArenaRequest");
        console.log(createNewArenaRequest);
        return fetch("https://balandrau.salle.url.edu/i3/arenas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            },
            body: JSON.stringify(createNewArenaRequest)
        })
    }


    static leaveGameAPICall(currentGameID, token) {
        return fetch("https://balandrau.salle.url.edu/i3/arenas/" + currentGameID + "/play", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static viewGameLogAPICall(currentGameID) {
        const viewGameLogRequest = {gameID: currentGameID}
        return fetch(this.server + "arenas/" + currentGameID + "/logs", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(viewGameLogRequest)
        })
    }

    static currentGameAPICALL(currentGameID, token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/arenas/current", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static changePlayerOrientationAPICall(direction) {
        const changePlayerOrientationRequest = {playerOrientation: direction}
        return fetch(this.server + "arenas/direction", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changePlayerOrientationRequest)
        })
    }

    static playerMovementAPICall(mvmt) {
        const playerMovementRequest = {movement: mvmt}
        return fetch(this.server + "arenas/move", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerMovementRequest)
        })
    }

    static gameAttackAPICall(attackIDGiven) {
        const gameAttackRequest = {attack_ID: attackIDGiven}
        return fetch(this.server + "arenas/attack/" + attackIDGiven, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameAttackRequest)
        })
    }


    static getPlayerAttackAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/attacks", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static newAttackAPICall(id, pos, img, token) {
        const createAttackRequest = {attack_ID: id, positions: pos, img: img}
        return fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            },
            body: JSON.stringify(createAttackRequest)
        })
    }

    static sellAttackAPICall(attackID) {
        const sellAttackRequest = {attack_ID: attackID}
        return fetch("https://balandrau.salle.url.edu/i3/shop/" + attackID + "/attacks", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sellAttackRequest)
        })
    }

    static buyAttackAPICall(attID, token) {
        return fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + attID + "/buy", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static loginUserAPICall(mail, pass) {
        const createUserRequest = {player_ID: mail, password: pass};
        return fetch("https://balandrau.salle.url.edu/i3/players/join", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createUserRequest)
        })
    }

    static registerUserAPICall(mail, pass) {
        const createUserRequest = {player_ID: mail, password: pass, img: "hello"};
        return fetch("https://balandrau.salle.url.edu/i3/players", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createUserRequest)
        })
    }

    static getPlayerAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getArenasAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/arenas/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getFinishedArenasPlayerAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/games/finished", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getAttacksAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/shop/attacks/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static equipAttackAPICall(id, token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Bearer: token
            }
        })
    }

    static unequipAttackAPICall(eID, token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + eID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            },
        })
    }


    static getPlayerInfoAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/players/statistics", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }


    static getSinglePlayerAPICall(token, playerID) {
        return fetch("https://balandrau.salle.url.edu/i3/players/" + playerID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getFinishedArenasOtherPlayerAPICall(token, id) {
        return fetch("https://balandrau.salle.url.edu/i3/players/" + id + "/games/finished", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getOtherPlayerInfoAPICall(token, id) {
        return fetch("https://balandrau.salle.url.edu/i3/players/" + id + "/statistics", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getOtherPlayerMoreInfoAPICall(token, id) {
        return fetch("https://balandrau.salle.url.edu/i3/players/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getOPlayerAttackAPICall(token, id) {
        return fetch("https://balandrau.salle.url.edu/i3/players/" + id + "/attacks", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }


}