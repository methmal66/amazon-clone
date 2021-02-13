function isValidUser(req) {
  const schema = {
    name: Boolean(req.body.name),
    address: Boolean(req.body.address),
  };

  for (let key in schema) {
    let isValid = schema[key];
    if (!isValid) return false;
  }

  return true;
}

exports.isValidUser = isValidUser;
