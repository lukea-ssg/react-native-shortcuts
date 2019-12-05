#!/usr/bin/env node

var exec = require('child_process').exec;


exec("react-native run-android", function(err, stdout, stderr) {
    if (err) {
        console.error(stderr);
        process.exit(err.code)
    }
    console.log(stdout);
    process.exit();
});