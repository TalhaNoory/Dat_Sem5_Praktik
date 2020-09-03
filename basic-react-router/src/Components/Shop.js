import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

// State is holding the information that we getting from the API
// Effect basically runs the fetch-call when our component mounts

function Shop() {

  const shopStyle = {
    color: 'black'
  }

  useEffect(() => {
    fetchData();
  }, []) //<-- This will only run, when the component mounts

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"`
    );

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  }

  return (
    <div>
      {items.map(items => (
        <h1 key={items.name}>
        <Link style={shopStyle} to={`/shop/${items.name}`}>{items.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;