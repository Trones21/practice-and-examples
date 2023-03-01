//Instructions:
// You can input:
// a 2D array such as [[lat, long], [lat, long]]
// an object array [{}, {}], current properties supported are: name, lat, long
// or a mix of both [[],{}, {}, [], {}] 
// if the input is invalid, then you will receive output will all invalid pairs

//Example Object Array
let pointsObjArr = [{
    name: "Northwest Corner",
    lat: -120.7484025,
    long: 39.0489184,
},
{
    lat: -120.7444025,
    long: 39.0487184,
},
];

//Example 2-D Array (Lat long pairs)
let pairsArr = [
    [-120.7484025,39.0489184],
    [-120.7481025,39.0189184],
    [-120.7481025,39.0199184],
];

//Example Mix
let mix = [
    [-120.7484025,39.0489184],
    {
        name: "Northwest Corner",
        lat: -120.7484025,
        long: 39.0489184,
    },
    [-120.7481025,39.0199184],
]

//Script
let kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml>
<Document>
	<name>Simplest</name>
	${addPoints(pointsArr)}
</Document>
</kml>`

function addPointsLatLong(points) {
    let kmlStr = ``
    let invalidPairs = [];
    for (let [i, point] of points.entries()) {
        let name;

        //Array format
        if(Array.isArray(point)){
            if (validateCoordItem("lat", point[0]) && validateCoordItem("long", point[1])){
                kmlStr += addKMLPoint(addKMLPoint({name:points[i], lat:point[0], long:point[1]}) )    
            }else{
                invalidPairs.push(point)
                continue;
            }
        }
        else
        //Object Format
        {
            name = (point.name !== undefined) ? point.name : points[i];
            if (validateCoordItem("lat", point.lat) && validateCoordItem("long", point.long)){
                kmlStr += addKMLPoint(addKMLPoint({name:name, lat:point.lat, long:point.long}) )    
            }else{
                invalidPairs.push(point)
                continue;
            }
            
        }
        
    }
    if(invalidPairs.length > 0){
        return {invalidPairs: invalidPairs};
    }

    return kmlStr;

}

function addKMLPoint(obj){
    return `<Placemark>
    <name>${obj.name}</name>
    <Point>
    <altitudeMode>relativeToGround</altitudeMode>
    <coordinates>${obj.lat},${obj.long},0</coordinates>
    </Point>
</Placemark>`;
}

function validateCoordItem(latORLong, str){
    let paramClean = latORLong.toLowerCase().replaceAll(' ', '');
    let n = Number(str)
    switch(paramClean){
     case "lat":
        if(n >= -90 && n <= 90){
            return true
        }
        return false;
    case "long":
        if(n >= -180 && n <= 180){
            return true
        }
        return false;
    default:
        throw new Error("Bad param passed to valiateCoordItem")
    }
}

