'use strict';

const app = require('./express/server');

// Load View Engine
app.set('views', __dirname);
app.set('view engine', 'pug');

app.listen(3000, () => console.log('Local app listening on port 3000!'));
