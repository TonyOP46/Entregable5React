import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemones = createSlice({
	name: 'pokemon',
    initialState: "",
    reducers: {
        addName: (state, action)=>{
            const name = action.payload
            return name
        }
    }
})

export const { addName } = pokemones.actions;

export default pokemones.reducer;