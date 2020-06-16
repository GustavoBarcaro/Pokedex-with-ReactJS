import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard';
import axios from 'axios';



const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([{}]);
    const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon/?limit=890')
    // const [previousURL, setPreviousURL] = useState('');
    // const [nextURL, setNextURL] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(URL)
            .then(response => {
                setPokemons(response.data.results);
                // setPreviousURL(response.data.previous);
                // setNextURL(response.data.next)
            })
            .catch(e => {
                setError(e)
                console.log(error);
            })
    }, [URL, error]);

    // const onChangePageHandler = (type) => {
    //     setURL(type === 'prev' ? previousURL : nextURL);
    // }

    return (
        <div className="row">
            {
                pokemons.map((each, id) => (
                    <PokemonCard 
                        key={each.name + id} 
                        name={each.name}
                        url={each.url}
                    />
                )) 
            }
            {/* <button onClick={() => onChangePageHandler('prev')}>Previous</button>
            <button onClick={() => onChangePageHandler('next')}>Next</button> */}
        </div>
    )
}

export default PokemonsList