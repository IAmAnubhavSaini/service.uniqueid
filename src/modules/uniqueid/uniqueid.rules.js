/* Rules help in loose coupling of concrete/side-effectual functions and their fundamental design blocks.
 * For example, just by changing value of `times` below, unique id generated will be different and actual
 * generat function doesn't need to change at all.
 * */

/**
 * times: number of unique ids stictched together
 */
const times = 3;

/**
 * joinOn: character or string that is used to stitch the unique ids together
 */
const joinOn = '-';

/**
 * which generator to use to generate random unique ids.
 * INTERFACE
 * randomUniqueIdGenerator should be a function
 */
const {v4: randomUniqueIdGenerator} = require('uuid');

/**
 * internal and external version of API; just of bookkeeping.
 * This is sure to change if anything changes here.
 */
const __version = {internal: 2, external: 'uuid/v4'};

module.exports = {joinOn, times, randomUniqueIdGenerator, __version};
