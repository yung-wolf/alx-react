// Convert obj to an immutable Map
import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(object);
}
