function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability =  function() {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var detailsl = quayHotel.name + ' rooms:';
detailsl += quayHotel.checkAvailability();
var elHotel = document.getElementById('hotel');
elHotel1.textContent = detailsl;

var details2 = parkHotel.name + ' rooms:';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;