const db = require(`../db/dbConfig.js`)

const getProps = async () => {
    try {
        const heading = await db.any(`SELECT * FROM flattenedprops`)
        return heading
    }
    catch (err) {
        return { err: `${err}, sql query error - get props` }
    }
}

module.exports = {
    getProps
}
