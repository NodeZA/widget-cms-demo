"use strict";

const App = require('widget-cms');


let ContactsController = App.Controller.extend({
   getAll: function (req, res, next) {
     let contacts = App.getCollection('Contacts');

     contacts.fetchBy('id')
     .then(function (collection) {
       res.json(collection.toJSON());
     })
     .catch(function (error) {
       next(error);
     });
   },

   get: function (req, res, next) {
     let Contact = App.getModel('Contact');

     Contact.forge({id: req.params.id})
     .fetch()
     .then(function (details) {
       res.json(details.toJSON());
     })
     .catch(function (error) {
       next(error);
     });
   },


   add: function (req, res, next) {
     let Contact = App.getModel('Contact');

     Contact.save({
       name: req.body.name,
       email: req.body.email,
     })
     .then(function (details) {
       res.json(details.toJSON());
     })
     .catch(function (error) {
       next(error);
     });
   }
});

module.exports = App.controller('Contacts', ContactsController);
