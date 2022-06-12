import * as fs from 'fs'
import * as path from 'path'


export const createFile = async (fileName) => {
    
    fs.writeFile(path.join(process.cwd(), fileName), '', { AbortSignal }, (err => {
        if(err) {
            console.log('Operation failed, Please enter correct command\n')
        }
            console.log('file created\n')
        
    }))
};