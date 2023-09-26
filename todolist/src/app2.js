import React, { useState } from 'react';
import data from './projects/Tours/data';
import Tours from './projects/Tours/Tours';

const App2 = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tour Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (  
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App2;
