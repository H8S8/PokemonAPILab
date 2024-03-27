import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        return response.json();
    }
    
    const loadData = async () => {
        const jsonData = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=30");

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

    const markPokemonSeen = (seenPokemon) => {
        const pokemonClone = [...pokemons];
        console.log("seen");
        pokemonClone.forEach((pokemon) => {
            if(pokemon.id === seenPokemon.id){
                pokemon.seen = true;
            }
        })
        setPokemons(pokemonClone);
        console.log(pokemons);
    }

    return (
        // https://pokeapi.co/api/v2/pokemon/
        <>
            <p> Pokemon Container </p>
            <PokemonList pokemonList = {pokemons} markPokemonSeen={markPokemonSeen}/>
        </>
    );
}
 
export default PokemonContainer;