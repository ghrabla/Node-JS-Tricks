const fs = require('fs')
const path = require('path')

// make folder

// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if(err) throw err;
//     console.log('folder created!')
// })

// make and write in a file 

// fs.writeFile(path.join(__dirname,'./test','text.txt'),'hi there',err => {
//     if(err) throw err;
//     console.log('file created!')
//     // append content

//     fs.appendFile(path.join(__dirname,'./test','text.txt'),'i love node js',err => {
//         if(err) throw err;
//         console.log('file created!')
//     })
// })

// read data from a file

// fs.readFile(path.join(__dirname,'/test','text.txt'),'utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data)

// })


fs.rename(path.join(__dirname,'/test','text.txt'),path.join(__dirname,'/test','hello.txt'),(err) => {
    if(err) throw err;
    console.log('file renamed')

})