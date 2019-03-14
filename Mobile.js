function Mobile(name, energy, SaveMessage) {
    this.name = name;
    this.onoff = "off";
    this.energy = energy;
    this.SaveMessage = SaveMessage;
    this.outBox = "";
    this.Inbox = "";
    this.TurnOn = function () {
        this.onoff = "On";
        alert(this.name + " is On")
    };
    this.TurnOff = function () {
        this.onoff = "Off";
        alert(this.name + " is Off")
    };
    this.setMessage = function () {
        if (this.onoff === "On") {
            this.SaveMessage = prompt("Nhập tin nhắn ở đây")
        } else {
            alert("Please turn On your phone")
        }
        this.energy--;
    };
    this.CheckIB = function () {
        if (this.onoff === "On") {
            if (this.name === "IPHONE") {
                document.getElementById("see1").innerText = "Tin nhắn mới là : " + this.Inbox;
            } else {
                document.getElementById("see").innerText = "Tin nhắn mới là : " + this.Inbox;
            }
        } else {
            alert("Please Turn On your phone")
        }
        this.energy--;
    };
    this.ToSend = function (phone) {
        if (this.onoff === "On") {
            this.outBox = this.SaveMessage;
            phone.Inbox = this.outBox;
        } else {
            alert("Please turn On your phone")
        }
        this.energy--;
    };
    this.Battery = function () {
        if (this.onoff === "On") {
            return alert("Pin của máy hiện tại là: " + this.energy);
        } else {
            alert("Please Turn On your phone")
        }
        this.energy--;
    };
    this.Charger = function () {
        if (this.onoff === "On") {
            if (this.energy < 100) {
                this.energy = 100;
            } else {
                alert("Pin của bạn đã đầy")
            }
        } else {
            alert("Please Turn On your phone")
        }
    };
    this.CheckSent = function () {
        if (this.onoff === "On") {
            if (this.outBox === nokia.outBox) {
                document.getElementById("see").innerText = "Tin nhắn bạn vừa gửi đi là : " + this.outBox;
            } else if (this.outBox === iphone.outBox) {
                document.getElementById("see1").innerText = "Tin nhắn bạn vừa gửi đi là : " + this.outBox;
            }
        } else {
            alert("Please Turn On your phone")
        }
        this.energy--;
    }
}

let nokia = new Mobile("NOKIA", 100);
let iphone = new Mobile("IPHONE", 100);




