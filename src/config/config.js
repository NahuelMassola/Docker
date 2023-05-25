const dotenv= require('dotenv')
const { logger } = require('./config.winston');

dotenv.config({ path: `.env.${process.env.ENVIROMENT || "development"}`}) ;

logger.info(`'MODE : ${process.env.ENVIROMENT}'`)

module.exports ={
  DB_HOST: process.env.DB_HOST , 
  DB_PASSWORD: process.env.DB_PASSWORD,
  NODE: process.env.ENVIROMENT,
  MONGODBURL: process.env.MONGODBURL,
  PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT,
  REGISTER_STRATEGY: process.env.REGISTER_STRATEGY,
  LOGIN_STRATEGY: process.env.LOGIN_STRATEGY,
  JWT_STRATEGY: process.env.JWT_STRATEGY,
  PORT : process.env.PORT,
  COOKIE_USER: process.env.COOKIE_USER,
  PERCIST:process.env.PERCIST,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET

}