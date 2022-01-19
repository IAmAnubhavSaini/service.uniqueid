const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.showColors(true);
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute().catch(e => console.error(e));
