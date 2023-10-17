var originaNumber = 10.23456;

var msg  = '<h2>original number</h2><p>' + originalNumber + '</p>';

msg += '<h2>3 decimal placs</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var el  = document.getElementById('info');

el.innerHTML = msg;