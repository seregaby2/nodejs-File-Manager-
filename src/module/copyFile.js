import * as fs from 'fs/promises'
import * as path from 'path'

export const copyFile = async (PathFrom, PathTo) => {
    const PathFromCopy = (path.join(process.cwd(), PathFrom));
    const PathToCopy = (path.join(process.cwd(), PathTo));

    fs.copyFile(PathFromCopy, PathToCopy)
    .then(() => console.log('File copied\n'))
    .catch((err)=> {if(err) console.log('Operation failed, This file was not found\n')})
}