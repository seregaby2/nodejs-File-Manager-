import os from 'os'

export const cpus = () => {
    os.cpus().forEach((e) => {
        const info = e.model.split(' ');
        const speed = info[info.length - 1];
        info.pop();
        const model = info.join('');
        console.log(`model: ${model}, speed: ${speed}`)
    })
    // console.log(info, 'info cpus')
}