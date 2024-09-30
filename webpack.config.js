import path from 'path';

module.exports = {
    resolve: {
        fallback: {
            "path": false,
            "os": false,
            "crypto": false
        }
    }
};
