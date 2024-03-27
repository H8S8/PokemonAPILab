import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    
    const loadData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const jsonData = await response.json();
        setPokemon(jsonData.results);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        // https://pokeapi.co/api/v2/pokemon/
        <>
            <p> Pokemon Container </p>
            <PokemonList pokemonList = {pokemon}/>
        </>
    );
}
 
export default PokemonContainer;