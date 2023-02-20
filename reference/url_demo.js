const url = require('url')
    //instantiate a new url object
const Myurl = new URL('https://mywebsite.com:3001/hello.html?id=320status=active')
    //get the whole url
console.log(Myurl.href);
//tostring method also gives the whole url
console.log(Myurl.toString());
//get the host/root domain.it also gives the port
console.log(Myurl.host);
//get the host name. this does not get the port
console.log(Myurl.hostname);
//get the path name
console.log(Myurl.pathname);
//get the port
console.log(Myurl.port);
//get the seerialized query
console.log(Myurl.search);
// we can create an object from the serialized query
console.log(Myurl.searchParams);
//dynamically adding parameters
Myurl.searchParams.append('123', 'abc')
console.log(Myurl.searchParams);
//loop through the params
Myurl.searchParams.forEach((value, name) => {
    console.log(`${name};${value}`);
})