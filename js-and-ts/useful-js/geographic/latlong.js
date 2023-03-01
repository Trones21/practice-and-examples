'use strict';
//Find lat long corners when given the center
function getSquareCorners(latLongCenter, SQsqAcres){

if(!validateLatLong(latLongCenter)) return false;

let meters = Math.sqrt(4046.86*SQsqAcres)/2; // centerToEdge
let leftEdge =  shiftLatitude(-meters, latLongCenter[0]);
let rightEdge = shiftLatitude(meters, latLongCenter[0]);

let topLeft = [leftEdge, shiftLongitude(meters,latLongCenter[1], leftEdge)];
let bottomLeft = [leftEdge, shiftLongitude(-meters,latLongCenter[1], leftEdge)];
let topRight = [rightEdge, shiftLongitude(meters,latLongCenter[1], rightEdge)];
let bottomRight = [rightEdge, shiftLongitude(-meters,latLongCenter[1], rightEdge)];

let corners = [
topLeft, topRight, bottomLeft, bottomRight
];

return corners;

}

function shiftLatitude(meters, latitude){
var earth = 6378.137,  //radius of the earth in kilometer
    pi = Math.PI,
    m = (1 / ((2 * pi / 360) * earth)) / 1000;  //1 meter in degree

return latitude + (meters * m);
}

function shiftLongitude(meters, longitude, latitude){
    var earth = 6378.137,  //radius of the earth in kilometer
    pi = Math.PI,
    cos = Math.cos,
    m = (1 / ((2 * pi / 360) * earth)) / 1000;  //1 meter in degree

return longitude + (meters * m) / cos(latitude * (pi / 180));
}

function validateLatLong(latLongCenter){
    if(latLongCenter.length !== 2){
        return false;
}
return true;
}