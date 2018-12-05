#!/usr/bin/env node

const { exec } = require('child_process');

exec(`afplay ${__dirname}/quack.mp3`, (err) => {});
