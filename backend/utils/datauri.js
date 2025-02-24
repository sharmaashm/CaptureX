

const DataUriParser = require("datauri/parser");
const path = require("path");

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    // Return the content string (data URI string)
    return parser.format(extName, file.buffer).content;
}

module.exports = getDataUri;
