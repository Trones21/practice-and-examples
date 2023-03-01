const tinify = require("tinify");
const fs = require("fs")
tinify.key = "WDWXJHKbGrGXCVq5VNC52GpHzKPKN7Xz";

const dir = '/home/trones/Documents/git_repos/thomasrones/src/images/profileLogos/';

let files = fs.readdirSync(dir);

//All files must be png
 (async () => {

    let fileNames = await files.map(i => i.substring(0, i.indexOf('.')));
    let unconverted = fileNames.filter(f => {if(!files.includes(f+".webp")){
        return f;}
    })
    
    console.log(unconverted)
    if(unconverted.length === 0){
        console.log('No files to convert')
        return 
    }

    for  (const file of unconverted) {
        console.log("Start " + file)
        const source = tinify.fromFile(dir + file + '.png');
        const converted = source.convert({type:["image/webp"]});
        const extension = await converted.result().extension();
        converted.toFile(dir + file + '.' + extension);
        
    }
    
})()
