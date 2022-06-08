import { removeFile } from './removeFile.js';
import { copyFile } from './copyFile.js';

export const moveFile = async (pathFrom, pathTo) => {
    await copyFile(pathFrom, pathTo)
    await removeFile(pathFrom)
}