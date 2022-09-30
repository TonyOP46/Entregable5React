import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const PokemonList = ({url}) => {

    const [poke, setPoke]=useState({})
    
    const [color, setColor]=useState("")

    useEffect(()=>{
        axios.get(url).then(res=>
            {setPoke(res.data)
            setColor(colors[res.data.types?.[0].type.name])
            })
    },[])

    const navigate = useNavigate()

    const SearchId=()=>{
        navigate(`/pokedex/${poke.id}`)
    }

    const colors ={
        normal : "#F1DBEA",
        fighting: "#D34F2C", 
        water: "blue",
        flying: "#1BF5A9",
        fire: "red",
        poison: "#F5981B",
        grass: "#25F51B",
        ground: "pink",
        rock: "gray",
        bug: "wheat",
        ghost: "black",
        steel: "#BD05FC",
        electric: "#FC8805 ",
        psychic: "#A1B3D8",
        ice: "#3C3EBF"

    }
    

    console.log(poke)
    return (
        <div className='show' onClick={SearchId}>
            <h1 style={{color: color}}>{poke.name}</h1>
            <div className='image'>
                <img src={poke.sprites?.other.home.front_default} alt="" />
            </div>
            <ul className='list' style={{color: color}}>
                <li>Type: {poke.types?.map(pokeType=>(
                    <p>{pokeType.type.name}</p>
                ))}</li>
                <li>Hp: {poke.stats?.[0].base_stat}</li>
                <li>Attack: {poke.stats?.[1].base_stat}</li>
                <li>Deffense: {poke.stats?.[2].base_stat}</li>
                <li>Speed: {poke.stats?.[5].base_stat}</li>
            </ul>
        </div>
    );
};

export default PokemonList;