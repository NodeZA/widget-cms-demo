"use strict";

/**
 * Module dependencies.
 */

var App = require('widget-cms');

var Contact =  App.Model.extend({

  tableName: 'contacts',

  hasTimestamps: false

});


module.exports = App.addModel('Contact', Contact);
