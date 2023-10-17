//
//
var msg = '<p><b>page tittle : </b>' + document.title + '<br />';
//
msg += '<b>page address : </b>' + document.URl + '<br />';
//
msg += '<b>last modified : </b>' + document.lastModified + '</p>';

//
var el = document.getElementById('footer');
//
el.innerHTML = msg;
