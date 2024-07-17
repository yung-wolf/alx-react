// Convert obj to an immutable Map
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}
