'use strict';

const app = require('./express/server');
const path = require('path');

// Load View Engine
app.set('views', path.join(__dirname, 'pug'));
app.set('view engine', 'pug');

app.listen(3000, () => console.log('Local app listening on port 3000!'));
