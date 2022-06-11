import * as fs from 'fs'
import zlib from 'zlib';
import * as path from 'path'


export const compress = async(PathRead, PathWrite) => {
    try {
        const PathFromRead = path.join(process.cwd(), PathRead);
        const PathToWrite = path.join(process.cwd(), PathWrite);
    
    
        const source = fs.createReadStream(PathFromRead)
        const arrNameCompressFile = PathFromRead.split('\\')
        const nameCompressFile = arrNameCompressFile[arrNameCompressFile.length -1]
        const destination = fs.createWriteStream(`${PathToWrite}/${nameCompressFile}.br`)
        const brot =  zlib.createBrotliCompress();
        source.pipe(brot).pipe(destination);
        console.log('compress has successful')
    }
    catch {
        console.log('Operation failed, This file was not found')
    }
    
}
