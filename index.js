const express = require("express"); // creo la instancia de express
const app = express(); // ya mi servidor web va a vivir dentro de app
const morgan = require("morgan");

app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'),()=>{
    console.log('server up')
})
app.use(morgan("dev"));