import * as fs from 'fs';
import * as path from 'path';
import { Args } from './parseargs';

export interface File {
    path: string
    contents: string
}

export function convertFileListIntoFiles(args: Args, filelist: string[]): File[] {

    const out: File[] = []

    for (const file of filelist) {
        out.push({
            path: file,
            contents: ""
        })
    }

    if (args.findInFiles) {
        for (const file of out) {
            const data = fs.readFileSync(file.path)
            file.contents = data.toString()
        }
    }

    return out
}

export function getAllFiles(path: string): string[] {
    let files: string[] = []
    walkDir(path, files)
    return files
}

function walkDir(dirpath: string, files: string[]) {
    const dirFiles = fs.readdirSync(dirpath)

    for (const file of dirFiles) {
        const filePath = path.join(dirpath, file)
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
            walkDir(filePath, files)
        } else {
            files.push(filePath)
        }

    }

}
