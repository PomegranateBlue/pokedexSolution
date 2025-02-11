import PokemonList from "../components/PokemonList";
import DashBoard from "../components/DashBoard";
import MOCK_DATA from "../assets/MOCK_DATA";
import { useState } from "react";
const Dex = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const addPokemon = (pokemon) => {
    if (selectedPokemons.find((e = e.id === pokemon.id))) {
      return alert("You already added this pokemon");
    }
    if (selectedPokemons.length >= 6) {
      return alert("You can only select 6 pokemons");
    }
    setSelectedPokemons([...selectedPokemons]);
  };
  const removePokemon = (pokemon) => {
    const updatedPokemon = selectedPokemons.filter((e) => e.id !== pokemon.id);
    setSelectedPokemons([updatedPokemon]);
  };
  return (
    <div>
      <h1>PokeDex</h1>
      <DashBoard
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
