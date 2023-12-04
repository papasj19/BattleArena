export default class Api {

    constructor() {
        this.server = "https://balandrau.salle.url.edu/i3/"

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

}