import { Suspense, ErrorBoundary } from 'solid-js';

import { ControlsProvider } from './ControlsStore';
import { Modal } from './Modal';
import { List } from './List';
import { CreateItem } from './CreateItem';
import styles from './App.module.css';

function getErrorFallback(error) {
  return <div>Something went wrong. Error- {error.message}</div>;
}

function App() {
  return (
    <div class={styles.App}>
      <ErrorBoundary fallback={getErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <ControlsProvider>
            <CreateItem />
            <List />
            <Modal />
          </ControlsProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
