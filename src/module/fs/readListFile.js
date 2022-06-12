import * as fs from 'fs/promises'

export const readListFile = () => {
    fs.readdir(process.cwd())
    .then(data=>console.table(data))
    .catch((err)=> {if(err) console.log('Operation failed, This file was not found\n')})
}