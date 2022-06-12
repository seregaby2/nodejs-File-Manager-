export const parseArgs = () => {
    const consoleArgv = process.argv.slice(2)
    return consoleArgv[0].slice(11)
};