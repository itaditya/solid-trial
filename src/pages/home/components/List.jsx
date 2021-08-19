import { createEffect, createSignal, For } from 'solid-js';
import { useData, useLocation } from 'solid-app-router';

export function List() {
  const [data, { mutate }] = useData();
  const location = useLocation();
  const initialPage = Number(location.query.page) || 1;
  const [page, setPage] = createSignal(initialPage);

  function handleAddItem() {
    mutate([
      ...data(),
      {
        id: 'c',
        text: 'yolo',
      },
    ]);
  }

  function handleChangePage(direction) {
    setPage((oldPage) => {
      if (direction === 'next') {
        return oldPage + 1;
      }

      if (direction === 'prev' && oldPage > 1) {
        return oldPage - 1;
      }

      return oldPage;
    });
  }

  return (
    <div>
      <h2>Page {page()}</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={[handleChangePage, 'prev']}>Prev Page</button>
      <button onClick={[handleChangePage, 'next']}>Next Page</button>
      <ul>
        <For each={data()}>{(item) => <li>{item.text}</li>}</For>
      </ul>
    </div>
  );
}
