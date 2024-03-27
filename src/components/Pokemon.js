const Pokemon = ({pokemon}) => {
    return (
        <article className="pokemon">
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={`image of ${pokemon.name}`}/>
            <button>Seen</button>
        </article>
    );
}
 
export default Pokemon;