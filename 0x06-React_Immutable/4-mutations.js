const { fromJS } = require('immutable');

export const map = fromJS({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
}); 

export const map2 = map.withMutations(mapElem => {
  mapElem.set(2, 'Benjamin').set(4, 'Oliver');
});
