var hotel = new Object();

 hotel.name = 'Park';
 hotel.rooms = 120;
 hotel.booled = 77;
 hotel.checkAvailability = function () {
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elName.textContent =  hotel.checkAvailability();