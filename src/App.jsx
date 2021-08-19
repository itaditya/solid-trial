import { Suspense, ErrorBoundary } from 'solid-js';
import { Router } from 'solid-app-router';

import { ControlsProvider } from './ControlsStore';
import { Pages } from './pages/Pages';
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
          <ControlsProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Pages />
              <Modal />
            </Suspense>
          </ControlsProvider>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
