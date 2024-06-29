import React from "react";
import PokemonList from "../components/PokemonList";

const Home = async () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">포켓몬 도감</h1>
      <PokemonList />
    </div>
  );
};

export default Home;
