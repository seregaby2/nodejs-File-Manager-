import os from 'os';
import * as path from 'path'

export const upDirectory = () => {
    if(os.homedir().length < process.cwd().length) {
        process.chdir(path.join(`${process.cwd()}`, '..'))
    }
    console.log(`You are currently in ${process.cwd()}\n`)
} 