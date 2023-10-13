import * as fs from 'fs';
import * as path from 'path';

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
