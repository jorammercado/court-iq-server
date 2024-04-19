const db = require(`../db/dbConfig.js`)

const getHeading = async () => {
    try {
        const heading = await db.any(`SELECT * FROM knickspropsheading`)
        return heading
    }
    catch (err) {
        return { err: `${err}, sql query error - get heading` }
    }
}

module.exports = {
    getHeading
}
