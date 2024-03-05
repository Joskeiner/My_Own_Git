/*
 * @params {object} args
 * @returns {[]string} array
 */
export function searchCommands(args) {
  let array = Object.values(args);
  array.splice(0, 2);

  return array;
}
export function isString(thing) {
  return typeof thing === "string";
}
