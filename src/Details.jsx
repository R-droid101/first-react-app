import { useEffect, useState } from "react";
import { useParams } from 'react-router';


function Details() {
    const [pokemon, setPokemon] = useState([]) 
    const {name} = useParams();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(resp => resp.json())
    .then(body => setPokemon(body))
  }, [name])

  if(!pokemon) {
      return(<h1>Loading...</h1>)
  }

  return (
    <div>
        <h1>{pokemon.name}</h1>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Order: {pokemon.order}</p>
    </div>
  );
}

export default Details