import { List, Map } from 'immutable';
// const { List, Map } = require('immutable');

export function concatElements (page1, page2) {
  const list = page1.concat(page2);
  return List(list);
}

export function mergeElements (page1, page2) {
  const list = page1.merge(page2);
  return Map(list);
}
