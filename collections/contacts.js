"use strict";

/**
 * Blog categories collection
**/

const App = require('widget-cms');
const Contact = require('../models/contact');


let Contacts = App.Collection.extend({

  model: Contact

});

module.exports = App.addCollection('Contacts', Contacts);
