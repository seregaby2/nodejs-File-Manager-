import os from 'os'

export const userName = () => {
    console.log(os.userInfo().username)
}