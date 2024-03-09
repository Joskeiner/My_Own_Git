import { existRepo, lsAdd } from "../../utils/file.mjs";
import { ErrRepository } from "../../utils/error.mjs";
export async function add(arch) {
  let exist = await existRepo(process.cwd());
  if (!exist) {
    throw ErrRepository;
  }
  let arg = arch[0];
  let addFiles = await lsAdd(arg);
  console.log("archivos a agregar:", addFiles);
}
