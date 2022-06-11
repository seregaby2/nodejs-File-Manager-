import * as fs from 'fs/promises'
import * as path from 'path'

export const renameFile = async (fileName ,PathToRename) => {
    const PathFromRename = (path.join(process.cwd(), fileName));
    
    fs.readFile(PathFromRename)
    .then(fs.rename(PathFromRename, PathToRename))
    .then(()=> console.log('File renamed\n'))
    .catch((err)=> {if(err) console.log('Operation failed, Please enter correct command\n')})
};
