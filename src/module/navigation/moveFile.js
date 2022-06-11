import { removeFile } from '../fs/removeFile.js';
import { copyFile } from '../fs/copyFile.js';

export const moveFile = async (pathFrom, pathTo) => {
    await copyFile(pathFrom, pathTo)
    await removeFile(pathFrom)
}