"use strict";

var App = require('widget-cms');
var ContactsController = App.getController('Contacts');


App.get('/', ContactsController.getAll);
App.get('/contact/:id', ContactsController.get);
App.post('/contact', ContactsController.add);

module.exports = {};
