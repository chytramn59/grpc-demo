const path = require('path');
const mali = require('mali'); 

const PROTO_PATH = path.resolve(__dirname,'./helloworld.proto');


async function sayHello (ctx) {
    console.log('say hello------------------')
    ctx.res = { message: 'Hello '.concat(ctx.req.name) }
  }
  
 const server = function main () {
      console.log("hiiiii")
    const app = new mali(PROTO_PATH, 'Greeter')
    app.use({ sayHello })
   const test = app.start('127.0.0.1:50051')
   console.log(test);
  }

server();