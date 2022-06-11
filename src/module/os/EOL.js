import os from 'os'

export const eol = () => {
    console.log(JSON.stringify(os.EOL), 'default system End-Of-Line')
}