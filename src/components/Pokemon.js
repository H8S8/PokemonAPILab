const Pokemon = ({pokemon, markPokemonSeen}) => {

    const handleClick = () => {
        markPokemonSeen(pokemon);
    }

    return (
        <article className="pokemon">
            <p>{pokemon.name}</p>
            <img src={pokemon.seen ? pokemon.sprites.front_default : pokemon.sprites.back_default} alt={`image of ${pokemon.name}`}/>
            {pokemon.seen ? <></> : <button onClick={handleClick}>Seen</button>}
        </article>
    );
}
 
export default Pokemon;