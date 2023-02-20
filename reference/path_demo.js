const path = require('path');
// base file name
//directory name
console.log(path.dirname(__dirname));
//file extension
console.log(path.extname(__filename));
//create path object
console.log(path.parse(__filename).base);
// concatenate paths
console.log(path.join(__dirname, 'test',
    'hello.html'));