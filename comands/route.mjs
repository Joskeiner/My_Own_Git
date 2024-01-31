import { ErrCommand } from "../utils/error.mjs";

export function Route(comand, ...args) {
  switch (comand) {
    case "init":
      return console.log(" funcion de comando init");
    default:
      throw ErrCommand;
  }
}
