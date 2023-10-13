import { getAllFiles } from "./files";
import { getArgs } from "./parseargs"

let args = getArgs()
let files = getAllFiles(__dirname)
