import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

// State is holding the information that we getting from the API
// Effect basically runs the fetch-call when our component mounts

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, []) //<-- This will only run, when the component mounts

    const [item, setItem] = useState({
        "types": [
            {
                "slot": "",
                "type": {
                    "name": "",
                    "url": ""
                }
            },
            {
                "slot": "",
                "type": {
                    "name": "",
                    "url": ""
                }
            }
        ],
        "sprites":
        {
            "back_default": "",
            "back_female": "",
            "back_shiny": "",
            "back_shiny_female": "",
            "front_default": "",
            "front_female": "",
            "front_shiny": "",
            "front_shiny_female": ""
        }
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
        )

        const item = await fetchItem.json();
        setItem(item)
        console.log(item)
    }

    return (
        <div>
            <img src={item.sprites.front_default} alt=''></img>
        </div>
    );
}

export default ItemDetail;