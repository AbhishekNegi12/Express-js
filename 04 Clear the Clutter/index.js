//you have to write a nodejs program to clear clutter inside of a directory and organize the contents of the directory into different folders

// for example, these files become :
// 1.this.jpg
// 2.abhi.zip
// 3.cat.jpg
// 4.abu.zip
// 5.name.png
// 6.this.pdf

//this
//jpg/name.jpg. jpg/cat.jpg

import path from "path";
import fsn, { existsSync } from "fs"
import fs from "fs/promises";

let directoryPath = path.join("D:", "FULL STACK DEVELOPMENT", "06 - Express Js", "04 Clear the Clutter");

let files = await fs.readdir(directoryPath);
// console.log(files);

// let extensions = []
for (const item of files) {
    console.log("running for : ",item)
    let ext = item.split(".")[item.split(".").length-1]
    console.log(ext)
    if(ext!="js" && ext!="json" && item.split(".").length>1){

        if(fsn.existsSync(path.join(directoryPath,ext))){
            //move this file to the directory if its not a js or json file
            fs.rename(path.join(directoryPath,item),path.join(directoryPath,ext,item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(directoryPath,item),path.join(directoryPath,ext,item))
        }
    }
    // console.log(item);
}