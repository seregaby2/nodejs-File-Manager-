import * as fs from 'fs'
import * as path from 'path'

export const copyFile = async (PathFrom, PathTo) => {
    try {
        const PathFromCopy = (path.join(process.cwd(), PathFrom));
        const fileNameArr = PathFromCopy.split('\\')
        const fileName = fileNameArr[fileNameArr.length - 1]

        const PathToCopy = (path.join(process.cwd(), PathTo, fileName));

        const readData = fs.createReadStream(PathFromCopy, 'utf-8')
    
        const writeData = fs.createWriteStream(PathToCopy)
        readData.pipe(writeData)
        console.log('File copied\n', PathToCopy)
    }
    catch {
        console.log('Operation failed, This file was not found\n')
    }
    
}