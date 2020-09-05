#!/usr/bin/env node

var meow = require('meow'),
got = require('got');
meow(`
	Usage
	  $ node App.js
	It's down. Play with your 😸/🐶! And stay home!
`);
(async () => {
    var {status} = await got('https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json', {
		timeout: 10000,
		retry: 2
	}).json();

})();
