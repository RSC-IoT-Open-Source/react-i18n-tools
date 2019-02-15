module.exports = (flags = 'g') => {
    return RegExp(/([A-z0-9]+)=(?:'([A-z0-9\-]+)'\s*|"([A-z0-9]+)"\s*|{'([A-z0-9\-]+)'}\s*|{"([A-z0-9\-]+)"}\s*|{([A-z0-9\-]+)}\s*)+/, flags)
}
