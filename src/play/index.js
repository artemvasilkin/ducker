const { exec } = require('child_process');

const play = (sound) => {
  exec(`afplay ${sound}`, error => console.log(error));
};

module.exports = {
  play: sound => play(sound),
};
