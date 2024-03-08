import * as fs from "fs/promises";
import { isString } from "../utils/parser.mjs";
import path from "path";

/**
 * @param{string} cwd
 * @returns {string[]} this is the result
 */
export async function readFiles(cwd) {
  try {
    const files = await fs.readdir(cwd);
    return files;
  } catch (err) {
    console.error("err:", err.message);
    return "";
  }
}
// createfile
/**
 * @param{string} url
 * @param{string} nameFile
 * @returns {string} this is the result
 */
export async function createFile(url, nameFile) {
  try {
    /** @type{string} */
    const route = url + "/" + nameFile;
    /** @type{string | undefined}*/
    const createDir = await fs.mkdir(route, { recursive: true });
    if (createDir == undefined) {
      return " ";
    }
    return createDir;
  } catch (err) {
    console.error("error:", err.message);
  }
}
/**
 * @param{object} tree
 * @param{string} prefix
 * @returns {void} this is the result
 */
export function CreateGitFromTree(tree, prefix) {
  Object.keys(tree).forEach(async (element) => {
    /** @type{string}*/
    let nodePath = path.join(prefix, element);
    if (isString(tree[element])) {
      await fs.writeFile(nodePath, tree[element]);
    } else {
      /** @type{boolean} */
      let exist = await existFile(nodePath);

      if (!exist) {
        await fs.mkdir(nodePath, "777", { recursive: true });
        await CreateGitFromTree(tree[element], nodePath);
      }
    }
  });
}
/**
 * @param{string} path
 * @returns{boolean}
 */
async function existFile(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}
