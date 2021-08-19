import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

export const ControlsContext = createContext();
const { Provider } = ControlsContext;

export function ControlsProvider(props) {
  const [state, setState] = createStore({
    modals: {},
    toasts: {
      toastsMap: {},
      toastsList: ['abc'],
    },
    tooltips: {},
  });

  function openModal(modalId) {
    setState('modals', 'modalMap', modalId);
  }

  const store = [
    state,
    {
      openModal,
    },
  ];

  return <Provider value={store} children={props.children} />;
}

export function useControls() {
  const store = useContext(ControlsContext);
  return store;
}
