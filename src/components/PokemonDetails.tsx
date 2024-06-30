import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PokemonDetailsProps {
  pokemon: {
    id: number;
    name: string;
    korean_name: string;
    height: number;
    weight: number;
    sprites: { front_default: string };
    types: { type: { name: string; korean_name: string } }[];
    abilities: { ability: { name: string; korean_name: string } }[];
    moves: { move: { name: string; korean_name: string } }[];
  } | null;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type) => (
      <span
        key={type.type.name}
        className="type bg-orange-500 text-white p-1 rounded mx-1"
      >
        {type.type.korean_name}
      </span>
    ));
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability) => (
      <span
        key={ability.ability.name}
        className="ability bg-green-500 text-white p-1 rounded mx-1"
      >
        {ability.ability.korean_name}
      </span>
    ));
  };

  return (
    <div className="pokemon-details max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-100 text-gray-800 text-center p-4">
        <h2 className="text-2xl font-bold">{pokemon.korean_name}</h2>
        <p>No. {pokemon.id.toString().padStart(4, "0")}</p>
      </div>
      <div className="p-4 text-black flex flex-col justify-start items-center">
        <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            className="mx-auto"
            width={96}
            height={96}
        />
        <p className="text-center text-xl my-2">이름: {pokemon.korean_name}</p>
        <div className="flex gap-2">
          <p className="text-center">키: {pokemon.height / 10} m</p>
          <p className="text-center">무게: {pokemon.weight / 10} kg</p>
        </div>
        <div className="flex gap-2">
          <div className="text-center my-2 flex gap-1">
            <p className="font-bold">타입:</p>
            <div>{renderTypes()}</div>
          </div>
          <div className="text-center my-2 my-2 flex gap-1">
            <p className="font-bold">특성:</p>
            <div>{renderAbilities()}</div>
          </div>
        </div>

        <div className="text-center my-2">
          <p className="font-bold mb-5">기술:</p>
          <div className="flex flex-wrap gap-2 items-center text-center justify-center">
            {pokemon.moves.map((move) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            뒤로 가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
