import * as fs from 'fs'
import * as path from 'path'
import os from 'os';

export const readFile = async (pathArg) => {
    let data = ''
    const PathToDirectory = path.join(process.cwd(), pathArg);
    const readData = fs.createReadStream(PathToDirectory, 'utf-8')
    readData.on('data', chunk => data += chunk);
    readData.on('end', ()=> process.stdout.write(`${data}\n`))
    readData.on('error', e => console.log('operation failed'))
};