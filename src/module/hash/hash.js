import { createHash } from 'crypto';
import * as fs from 'fs/promises'
import * as path from 'path'

export const calculateHash = async (pathArg) => {
    const PathFromRead = path.join(process.cwd(), pathArg);
    fs.readFile(PathFromRead, {encoding: 'utf-8'})
    .then(data => createHash('sha256').update(data).digest('hex'))
    .then(data => console.log(data))
};