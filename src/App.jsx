import { Suspense, ErrorBoundary } from 'solid-js';
import { Router } from 'solid-app-router';

import { ControlsProvider } from './ControlsStore';
import { Pages } from './Pages';
import { Modal } from './Modal';
import styles from './App.module.css';

function getErrorFallback(error) {
  return <div>Something went wrong. Error- {error.message}</div>;
}

function App() {
  return (
    <div class={styles.App}>
      <ErrorBoundary fallback={getErrorFallback}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <ControlsProvider>
              <Pages />
              <Modal />
            </ControlsProvider>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
