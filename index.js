#!/usr/bin/env node

const player = require('play-sound')(opts = {})

player.play('quack.mp3', function(err) {
  if (err) throw err
})
