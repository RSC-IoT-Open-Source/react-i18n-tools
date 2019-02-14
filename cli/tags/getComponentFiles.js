const fs = require('fs')

module.exports = function getComponentFiles(currentDirectory) {
    const directories = fs.readdirSync(currentDirectory)
        .map((directory) => `${currentDirectory}/${directory}`)
        .filter((directory) => fs.statSync(`${directory}`).isDirectory())
    const files = fs.readdirSync(currentDirectory)
        .map((file) => `${currentDirectory}/${file}`)
        .filter((file) => fs.statSync(`${file}`).isFile())

    return [
        ...files,
        ...directories.reduce((acc, directory) => {
            return [
                ...acc,
                ...getComponentFiles(directory)
            ]
        }, [])
    ]
}
