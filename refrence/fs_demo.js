const fs = require('fs')
const path = require('path')

// make folder
// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if(err) throw err;
//     console.log('folder created!')
// })

// make and write in a file 
fs.writeFile(path.join(__dirname,'./test','text.txt'),'hi there',err => {
    if(err) throw err;
    console.log('file created!')
})