const PokemonCard = ({ pokemon, addPokemon }) => {
  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>Type: {pokemon.types.join(", ")}</p>
      <button onClick={() => addPokemon(pokemon)}>ADD</button>
    </div>
  );
};

export default PokemonCard;
