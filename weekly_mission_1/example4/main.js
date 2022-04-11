//importar logger
const Logger = require('./logger');

const dbLogger= new Logger('DB');
//con esto creamos un nuevo objeto
dbLogger.info('Esto es un mensaje de info');

const accessLogger = new Logger('ACCESS');
accessLogger.verbose('Esto es un mensaje de verbose');
