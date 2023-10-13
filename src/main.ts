import { convertFileListIntoFiles, getAllFiles } from "./files";
import { getArgs } from "./parseargs"
import { getMatchingFiles } from "./search"

const args = getArgs()
const files = getAllFiles(__dirname)
const trueFiles = convertFileListIntoFiles(args, files)

const matchingFiles = getMatchingFiles(trueFiles, args.regex)

for (const file of matchingFiles) {
    console.log(file)
}
