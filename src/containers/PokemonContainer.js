import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const jsonData = await response.json();
        // console.log(jsonData);
        return jsonData;
    }
    
    const loadData = async () => {
        const jsonData = await fetchData("https://pokeapi.co/api/v2/pokemon/");
        console.log(jsonData);

        const mappedJsonData = await jsonData.results.map((pokemon) => {
            const pokemonData = fetchData(pokemon.url);
            return pokemonData;
        });
        console.log(mappedJsonData);

        setPokemons(mappedJsonData);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        // https://pokeapi.co/api/v2/pokemon/
        <>
            <p> Pokemon Container </p>
            <PokemonList pokemonList = {pokemons}/>
        </>
    );
}
 
export default PokemonContainer;