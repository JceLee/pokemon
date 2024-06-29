"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch(`/api/pokemons`);
      const data = await response.json();
      setPokemonData(data);
      setIsLoading(false);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <p className="text-xl font-semibold">불러오는 중입니다...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemonData.map((pokemon) => (
            <div key={pokemon.id} className="pokemon p-4 border rounded-lg">
              <Link href={`/pokemon/${pokemon.id}`}>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
