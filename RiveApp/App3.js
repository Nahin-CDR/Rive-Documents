import './App.css';
import React from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

function App() {
     const { rive, RiveComponent } = useRive({
          src: "https://cdn.rive.app/animations/vehicles.riv",
          stateMachines: "bumpy",
          autoplay: true,
     });
                                             /// STATE_MACHINE_NAME, INPUT_NAME
     const bumpInput = useStateMachineInput(rive, "bumpy", "bump");
  return(
  <RiveComponent
     style={{ height: "500px" ,width: "500px" }}
     onClick={() => bumpInput && bumpInput.fire()}
     />
  );
}

export default App;
