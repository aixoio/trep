
export interface Args {
    regex: string
    findInFiles: boolean
    isVaild: boolean
}

export function getArgs(): Args {
    let args = process.argv

    let findInFiles = args.includes("-f") || args.includes("--files")
    let regex = args[args.length - 1]

    return {
        findInFiles,
        regex,
        isVaild: true
    }
}
