const express = require('express');
//const routes = require('./routes');
const session = require('express-session');
//const sequelize = require('./config/connection');
const path = require('path');
require('dotenv').config();

// import sequelize connection

const app = express();
const PORT = (process.env.PORT || 3000);

// const sess = {
//     secret: 'Super secret secret',
//     resave: false,
//     saveUninitialized: true,
// }

//app.use(session(sess));

// app.set('view options', {layout: 'main'});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

// sync sequelize models to the database, then turn on the server
//sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`Now listening to ${PORT}`));
  //});