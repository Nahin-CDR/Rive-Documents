import './App.css';
import React from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

function App() {
  const styles = {
    width: '300px',
    height: '300px',
  };

  // const STATE_MACHINE_NAME = 'State Machine ';
  const STATE_MACHINE_NAME = 'state';
  // const INPUT_NAME = 'Level';
  const INPUT_NAME = 'number80';

  const { RiveComponent, rive } = useRive({
    src: 'docker.riv',
    stateMachines: STATE_MACHINE_NAME,
    // artboard: 'New Artboard',
    artboard: 'number',
    autoplay: true,
  });
  // levelInput is a number state machine input. To transition the state machine,
  // we need to set the value to a number. For this state machine input, we need
  // to set to 0, 1 or 2 for a state transition to occur.
  const levelInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);
  return (
    <div style={{ height: '500px', width: '500px' }}>
      <p>
        hello world
      </p>
    <RiveComponent />
    <div>
      Level:
      <button onClick={() => (levelInput.value = 80)}>80 port</button>
      {/* <button onClick={() => (levelInput.value = 1)}>1</button>
      <button onClick={() => (levelInput.value = 2)}>2</button> */}
    </div>
  </div>
  );
}

export default App;
