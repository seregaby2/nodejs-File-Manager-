import os from 'os';
import * as path from 'path'

export const listDataName = (pathArg) => {
    const PathToDirectory = path.join(os.homedir(), pathArg);
    process.chdir(PathToDirectory)
    console.log(`You are currently in ${process.cwd()}\n`)
}