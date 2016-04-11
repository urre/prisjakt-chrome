/**
 * Prisjakt Chrome
 * MIT 2016 Urban Sandén
 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });