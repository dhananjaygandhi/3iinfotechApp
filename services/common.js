exports.filter = function (arr, id) {
  let result = arr.filter(user => user.id == id);
  return result;
}

exports.deleteOne = function (arr, id) {
  let result = arr.filter(user => user.id != id);
  return result;
}
