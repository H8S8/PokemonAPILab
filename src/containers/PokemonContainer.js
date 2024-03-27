import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        return response.json();
    }
    
    const loadData = async () => {
        const jsonData = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=5");

        const completeJsonData = [];

        const mappedJsonData = jsonData.results.map((pokemon) => {
            const pokemonData = fetchData(pokemon.url);
            return pokemonData;
        });
        Promise.all(mappedJsonData)
        .then((results)=>{
            results.forEach((pokemon) => {
                pokemon.seen = false;
            })
            console.log(results)
            setPokemons(results);
        })
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