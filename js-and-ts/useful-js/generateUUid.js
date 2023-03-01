

function generateUuId() {
    for (var e = new Array(36), t = 0; t < 36; t++)
        e[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
    return e[14] = "4",
        e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1),
        e[8] = e[13] = e[18] = e[23] = "-",
        e.join("")
}
;

console.log(genId())