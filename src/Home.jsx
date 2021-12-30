import React from 'react'
import { useEffect, useState } from "react";


function Home() {
    const [pokemon, setPokemon] = useState([]) 
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then(resp => resp.json())
    .then(body => setPokemon(body.results))
  }, [])

  return(
  <ol className = "App">
    {pokemon.map(p => (
      <li>
        <a href={`/${p.name}`}>{p.name}</a>
      </li>
    ))}
  </ol>
  );
}

export default Home