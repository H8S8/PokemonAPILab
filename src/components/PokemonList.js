import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList }) => {

    const mappedPokemon = pokemonList.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
        <>
            <p> PokemonList Component </p>
            <div className="pokemon-list">
                {mappedPokemon}
            </div>
        </>
    );
}
 
export default PokemonList;