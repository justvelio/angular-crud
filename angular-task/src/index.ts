import bodyParser from 'body-parser';
import express from 'express';

import * as routes from './routes';

const port = 8080;

const app = express();
const jsonParser = bodyParser.json();
app.use(jsonParser);

routes.register(app);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
