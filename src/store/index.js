import { configureStore } from '@reduxjs/toolkit'
import  pokemones  from './slice/pokemon.slice'
export default configureStore({
  reducer: {
        pokemon: pokemones
	}
})