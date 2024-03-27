import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList }) => {

    const mappedPokemon = pokemonList.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
        <>
            <p> PokemonList Component </p>
            {mappedPokemon}
        </>
    );
}
 
export default PokemonList;