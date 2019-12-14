# This project's structure

/src/  
/src/modules  
/src/modules/uniqueid  
/src/modules/uniqueid/uniqueid.module.js  
/src/modules/uniqueid/uniqueid.rules.js

## uniqueid.rules.js

Rules provide:

-   times: how many generator ids should be stitched together, default: 3
-   joinOn: the joining character/string, default: '-'
-   randomUniqueIdGenerator: function that generates random unique ids, default: uuid/v4
-   \_\_version: information about the version of the module

## uniqueid.module.js

Provids:

exports a function that accepts rules. If no rules provided then defaults to uniqueid.rules.js
