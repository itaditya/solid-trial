import { useControls } from './ControlsStore';

export function Modal() {
  const [state] = useControls();

  return (
    <div>
      Hello
      {JSON.stringify(state, null, 2)}
    </div>
  );
}
