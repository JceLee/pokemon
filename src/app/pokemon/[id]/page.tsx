import React from "react";
import { notFound } from "next/navigation";
import PokemonDetails from "../../../components/PokemonDetails";

const fetchPokemonData = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
};

const PokemonDetailsPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await fetchPokemonData(params.id);
  if (!pokemonData) {
    notFound();
  }
  return <PokemonDetails pokemon={pokemonData} />;
};

export default PokemonDetailsPage;
