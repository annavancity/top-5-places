import { useState } from "react";
import { data } from "./data";
import './App.css';

function PlacesVisited() {
  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);

  const removePlace = (id) => {
    let newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }
  return (
    <div>
        <div className='container'>
            <h1>Top {places.length} places to visit in NYC</h1>
        </div>
        <div className='container_horiz'>
            {places.map((item => {
                const { id, name, description, image, showMore } = item;
                return(
                <div key = {id} className='container-place'>
                    <div>
                    <h2>{id} - {name}</h2>
                    </div>
                    <div>
                    <p>{showMore ? description : description.substring(0,45) +"..."}
                    <button onClick={() => showTextClick(item) > (!showMore)} className='btn-show'>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                    </div>
                    <div>
                    <img src={image} width="100px" height="150px"alt="hotel"/>
                    </div>
                    <div>
                    <button onClick={() => removePlace(id)} className='btn-remove'>Remove</button>
                    </div>
                </div>
                )
            }))}
        </div>
        <div className='container'>
            <button onClick={() => setPlaces([])} className='btn-remove'>Remove All</button>
        </div>
    </div>
  );
}
export default PlacesVisited;