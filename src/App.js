import { useState } from 'react';
import { data } from './data';
import './App.css';
import PlacesVisited from './PlacesVisited';

function App() {
  const [places, setPlaces] = useState(0)
  const { name, image } = data[places];

  const previousSlide = () => {
    setPlaces((places => {
      places --;
      if (places < 0) {
        return data.length - 1;
      }
      return places;
    }))
  }

  const nextSlide = () => {
    setPlaces((places => {
      places ++;
      if (places > data.length - 1) {
        places = 0;
      }
      return places;
    }))
  }

  return (
    <div>
      < PlacesVisited />
      
      <div className='btn container'>
        <button onClick={previousSlide} className='btn-slide'>Previous</button>
        <div>
          <h2>{name}</h2>
          <img src={image} width="200px" height="300px" alt="pic"/>
        </div>
        <button onClick={nextSlide} className='btn-slide'>Next</button>
      </div>
    </div>
  );
}
export default App;