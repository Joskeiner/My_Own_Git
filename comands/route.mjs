import { ErrCommand } from "../utils/error.mjs";
import { init } from "./init/init.mjs";
/**
 * @param {...*} args
 * @param {string} comand
 * @returns{void}
 */
export function Route(comand, ...args) {
  switch (comand) {
    case "init":
      return init(args);
    default:
      throw ErrCommand;
  }
}
