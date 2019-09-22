var timer;
var timer_vert;
var deltaX = 5;		// number of x pixels moved each call
var left = 0;
var top = 0;
var timerOn = false;

function moveBy(objectId, x) {
	var left = parseInt(document.getElementById(objectId).style.left, 10);
	document.getElementById(objectId).style.left = (left + x) % posEnd;
}
function moveDown(objectId, x) {
	var top = parseInt(document.getElementById(objectId).style.top, 10);
	document.getElementById(objectId).style.top = (top + x) % poshEnd;
}
	
function startTimer(objectId, startPoint, endPoint, startvert, endvert) {
	if (document.getElementById && !timerOn) {
		timerOn = true;
		var cmd = "moveBy(\'" + objectId + "\', " + deltaX + ")" ;
		var cmd2 = "moveDown(\'" + objectId + "\', " + deltaX + ")" ;
		//alert("cmd is: " + cmd);
		timer =    setInterval(cmd, 50);
		timer_vert = setInterval(cmd2, 100);
	}
}
	
function stopTimer() {
	timerOn = false;
	clearInterval(timer);
	clearInterval(timer_vert);
}