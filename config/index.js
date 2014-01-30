/** Locker.js Configuration File
*
* This module loads a JSON config file matching the NODE_ENV variable based on
* the process.env.NODE_ENV variable. The default is 'development.json' if the
* NODE_ENV is not set.
* Custom environment files can be added (ie: staging.json), to match the NODE_ENV.
*/

// TODO: Test if the app defaults to the development env if NODE_ENV=undefined

module.exports = require('./' + (process.env.NODE_ENV || 'development') + '.json');
