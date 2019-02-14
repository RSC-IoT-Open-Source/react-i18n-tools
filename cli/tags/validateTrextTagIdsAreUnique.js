module.exports = function (tags) {
    for (let tag of tags) {
        const collisions = tags.filter(({ __id }) => __id === tag.__id)
        if (collisions.length !== 1) {
            const listOfCollidingIdFiles = collisions.map((collision) => collision.__componentFilePath).join("\n")
            console.error(`An ID was not unique across the project. The ID was ${tag.__id}`)
            console.error(`\nThe collision was detected in these files:\n\n${listOfCollidingIdFiles}`)
            process.exit()
        }
    }
}
