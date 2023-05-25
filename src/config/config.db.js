const { DB_HOST, PORT , DB_PASSWORD, MONGODBURL}= require('./config');
const {mongoose} = require('mongoose');
const { logger } = require('./config.winston');

/* const DB_HOST_ENV = DB_HOST || "localhost" ;
const DB_NAME = "test"
//const MONGO_URL = `mongodb://${DB_HOST_ENV}:${PORT}/${DB_NAME}` 
const MONGODBURL = `${DB_HOST_ENV}+srv://nahuell:${DB_PASSWORD}@cluster0.rgi9srv.mongodb.net/${DB_NAME}` */

mongoose.set("strictQuery", false);
mongoose.connect(MONGODBURL, (err) => {
  if (err) {
    logger.debug(" Error:" + err);
  } else {
    logger.debug("Connected to MongoDB");
  }
});

module.exports = mongoose