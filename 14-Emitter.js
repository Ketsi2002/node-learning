// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');
const { METHODS } = require('http');
const { orderBy } = require('lodash');


const customEmitter = new EventEmitter()

// on and emit METHODS
// keep track of the order
// additional arguments 
// built-in modules utilize it 

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
})
customEmitter.on('response', () => {
    console.log(`i want to own a Porche`)
})
customEmitter.on('response', () => {
    console.log(`So I can drive my son Sihlumile around`)
})
customEmitter.emit('response','Moeketsi', 37)