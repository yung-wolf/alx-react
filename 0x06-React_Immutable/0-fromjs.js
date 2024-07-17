// Convert obj to an immutable Map
const { fromJS } = require('immutable');

function getImmutableObject(object) {
  return fromJS(object);
}
