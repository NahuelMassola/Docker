const {config} = require('dotenv')
const express = require('express');
const {connectionSocket} = require('./utils/soket.io')
const server = express();
const handlebars = require('express-handlebars');
const productsRoute = require('./routes/products.routes');
const cardsRoute = require ('./routes/carts.routes')
const productsRouteBd = require('./routes/products.router.bd')
const cartsRouteBd = require('./routes/carts.router.bd')
const viewRoute = require('./routes/views.route')
const chatsRouter = require('./routes/chats.router')
const sessionRoute = require('./routes/session.route');
const  initPassaport  = require('./utils/passaport.config');
const passport = require('passport');
const cookie = require('cookie-parser');
const {PORT, MONGODBURL } = require('./config/config');
const mdwError = require('./utils/middleware/mdwError');
const loggerTest = require('./controller/logger.controller');
const { mdwLogger, logger } = require('./config/config.winston');
if (MONGODBURL) import('./config/config.db.js');


const httpServer = server.listen(PORT, () => 
  logger.debug(`Server started on port http://localhost:${PORT} `),
)

//handlerbars
server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');


// passport / cookie-parse
initPassaport();
server.use(passport.initialize());
server.use(cookie())

//express
server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//winston logger
server.use(mdwLogger)


//rutas
server.use("/", viewRoute);
server.use("/api/products/", productsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/api/productsBd/", productsRouteBd );
server.use("/api/cartsBd/", cartsRouteBd );
server.use("/api/chats/", chatsRouter );
server.use('/api/session', sessionRoute);
server.get('/loggerTest' , loggerTest);



//midleware
server.use(mdwError)

connectionSocket (httpServer);






