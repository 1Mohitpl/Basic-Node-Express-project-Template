const {createLogger, format, transports} = require("winston");

const {combine, timestamp, labal, printf, } = format;


const customeFormat = printf(({level, message, label,timestamp}) => {
     return `${timestamp} : [${labal}]  : ${level} : ${message}`;
})

const logger = createLogger({
    format: combine(
     timestamp({format:  'YYYY-MM-DD HH:MM:SS'}),  // Time
      customeFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename : 'combined.log'})
    ]
  });


  module.exports = logger;