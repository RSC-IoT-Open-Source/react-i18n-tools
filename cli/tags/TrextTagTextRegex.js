module.exports = (flags = 's') => {
    return RegExp(/<Trext.*?>(.*?)<\/Trext>/, flags)
}
