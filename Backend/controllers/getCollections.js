const {databaseConnector}  = require('../middleware/databaseConnector')


const databasePromise =  databaseConnector;
async function getCollection(collectionName) {
    const database =  await databasePromise
    return await database.collection(collectionName)
}
module.exports = {getCollection};

