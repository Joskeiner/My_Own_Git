import { readFiles, createFile, CreateGitFromTree } from "../../utils/file.mjs";
export async function init(...args) {
  let nameFile = args[0][0];
  if (nameFile == undefined) {
    const rutaActual = process.cwd();
    let fileList = await readFiles(rutaActual);
    if (fileList.includes(".git")) {
      console.log("ya se creo un archivo .git");
    } else {
      console.log(`initialized empty repository:${rutaActual}`);
      CreateGitFromTree({ ".git": gitStructure }, rutaActual);
    }
  } else {
    console.log(`initialized empty repository:${nameFile}`);
    let pathName = await createFile(process.cwd(), nameFile);
    CreateGitFromTree({ ".git": gitStructure }, pathName);
  }
}
//structure of the.git folder in object from
const gitStructure = {
  HEAD: "ref: refs/heads/main\n",

  config:
    "[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true",

  objects: {},
  refs: {
    heads: {},
  },
};
