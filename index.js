#!/usr/bin/env node

const { exec } = require('child_process');

exec('afplay quack.mp3', function(err) {})
