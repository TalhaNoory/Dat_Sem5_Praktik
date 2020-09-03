import React, { useState, useEffect } from 'react';
import '../App.css';

// State is holding the information that we getting from the API
// Effect basically runs the fetch-call when our component mounts

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match)
    }, []) //<-- This will only run, when the component mounts

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=
            ${match.params.id}`
        )

        const item = await fetchItem.json();
        setItem(item)
        // console.log(name)
    }

    return (
        <div>
            <h1>Item</h1>
        </div>
    );
}

export default ItemDetail;