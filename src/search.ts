import { File } from "./files"

export function getMatchingFiles(files: File[], regexString: string): string[] {
    let out: string[] = []

    const re = new RegExp(regexString)

    for (const file of files) {
        if (re.exec(file.path) || re.exec(file.contents)) {
            out.push(file.path)
        }
    }

    return out
}
