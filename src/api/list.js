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

function fetchList(page, getPrev) {
  const oldData = getPrev();

  console.log({
    page,
    oldData,
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listData);
    }, 3000);
  });
}

export function createGetList(router) {
  console.log(`router`, router.location.page); // aditodo remove this
  const page = 1;
  return createResource(page, fetchList, {
    name: 'list-resource',
  });
}
