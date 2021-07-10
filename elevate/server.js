const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const sequelize = require('./config/connection');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sess));
// Add routes, both API and view
app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use(routes);

// Start the API server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
