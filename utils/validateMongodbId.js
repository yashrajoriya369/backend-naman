const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (isValid) {
    throw new Error("THIS ID IS NOT VALID OR NOT FOUND");
  }
};
module.exports = validateMongoDbId;
