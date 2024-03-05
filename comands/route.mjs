import { ErrCommand } from "../utils/error.mjs";
import { init } from "./init/init.mjs";
/*
 * @params {string} comand
 */
export function Route(comand, ...args) {
  switch (comand) {
    case "init":
      return init(args);
    default:
      throw ErrCommand;
  }
}
