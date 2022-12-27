import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import pokemon from '../IMG/logo.webp'

const PokemonIds = () => {
  const { id } = useParams();
  const [namePokemon, setNamePokemon] = useState({});

  useEffect(() => {
   if (id) {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => setNamePokemon(res.data));
   }
  }, []);

  console.log(namePokemon);

  return (
    <div className="pokeId">
      <div className="pokemon">
        <img src={pokemon} alt="" />
      </div>
      <div className="altar">
        <a href={namePokemon.location_area_encounters} disabled="true">
          Encounters
        </a>
      </div>
      <div className="section">
        <div className="imag">
          <img src={namePokemon.sprites?.other.home.front_default} alt="" />
        </div>
        {/* weight, height, name type, abilities, movemente */}
        <div className="desc">
          <div className="weight">
            {namePokemon.weight}
            <h2>Weight</h2>
          </div>
          <div className="height">
            {namePokemon.height}
            <h2>Height</h2>
          </div>
        </div>
        <h1>{namePokemon.name}</h1>
        <p>#{id}</p>
      </div>
      <div className="type">
        <h2>Type</h2>
        {namePokemon.types?.map((namePoke) => (
          <button>{namePoke.type.name}</button>
        ))}
      </div>
      <div className="abilities">
        <h2>Abilities</h2>
        <button>{namePokemon.abilities?.[0].ability.name}</button>
        <button>{namePokemon.abilities?.[1].ability.name}</button>
      </div>
      <div className="movements">
        <h2>Movements</h2>
        <div className="container">
          <h5>{namePokemon.moves?.[0].move.name}</h5>
          <h5>{namePokemon.moves?.[1].move.name}</h5>
          <h5>{namePokemon.moves?.[2].move.name}</h5>
          <h5>{namePokemon.moves?.[3].move.name}</h5>
          <h5>{namePokemon.moves?.[4].move.name}</h5>
          <h5>{namePokemon.moves?.[5].move.name}</h5>
          <h5>{namePokemon.moves?.[6].move.name}</h5>
          <h5>{namePokemon.moves?.[7].move.name}</h5>
          <h5>{namePokemon.moves?.[8].move.name}</h5>
          <h5>{namePokemon.moves?.[9].move.name}</h5>
          <h5>{namePokemon.moves?.[10].move.name}</h5>
          <h5>{namePokemon.moves?.[11].move.name}</h5>
          <h5>{namePokemon.moves?.[12].move.name}</h5>
          <h5>{namePokemon.moves?.[13].move.name}</h5>
          <h5>{namePokemon.moves?.[14].move.name}</h5>
          <h5>{namePokemon.moves?.[15].move.name}</h5>
          <h5>{namePokemon.moves?.[16].move.name}</h5>
          <h5>{namePokemon.moves?.[17].move.name}</h5>
          <h5>{namePokemon.moves?.[18].move.name}</h5>
          <h5>{namePokemon.moves?.[19].move.name}</h5>
          <h5>{namePokemon.moves?.[20].move.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default PokemonIds;
