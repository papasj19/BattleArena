export default class Api {

    constructor() {
        this.server = "https://balandrau.salle.url.edu/i3/"

    }

    static newArenaAPICall(gameId, size, maxHp) {
        const createNewArenaRequest = {gameID: gameId, size: size, HP_max: maxHp}
        return fetch("https://balandrau.salle.url.edu/i3/players", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createNewArenaRequest)
        })
    }

    static leaveGameAPICall(currentGameID) {
        const leaveGameRequest = {gameID: currentGameID}
        return fetch(this.server + "arena/{ID}play", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaveGameRequest)
        })
    }

    static viewGameLogAPICall(currentGameID) {
        const viewGameLogRequest = {gameID: currentGameID}
        return fetch(this.server + "arenas/{gameID}/logs", {
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

    playerMovementAPICall() {
        const playerMovementRequest = {movement: this.movement}
        return fetch(this.server + "arenas/move", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerMovementRequest)
        })
    }

    gameAttackAPICall(attackIDGiven) {
        const gameAttackRequest = {attack_ID: attackIDGiven}
        return fetch(this.server + "arenas/attack/{attackID}", {
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

    static loginUserAPICall(mail, pass) {
        const createUserRequest = {player_ID: mail, password: pass, img: "hello"};
        return fetch("https://balandrau.salle.url.edu/i3/players", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createUserRequest)
        })
    }

}