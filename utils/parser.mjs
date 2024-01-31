export function searchCommands(args) {
  let array = Object.values(args);
  array.splice(0, 2);

  return array;
}
