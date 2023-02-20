//export the event modele
const EventEmitter = require('events')
    //crete an emitter class
class MyEmitter extends EventEmitter {}
//instantiate object
const myEmitter = new MyEmitter();
//create event listner
myEmitter.on('event', () => { console.log('Event fired!...'); })
    //trigger the event
myEmitter.emit('event');
// the .on method is used toregister the event while the .emit method triggers the event