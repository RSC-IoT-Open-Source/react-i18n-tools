module.exports = (flags = 'gm') => {
    return RegExp(/<Trext([A-z0-9\-$&+,:;=?@"#|'<>{}.-^*()%!\s]*?)>([A-z0-9\-$&+,:;=?@#|'<>"{}.-^*()%!\s]*?)<\/Trext>/, flags)
}
