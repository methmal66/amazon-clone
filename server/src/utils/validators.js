function isValidUser(req) {
    var schema = {
        name: Boolean(req.body.name),
        address: Boolean(req.body.address)
    };
    for (var key in schema) {
        var isValid = schema[key];
        if (!isValid)
            return false;
    }
    return true;
}
exports.isValidUser = isValidUser;
