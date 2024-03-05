import { readFiles, createFile, CreateGitFromTree } from "../../utils/file.mjs";
export async function init(...args) {
  //console.log(import.meta.url);
  let nameFile = args[0][0];
  if (nameFile == undefined) {
    const rutaActual = process.cwd();

    let fileList = await readFiles(rutaActual);
    if (fileList.includes(".git")) {
      console.log("ya se creo un archivo .git");
    } else {
      CreateGitFromTree({ ".git": gitStructure }, rutaActual);
    }
  } else {
    let pathName = await createFile(process.cwd(), nameFile);
    CreateGitFromTree({ ".git": gitStructure }, pathName);
  }
}
//structure of the.git folder in object from
const gitStructure = {
  HEAD: "ref: refs/heads/master\n",

  config:
    "[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true",

  objects: {},
  refs: {
    heads: {},
  },
};
