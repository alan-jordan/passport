var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var users = require('../../server/db/users')
