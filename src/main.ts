import { convertFileListIntoFiles, getAllFiles } from "./files";
import { getArgs } from "./parseargs"

const args = getArgs()
const files = getAllFiles(__dirname)
const trueFiles = convertFileListIntoFiles(args, files)
