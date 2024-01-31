#!/usr/bin/env node
import { searchCommands } from "./utils/parser.mjs";
import { ErrCommandMissingGitCJ } from "./utils/error.mjs";
import { Route } from "./comands/route.mjs";
try {
  RunCli(process.argv);
} catch (e) {
  console.error("error:", e.message);
}

function RunCli(args) {
  let opts = searchCommands(args);
  if (opts[0] != "gitCJ") {
    throw ErrCommandMissingGitCJ;
  }
  let actionName = opts[1];
  Route(actionName);
}
