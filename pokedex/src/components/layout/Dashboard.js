import React from 'react'
import PokemonsList from '../pokemons/PokemonsList';

const Dashboard = () =>  {
    return (
        <div className="row">
            <div className="col">
                <PokemonsList/>
            </div>
        </div>
    )
}

export default Dashboard