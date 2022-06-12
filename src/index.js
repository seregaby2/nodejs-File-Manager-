
import  { parseArgs }  from './module/pasreArgs.js';
import { main } from './main.js'
import os from 'os';

console.log(`Welcome to the File Manager, ${parseArgs()}`)
process.chdir(os.homedir())
console.log(`\nYou are currently in ${process.cwd()}`)
main()

