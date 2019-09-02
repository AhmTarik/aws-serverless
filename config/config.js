module.exports = {
    logLevel: process.env.LOG_LEVEL || 'info',
    dynamoDB: {
        region: process.env.DYNAMO_DB_REGION || 'us-east-1',
        accessKeyId: process.env.DYNAMO_DB_ACCESS_KEY || "",
        secretAccessKey: process.env.DYNAMO_DB_SCRET_KEY || ""
    }
};