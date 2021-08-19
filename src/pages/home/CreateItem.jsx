import { useControls } from '../../ControlsStore';

export function CreateItem() {
  const [state, { openModal }] = useControls();

  return (
    <div>
      Create Item
      <button onClick={() => openModal('sdj')}>Open Modal</button>
    </div>
  );
}
