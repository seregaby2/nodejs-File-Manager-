import * as fs from 'fs'
import zlib from 'zlib';
import * as path from 'path'


export const decompress = async(PathRead, PathWrite) => {
    try {
        const PathFromRead = path.join(process.cwd(), PathRead);
        const PathToWrite = path.join(process.cwd(), PathWrite);
    
    
        const source = fs.createReadStream(PathFromRead)
        const arrNameCompressFile = PathFromRead.split('\\')
        const nameDecompressFile = arrNameCompressFile[arrNameCompressFile.length -1]

        const sliceName = nameDecompressFile.split('.')
        sliceName.pop()
        const fileName = sliceName.join('.')

        const destination = fs.createWriteStream(`${PathToWrite}/${fileName}`)
        const brot =  zlib.createBrotliDecompress();
        source.pipe(brot).pipe(destination);

        console.log('decompress has successful\n')
    } 
    catch {
        console.log('Operation failed, This file was not found\n')
    }
    
}
