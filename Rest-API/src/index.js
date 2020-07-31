const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3001) //in case we have a especified port =>prcess.env.PORT
app.set('json spaces',2);



//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/movies.js'));
app.use(require('./routes/users'))


//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`server working on port ${app.get('port')}`)
})
