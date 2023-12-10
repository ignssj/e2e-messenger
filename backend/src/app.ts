import 'express-async-errors';
import {server as app, closeMongoConnection} from './server';
import {appConfig} from './config';

const PORT = appConfig.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing HTTP server...');
    server.close(() => {
        console.log('Server closed');
        closeMongoConnection();
        process.exit(0);
    });
  });

export default app;