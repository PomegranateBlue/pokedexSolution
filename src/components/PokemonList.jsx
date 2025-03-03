import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <div>
      {pokemonData.map((pokemon) => {
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        ></PokemonCard>;
      })}
    </div>
  );
};

export default PokemonList;
