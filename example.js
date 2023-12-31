(function() {
    var hotel = {
        name: 'Park',
        roomRate: 240, 
        discount: 15,
        offerOrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };
var hotelName, roomRate, specialRate;

hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();

var expiryMsg;
var today;
var elEnds;

function offerExorice(today) {

   var weekFromToday, day, date, month, year, dayNames,  monthNames;

   weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

   dayName = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   monthNames = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   day = dayName[weekFromToday.getDay()];
   date = weekFromToday.getDay();
   month = monthNames[weekFromToday.getMonth()];
   year = weekFromToday.getFullYear();

   expiryMsg = 'offer expires next ';
   expiryMsg += day + ' <br />(' + date + '' + month + '' + year + ')';
   return expiryMsg; 
}

today = new Date();
 elEnds = document.getElementById('offerEnds');
 elEnds.innerHTML = offerExpires(today);
}
());