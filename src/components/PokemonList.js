import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList, markPokemonSeen }) => {

    const mappedPokemon = pokemonList.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} markPokemonSeen={markPokemonSeen}/>
    })

    return (
        <>
            <div className="pokemon-list">
                {mappedPokemon}
            </div>
        </>
    );
}
 
export default PokemonList;