/**
 * *********************
 * 
 * @module API
 * @author the3ddy
 * @date 5/23/2019
 * @description where the routes live
 * 
 * *********************
 */

/**
 * Module Dependencies
 */
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const app = express();

/**
 * "Database" Setup
 */
// path to sample data
const itemsPath = path.resolve(__dirname, './resources/items.json');
// grabs the actual json data
const items = JSON.parse(fs.readFileSync(itemsPath));

/**
 * Use Statements
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// -------- Optional Stuff -------- //
// OPTIONAL: CORS Request
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// OPTIONAL: if serving static files
// app.use(express.static(path.join(__dirname, '../../dist')))
// -------------------------------- //


/**
 * API Routes
 */

// home route
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../../dist/index.html'))
});

// data route
app.get('/items', async (req, res) => {
  try {
    return res.status(200).send(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'db error'});
  }
})

module.exports = app;
