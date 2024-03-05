import * as fs from "fs/promises";
import { isString } from "../utils/parser.mjs";
import path from "path";

export async function readFiles(cwd) {
  try {
    const files = await fs.readdir(cwd);
    return files;
  } catch (err) {
    console.error("err:", err.message);
    return;
  }
}
// createfile
export async function createFile(url, nameFile) {
  try {
    const route = url + "/" + nameFile;
    const createDir = await fs.mkdir(route, { recursive: true });

    return createDir;
  } catch (err) {
    console.error("error:", err.message);
  }
}

export function CreateGitFromTree(tree, prefix) {
  Object.keys(tree).forEach(async (element) => {
    let nodePath = path.join(prefix, element);
    if (isString(tree[element])) {
      await fs.writeFile(nodePath, tree[element]);
    } else {
      console.log(nodePath);
      let exist = await existFile(nodePath);

      if (!exist) {
        await fs.mkdir(nodePath, "777", { recursive: true });
        await CreateGitFromTree(tree[element], nodePath);
      }
    }
  });
}
async function existFile(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}
