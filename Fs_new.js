

const exress = require('express');
//const { log } = require('console');
//const { buffer } = require('stream/consumers');
// const routes = require ('./routes');

const app = exress();

  app.use((req ,res , next) => {
          console.log('in middleware');
          next();
  });
  app.use((req ,res , next) => {
    console.log('in another middleware');
    res.send(`<h1>hello from express !!</h1>`);
});

app.listen(3000);