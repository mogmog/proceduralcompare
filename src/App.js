import Procedural from './components/Procedural';
import ESRI from './components/ESRI';

import React, {useState} from 'react';

function App() {

  const [location, setLocation] = useState({
      esri :        { position: [7.654, 45.919, 5184] },
      procedural :  {"longitude":7.654,"latitude":45.919,"height":5184 }
  });

  return (
    <div className="App">

        <button
            className={'btn'}
            onClick={() => setLocation({
            esri :          { position : location.esri.position,        heading: 35 },
            procedural :    { ...location.procedural,  bearing: 35 },
        })}> Rotate Camera </button>

        <ESRI location={location.esri}/>

        <Procedural location={location.procedural}/>

    </div>
  );
}

export default App;
