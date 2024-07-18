import { List, Map } from 'immutable';
// const { List, Map } = require('immutable');

export function concatElements (page1, page2) {
  const l1 = List(page1);
  const l2 = List(page2);
  return l1.concat(l2);
}

export function mergeElements (page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeWith((oldVal, newVal) => newVal, map2);
  return List(mergedMap);
}