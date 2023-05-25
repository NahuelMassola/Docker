const winston = require('winston');
const optionWinston ={
    levels:{
        fatal:0,
        error:1,
        warn:2,
        info:3,
        http:4,
        debug:5,
    },
    colors:{
        fatal:'red',
        error:'magenta',
        warn:'yellow',
        info:'cyan',
        http:'blue',
        debug:'green',
    }
}

const loggerProd = winston.createLogger({
    levels:optionWinston.levels,
    transports:[

        new winston.transports.File({filename:'.errors.log',
        level:"info",
        format:winston.format.combine(
            winston.format.colorize({colors:optionWinston.colors}),
            winston.format.simple()
        )}),
    ]
})

const loggerDev = winston.createLogger({
    levels:optionWinston.levels,
    transports:[
        new winston.transports.Console
        ({level:"debug",
        format:winston.format.combine(
            winston.format.colorize({colors:optionWinston.colors}),
            winston.format.simple()
        )
    }),
    ]
})

const mdwLogger = (req, res, next)=>{
    req.logger = (process.env.NODE_ENV)? loggerProd :loggerDev ;
    req.logger.http(`Method: ${req.method} , URL: ${req.url} - Time: ${new Date().toLocaleTimeString()}`);
    next();
}
module.exports ={
    mdwLogger,
    logger: process.env.NODE_ENV ? loggerProd :loggerDev 
}  