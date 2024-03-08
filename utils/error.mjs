/** @type {Error} ErrCommand */
export const ErrCommand = new Error("You must specify a gitCJ command to run.");

/** @type {Error} ErrCommandMissingGitCJ */
export const ErrCommandMissingGitCJ = new Error(
  "You have to put gitCJ before launching the action you want to perform.",
);
