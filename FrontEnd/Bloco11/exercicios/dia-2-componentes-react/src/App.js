import DisplayPokemon from "./displayPokemon";
import pokemons from './data';

export default function App() {
  return (
    <>
      <section className="container">
        <h1 className="text-center">Pokedex</h1>
        <DisplayPokemon pokemons={pokemons} />
      </section>
    </>
  )
}