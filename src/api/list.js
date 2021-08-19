import { createResource } from 'solid-js';

const listData = [
  {
    id: 'id-1',
    text: 'Hello 1',
  },
  {
    id: 'id-2',
    text: 'Hello 2',
  },
];

function fetchList(page) {
  console.log(`page`, page); // aditodo remove this
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listData);
    }, 3000);
  });
}

export function createGetList(page) {
  return createResource(page, fetchList, {
    name: 'list-resource',
  });
}
