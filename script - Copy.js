window.addEventListener("load", startTime);

function startTime() {
	var today=new Date();
    var h24=today.getHours();
    var ampm = getAmPm(h24);
    var h12 = convertTo12Hour(h24);
    var m=today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h12 + ":" + m;
    document.getElementById('ampm').innerHTML = ampm;
    var BgUrl = genBgUrl(h24);
    document.body.style.background = BrUrl + " no-repeat  center center fixed";
    document.body.style.backgroundSize = "cover";
	var intervalID = setInterval(setTime, 14000);
}

function setTime() {
	var today=new Date();
    var h24=today.getHours();
    var ampm = getAmPm(h24);
    var h12 = convertTo12Hour(h24);
    var m=today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h12 + ":" + m;
    document.getElementById('ampm').innerHTML = ampm;
}
function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function convertTo12Hour(i) {
	if (i>12) {i = i-12;}
	return i;
}

function getAmPm(i) {
	if (i>12) {return "pm";}
	return "am";
}

function getTimeDiv(h) {
	if ( h > 7 && h <= 11 ) {
		return "morning";
	} else if ( h > 11 && h <= 15 ) {
		return "day";
	} else if ( h >15 && h <=18 ) {
		return "afternoon";
	} else {
		return "night";
	}
}

function genBgUrl(h) {
	var randomInt = Math.floor((Math.random() * 10) +1);
	if (randomInt < 10) {
		randomInt = "0" + randomInt;
	}
	var timeDiv = getTimeDiv(h);
	var BgUrl = "backgrounds/" + timeDiv + "/" + randomInt + ".png";
	BrUrl = "url(\"" + BgUrl + "\")"
	console.log(BgUrl);
	return BgUrl;
}
