import * as fs from 'fs/promises'

export const readListFile = () => {
    fs.readdir(process.cwd())
    .then(data=>console.log(data))
}