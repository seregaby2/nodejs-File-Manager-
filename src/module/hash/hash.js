import { createHash } from 'crypto';
import * as fs from 'fs'
import * as path from 'path'

export const calculateHash = async (pathArg) => {
    let data = ''
    const PathFromRead = path.join(process.cwd(), pathArg);
    const readData = fs.createReadStream(PathFromRead, 'utf-8')
    readData.on('data', chunk => data += chunk);
    readData.on('end', ()=> console.log(createHash('sha256').update(data).digest('hex')))
    readData.on('error', e => console.log('operation failed'))
};