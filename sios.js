#!/usr/bin/env node

var exec = require('child_process').exec;


exec("open -a Simulator.app", function(err, stdout, stderr) {
    if (err) {
        console.error(stderr);
        process.exit(err.code)
    }
    console.log(stdout);
    process.exit();
});