import 'express-async-errors';
import app from './server';
import {appConfig} from './config';

const PORT = appConfig.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

export default app;