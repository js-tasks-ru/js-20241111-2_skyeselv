/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
<<<<<<< HEAD
  if (!obj) {
    return undefined;
  }

  if (!Object.keys(obj).length) {
    return {};
  }

  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: key }),
    {}
  );
=======

>>>>>>> 5ca3e30b0873e9e272ddb93f7ce6ca2c5baafb9d
}
