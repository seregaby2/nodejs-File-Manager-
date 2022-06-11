import  { parseArgs }  from './module/pasreArgs.js';
import  { listDataName }  from './module/navigation/listDataName.js';
import  { upDirectory }  from './module/navigation/upDirectory.js';
import  { readListFile }  from './module/fs/readListFile.js';
import  { readFile }  from './module/fs/readFile.js';
import  { createFile }  from './module/fs/createFile.js';
import { renameFile } from './module/fs/renameFile.js';
import { removeFile } from './module/fs/removeFile.js';
import { copyFile } from './module/fs/copyFile.js';
import { moveFile } from './module/navigation/moveFile.js';
import { eol } from './module/os/EOL.js';
import { cpus } from './module/os/cpus.js';
import { getHomeDir } from './module/os/getHomeDir.js';
import { userName } from './module/os/userName.js';
import { architecture } from './module/os/architecture.js';
import os from 'os';
import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { Hash } from 'crypto';
import { calculateHash } from './module/hash/hash.js';







const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromCopy = (path.join(__dirname, 'files'));
const PathToCopy = path.join(__dirname, 'files_copy');

export const main = async() => {
    
    process.stdin.on('data', data => {
        const answer = data.toString().trim();
        const answerPath = answer.split(' ');

        switch(answer) {
            case '.exit': 
                console.log(`\nThank you for using File Manager, ${parseArgs()}`)
                process.exit()
            case 'up': 
                upDirectory()
                break
            case `cd ${answerPath[1]}`:
                listDataName(answerPath[1])
                break
            case 'ls':
                readListFile()
                break
            case `cat ${answerPath[1]}`:
                readFile(answerPath[1])
                break
            case `add ${answerPath[1]}`:
                createFile(answerPath[1])
                break
            case `rn ${answerPath[1]} ${answerPath[2]}`:
                renameFile(answerPath[1], answerPath[2])
                break
            case `rm ${answerPath[1]}`:
                removeFile(answerPath[1])
                break
            case `cp ${answerPath[1]} ${answerPath[2]}`:
                copyFile(answerPath[1], answerPath[2])
                break
            case `mv ${answerPath[1]} ${answerPath[2]}`:
                moveFile(answerPath[1], answerPath[2])
                break
            case 'os --EOL':
                eol()
                break
            case 'os --cpus':
                cpus()
                break
            case 'os --homedir':
                getHomeDir()
                break
            case 'os --username':
                userName()
                break
            case 'os --architecture':
                architecture()
                break
            case `hash ${answerPath[1]}`:
                calculateHash(answerPath[1])
                break

            default: 
            console.log('\nInvalid input, please enter correct command')
        }
        
    })
    
    process.on('SIGINT', () => {
        console.log(`\nThank you for using File Manager, ${parseArgs()}`)
        process.exit()
      })

}

