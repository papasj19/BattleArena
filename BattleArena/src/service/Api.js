export default class Api {
    server = "https://balandrau.salle.url.edu/i3/"

    static newArenaAPICall(gameId, size, maxHp) {
        const createNewArenaRequest = {gameID: gameId, size: size, HP_max: maxHp}
        return fetch(this.server + "/arenas", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createNewArenaRequest)
        })
    }


    static leaveGameAPICall(currentGameID) {
        const leaveGameRequest = {gameID: currentGameID}
        return fetch(this.server + "arena/" + currentGameID + "/play", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
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

    changePlayerOrientationAPICall() {
        const changePlayerOrientationRequest = {playerOrientation: this.playerOrientation}
        return fetch(this.server + "arenas/direction", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changePlayerOrientationRequest)
        })
    }

    playerMovementAPICall(mvmt) {
        const playerMovementRequest = {movement: mvmt}
        return fetch(this.server + "arenas/move", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerMovementRequest)
        })
    }

    gameAttackAPICall(attackIDGiven) {
        const gameAttackRequest = {attack_ID: attackIDGiven}
        return fetch(this.server + "arenas/attack/" + attackIDGiven, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameAttackRequest)
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
        const createUserRequest = {player_ID: mail, password: pass, img: "hello"};
        return fetch("https://balandrau.salle.url.edu/i3/players", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createUserRequest)
        })
    }

}