/**
 * This module when coupled with rules, generates actual unique ids.
 */

function boot (lib) {
  /* lib is injected into the module functionality. the fallback is ofcourse our rules */

  const { joinOn, times, randomUniqueIdGenerator: gen, __version } = lib || require('./uniqueid.rules')

  /**
   * generates the long unique id
   * @param {String} joinOn What symbol to use to stitch together the multiple unique ids to generate one big unique id. '-' by default.
   */
  const generate = () => {
    let result = []
    for (let i = 0; i < times; i++) {
      result.push(gen())
    }
    result = result.join(joinOn)
    return { result, __version }
  }

  return {
    generate, __version
  }
}

module.exports = boot
