#!/usr/bin/env node

var NodeSounds = require('nodesounds')

var Sounds = new NodeSounds('.')

Sounds.add('quack','quack.mp3')

Sounds.play('quack')
