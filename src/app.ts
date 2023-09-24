import 'express-async-errors';
import app from './server';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

export default app;