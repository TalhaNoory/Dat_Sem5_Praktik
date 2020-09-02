import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

// State is holding the information that we getting from the API
// Effect basically runs the fetch-call when our component mounts

function Picture({ match }) {

    useEffect(() => {
        fetchPicture();
        console.log(match)
    }, []) //<-- This will only run, when the component mounts

    const [item, setItem] = useState({});

    const fetchPicture = async () => {
        const fetchPicture = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?
            ${match.params.id}`
        )

        const picture = await fetchPicture.json();
        setItem(picture)
        // console.log(picture)
    }

    return (
        <div>
            <h1>Picture</h1>
        </div>
    );
}

export default Picture;