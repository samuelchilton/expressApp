exports.handler = async (event, context) => {
    var params = event["queryStringParameters"];
    return `${params.temperature} , ${params.humidity}`;
};