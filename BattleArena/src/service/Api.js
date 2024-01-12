export default class Api {
    server = "https://balandrau.salle.url.edu/i3/"

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
        const leaveGameRequest = {gameID: currentGameID}
        return fetch("https://balandrau.salle.url.edu/i3/arenas/" + currentGameID + "/play", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            },
            body: JSON.stringify(leaveGameRequest)
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
        return fetch(this.server + "players/" + token + "/attacks/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static newAttackAPICall(id, pos, img) {
        const createAttackRequest = {attack_ID: id, position: pos, img: img}
        return fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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

    static buyAttackAPICall(attID) {
        const buyAttackRequest = {attack_ID: attID}
        return fetch("https://balandrau.salle.url.edu/i3/shop/" + attID + "/attacks", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(buyAttackRequest)
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
        return fetch("https://balandrau.salle.url.edu/i3/players/" + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getArenasAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/arenas/" + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }

    static getAttacksAPICall(token) {
        return fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': token
            }
        })
    }


}