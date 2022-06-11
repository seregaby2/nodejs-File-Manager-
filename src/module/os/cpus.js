import os from 'os'

export const cpus = () => {
    console.log(os.cpus(), 'info cpus')
}