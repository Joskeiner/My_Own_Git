#!/usr/bin/env node
import { searchCommands } from "./utils/parser.mjs";
import { ErrCommandMissingGitCJ } from "./utils/error.mjs";
import { Route } from "./comands/route.mjs";
try {
  RunCli(process.argv);
} catch (e) {
  console.error("error:", e.message);
}

/*
 * @param {object} args
 * @returns {void}
 */
function RunCli(args) {
  let opts = searchCommands(args);
  if (opts[0] != "gitCJ") {
    throw ErrCommandMissingGitCJ;
  }
  let actionName = opts[1];
  if (opts.length < 3) {
    Route(actionName);
  } else {
    let comands = opts[2];
    Route(actionName, comands);
  }
}
