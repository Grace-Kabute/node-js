const fs = require('fs')
const path = require('path')
    //create a folder
    // fs.mkdir(path.join(__dirname, '/updated'), {}, err => {
    //     if (err) throw err;
    //     console.log('create folder....');
    // });
    //create a file
fs.writeFile(path.join(__dirname, '/updated', 'updated.txt'), 'I love learning Nodejs', err => {
        if (err) throw err;
        console.log('create file....');
        fs.appendFile(path.join(__dirname, '/updated', 'updated.txt'), ' I am a web-developer', err => {
            if (err) throw err;
            console.log('create folder....');
        });
    })
    //read file
fs.readFile(path.join(__dirname, '/updated', 'updated.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
//rename a file
fs.rename(path.join(__dirname, '/updated', 'updated.txt'), path.join(__dirname, '/updated', 'newUpdate.txt'), err => {
    if (err) throw err;
    console.log('file renamed....');
});