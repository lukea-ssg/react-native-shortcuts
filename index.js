#!/usr/bin/env node

var exec = require('child_process').exec;


exec("adb shell input keyevent 82", function(err, stdout, stderr) {
    if (err) {
        console.error(stderr);
        process.exit(err.code)
    }
    console.log(stdout);
    process.exit();
});