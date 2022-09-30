import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BRUCK from "../IMG/BRUCK.webp";
import { addName } from "../store/slice/pokemon.slice";
import "../App.css";

const InputPoke = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNames = () => {
    dispatch(addName(name));
    navigate("/pokedex");
  };
  return (
      <div className="home">
        <h1>Hello trainer!</h1>
        <img src={BRUCK} alt="" width="100px" />
        <label htmlFor="name">Give me your name to start</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addNames}>
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
  );
};

export default InputPoke;
