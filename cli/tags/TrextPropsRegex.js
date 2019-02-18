module.exports = (flags = 'g') => {
    // TODO: Need to fix capturing more than letters, numbers and dashes with the Props regex.
    return RegExp(/([A-z0-9]+)=(?:'([A-z0-9\-]+)'\s*|"([A-z0-9]+)"\s*|{'([A-z0-9\-]+)'}\s*|{"([A-z0-9\-]+)"}\s*|{([A-z0-9\-]+)}\s*)+/, flags)
}
