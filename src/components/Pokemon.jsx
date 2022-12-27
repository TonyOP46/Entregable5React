import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonList from "./PokemonList";
import "../App.css";

const Pokemon = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [types, setTypes] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemonCards(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  //console.log(pokemonCards);
  console.log(types);

  const SearchName = () => {
    navigate(`/pokedex/${input}`);
  };

  const searchType = (typeUrl) => {
    if (typeUrl) {
      axios.get(typeUrl).then((res) => setPokemonCards(res.data.pokemon));
    }
  };
  const [page, setPage] = useState(1);
  const pokemonPerPage = 6;
  const lastPokemonPage = page * pokemonPerPage;
  const firstPokemonPage = lastPokemonPage - pokemonPerPage;
  const PokemonPaginated = pokemonCards.slice(
    firstPokemonPage,
    lastPokemonPage
  );

  const totalPages = Math.ceil(pokemonCards.length / pokemonPerPage);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
  return (
    <div className="cards">
        <div className="header">
          <h1>Pokedex</h1>
          <p>Welcome {pokemon}, here you can find your favorite pokemon</p>
        </div>
        <div className="option">
          <div className="select">
            <select onChange={(e) => searchType(e.target.value)}>
              <option value="">Select Type</option>
              {types.map((type) => (
                <option value={type.url} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digit a number or name"
            />
            <button onClick={SearchName}>Search</button>
          </div>
        </div>
        <div className="paginated">
          {pagesNumbers.map((pagesNum) => (
            <button onClick={() => setPage(pagesNum)}>{pagesNum}</button>
          ))}
        </div>
        <div className="mycards">
          {PokemonPaginated.map((pokemonCard) => (
            <li>
              <PokemonList
                url={
                  pokemonCard.url ? pokemonCard.url : pokemonCard.pokemon.url
                }
                key={
                  pokemonCard.url ? pokemonCard.url : pokemonCard.pokemon.url
                }
              />
            </li>
          ))}
        </div>
      </div>
  );
};

export default Pokemon;
