class Hotel {
    constructor() {
        this._selectHotels = document.getElementById("selectHotels");
        this._hotelName = document.querySelector("#hotelName");
        this._availableRooms = document.querySelector("#availableRooms");
        this._totalRooms = document.querySelector("#totalRooms");
        this._card = document.querySelectorAll("#card [class]");
        this._mod = document.querySelectorAll("#mod [class]");
        this._bookRelease = document.querySelectorAll("#bR [class]");

        this._arrayHotel = [
            { 'name': "Montage Palmetto Bluff", 'rooms': 120, 'booked': 110, 'roomsAv': " ", 'img': "img/0.jpg" },
            { 'name': "The Peninsula Beverly Hills", 'rooms': 100, 'booked': 70, 'roomsAv': " ", 'img': "img/1.jpg" },
            { 'name': "Waldorf Astoria Chicago", 'rooms': 250, 'booked': 200, 'roomsAv': " ", 'img': "img/2.jpg" },
            { 'name': "Calistoga Ranch", 'rooms': 100, 'booked': 70, 'roomsAv': " ", 'img': "img/3.jpg" },
            { 'name': "Fairmont Grand Del Mar", 'rooms': 88, 'booked': 50, 'roomsAv': " ", 'img': "img/4.jpg" },
            { 'name': "Carolina do Sul Costeira", 'rooms': 130, 'booked': 96, 'roomsAv': " ", 'img': "img/5.jpg" },
            { 'name': "The Inn Above Tide", 'rooms': 50, 'booked': 42, 'roomsAv': " ", 'img': "img/6.jpg" },
            { 'name': "Burj Al Arab", 'rooms': 202, 'booked': 140, 'roomsAv': " ", 'img': "img/7.jpg" }
        ];

        //this.onMouseOut();
        //this.onMouseMove();
        this.optionsName();
        this.updateRooms();


    }// fim do construtor

    optionsName() {
        this._selectHotels.innerHTML = `<option class="font-italic">Select A Hotel</option>`;
        for (let i = 0; i < this._arrayHotel.length; i++) {
            this._selectHotels.innerHTML += `<option>${this._arrayHotel[i].name}</option>`;


            this._selectHotels.addEventListener("input", e => {
                if (this._selectHotels.value == "Select A Hotel") {
                    this._hotelName.innerHTML = " ";
                    this._totalRooms.innerHTML = " ";
                    this._availableRooms.innerHTML = "-";
                    this._card[0].src = " ";
                    this._card[2].textContent = "";
                    this._card[3].textContent = "";
                    this._mod[0].textContent = "";
                    this._mod[1].innerHTML = "";
                    this._mod[2].innerHTML = "";
                    this._mod[3].innerHTML = "";
                }
                if (this._selectHotels.value == this._arrayHotel[i].name) {
                    this._card[0].src = this._arrayHotel[i].img;
                    this._card[2].textContent = this._arrayHotel[i].name;
                    this._card[3].textContent = `Total of Rooms: ${this._arrayHotel[i].rooms} / Booked: ${this._arrayHotel[i].booked}`;
                    this._availableRooms.innerHTML = this._arrayHotel[i].roomsAv;
                    this._mod[0].textContent = this._arrayHotel[i].name;
                    this._mod[1].innerHTML = `Total of Rooms: ${this._arrayHotel[i].rooms}`;
                    this._mod[2].innerHTML = `Booked: ${this._arrayHotel[i].booked}`;
                    this._mod[3].innerHTML = `Availability: ${this._arrayHotel[i].roomsAv}`;

                }
                if (this._selectHotels.value == this._arrayHotel[i].name) {
                    this._bookRelease[0].addEventListener("click", e => {
                        this._arrayHotel[i].booked += 1;
                        this._arrayHotel[i].roomsAv -= 1;

                        this._mod[2].innerHTML = `Booked: ${this._arrayHotel[i].booked}`;
                        this._mod[3].innerHTML = `Availability: ${this._arrayHotel[i].roomsAv}`
                        this._card[3].textContent = `Total of Rooms: ${this._arrayHotel[i].rooms} / Booked: ${this._arrayHotel[i].booked}`;
                        this._availableRooms.innerHTML = this._arrayHotel[i].roomsAv;
                    });
                }

                if (this._arrayHotel[i].booked == 0 && this._arrayHotel[i].roomsAv == this._arrayHotel[i].rooms) {
                   
                    this._bookRelease[2].addEventListener("click", e => {
                        this._mod[2].innerHTML = `Booked: 0`;
                        this._mod[3].innerHTML = `Availability: ${this._arrayHotel[i].rooms}`
                        this._card[3].textContent = `Total of Rooms: ${this._arrayHotel[i].rooms} / Booked: 0`;
                        this._availableRooms.innerHTML = this._arrayHotel[i].rooms;
                    });

                } else {
                    this._bookRelease[2].addEventListener("click", e => {
                        this._arrayHotel[i].booked -= 1;
                        this._arrayHotel[i].roomsAv += 1;
                        this._mod[2].innerHTML = `Booked: ${this._arrayHotel[i].booked}`;
                        this._mod[3].innerHTML = `Availability: ${this._arrayHotel[i].roomsAv}`
                        this._card[3].textContent = `Total of Rooms: ${this._arrayHotel[i].rooms} / Booked: ${this._arrayHotel[i].booked}`;
                        this._availableRooms.innerHTML = this._arrayHotel[i].roomsAv;
                    });
                }
            });

        }
    } // optionsName

    /*
    onMouseMove() {
        this._card[0].addEventListener("mousemove", e => {
            this._card[0].style.cursor = "pointer";
            this._card[0].style.width = "";
            this._card[0].style.height = "500px";
            this._card[0].style.transition = "1s";
            this._card[0].style.objectFit = "cover";
        });
    }

    onMouseOut() {
        this._card[0].addEventListener("mouseout", e => {
            this._card[0].style.cursor = "normal";
            this._card[0].style.width = "";
            this._card[0].style.height = "200px";
            this._card[0].style.transition = "1s";
            this._card[0].style.objectFit = "cover";
        });
    }

    */

    updateRooms() {
        for (let i = 0; i < this._arrayHotel.length; i++) {
            this._arrayHotel[i].roomsAv = this._arrayHotel[i].rooms - this._arrayHotel[i].booked;
        }
    }




}// fim da classe