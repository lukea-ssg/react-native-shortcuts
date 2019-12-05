#!/usr/bin/env node

var exec = require('child_process').exec;

const params = process.argv.slice(2).map(x => x ==='d' ? 8081 : x);

(params.length > 0 ? params : [8081]).forEach(p => (
    exec(`adb reverse tcp:${p} tcp:${p}`, function(err, stdout, stderr) {
        if (err) {
            console.error(stderr);
            process.exit(err.code)
        }
        console.log(stdout);
        process.exit();
    }))
);