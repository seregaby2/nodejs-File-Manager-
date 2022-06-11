import * as fs from 'fs/promises'
import * as path from 'path'

export const removeFile = async (fileName) => {
    const PathFromDelete = (path.join(process.cwd(), fileName));

    fs.unlink(PathFromDelete)
    .then(()=>console.log('File removed\n'))
    .catch((err)=> {if(err) console.log('Operation failed, This file was not found\n')})
};