require('dotenv').config();

const expres = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');

require('./db/config');

const router = require('./src/router');

const app = expres();

// App setup
app.use(morgan('combined')); // Logging middleware
app.use(bodyParser.json({ type: '*/*' }));

// Router
router(app);

const port = process.env.NODE_ENV || 3090;
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on PORT ${port}`));
