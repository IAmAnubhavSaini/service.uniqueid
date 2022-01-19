/**
 * This module when coupled with rules, generates actual unique ids.
 */

function boot(lib) {
    /* lib is injected into the module functionality. the fallback is ofcourse our rules */

    const {joinOn, times, randomUniqueIdGenerator, __version} = lib || require('./uniqueid.rules');

    /**
     * generates the long unique id
     * @param {String} _joinOn What symbol to use to stitch together the multiple unique ids to generate one big unique id. '-' by default.
     */
    const generate = (_joinOn = joinOn) => {
        const result = new Array(times).fill(0)
            .map(_ => randomUniqueIdGenerator())
            .join(_joinOn);
        return {result, __version};
    };

    return {
        generate, __version
    };
}

module.exports = boot;
