import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InputPoke from "./components/InputPoke";
import Pokemon from "./components/Pokemon";
import PokemonIds from "./components/PokemonIds";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputPoke />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokemon />} />
            <Route path="/pokedex/:id" element={<PokemonIds />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
