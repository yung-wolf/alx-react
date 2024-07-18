import { List, Map } from 'immutable';
// const { List, Map } = require('immutable');

function concatElements (page1, page2) {
  const list = page1.concat(page2);
  return List(list);
}

function mergeElements (page1, page2) {
  const list = page1.merge(page2);
  return Map(list);
}

module.exports = { concatElements, mergeElements }
