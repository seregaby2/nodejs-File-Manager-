import  { parseArgs }  from './module/pasreArgs.js';
import  { listDataName }  from './module/listDataName.js';
import  { upDirectory }  from './module/upDirectory.js';
import  { readListFile }  from './module/readListFile.js';
import  { readFile }  from './module/readFile.js';
import  { createFile }  from './module/createFile.js';
import { renameFile } from './module/renameFile.js';
import { removeFile } from './module/removeFile.js';
import { copyFile } from './module/copyFile.js';
import { moveFile } from './module/moveFile.js';
import os from 'os';
import * as path from 'path'
import * as fs from 'fs/promises'
import { fileURLToPath } from 'url';




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

            default: 
            console.log('\nInvalid input, please enter correct command')
        }
        
    })
    
    process.on('SIGINT', () => {
        console.log(`\nThank you for using File Manager, ${parseArgs()}`)
        process.exit()
      })

}

