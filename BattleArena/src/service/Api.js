export default class Api {

    constructor() {
        this.server = "https://balandrau.salle.url.edu/i3/"

    }

    leaveGameAPICall() {
        const leaveGameRequest = {gameID: this.gameID}
        fetch(this.server + "arena/{ID}play", {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaveGameRequest)
        }).then((response) => {
            if (response.ok) {
                alert("You have left the game");
                this.response = "You have left the game!";
                return response;
            }

            return response.json();
        }).then((res) => {
            if (res.ok == undefined) {
                this.response = res.error.message;
            }
        }).catch((error) => {
            this.response = "No connection with API";
        });
    }

    viewGameLogAPICall() {
        const viewGameLogRequest = {gameID: this.gameID}
        fetch(this.server + "arenas/{gameID}/logs", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(viewGameLogRequest)
        }).then((response) => {
            if (response.ok) {
                alert("INSERT GAME LOG HERE OR SOMETHING");
                this.response = "SHOW GAME LOG";
                return response;
            }

            return response.json();
        }).then((res) => {
            if (res.ok == undefined) {
                this.response = res.error.message;
            }
        }).catch((error) => {
            this.response = "No connection with API";
        });
    }

    changePlayerOrientationAPICall() {
        const changePlayerOrientationRequest = {playerOrientation: this.playerOrientation}
        fetch(this.server + "arenas/direction", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changePlayerOrientationRequest)
        }).then((response) => {
            if (response.ok) {
                alert("changed orientation");
                this.response = "changed orientation!";
                return response;
            }

            return response.json();
        }).then((res) => {
            if (res.ok == undefined) {
                this.response = res.error.message;
            }
        }).catch((error) => {
            this.response = "No connection with API";
        });
    }

    playerMovementAPICall() {
        const playerMovementRequest = {movement: this.movement}
        fetch(this.server + "arenas/move", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerMovementRequest)
        }).then((response) => {
            if (response.ok) {
                alert("PLayer moved");
                this.response = "PLayer moved!";
                return response;
            }

            return response.json();
        }).then((res) => {
            if (res.ok == undefined) {
                this.response = res.error.message;
            }
        }).catch((error) => {
            this.response = "No connection with API";
        });
    }

    gameAttackAPICall() {
        const gameAttackRequest = {attack_ID: this.playerOrientation}
        fetch(this.server + "arenas/attack/{attackID}", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameAttackRequest)
        }).then((response) => {
            if (response.ok) {
                alert("Attacked");
                this.response = "Attacked!";
                return response;
            }

            return response.json();
        }).then((res) => {
            if (res.ok == undefined) {
                this.response = res.error.message;
            }
        }).catch((error) => {
            this.response = "No connection with API";
        });
    }

}