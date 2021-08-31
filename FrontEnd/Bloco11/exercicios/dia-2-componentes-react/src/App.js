import DisplayPokemon from "./displayPokemon";
import pokemons from './data';

export default function App() {
  return (
    <>
      <section className="container">
        <DisplayPokemon pokemons={pokemons} />
      </section>
    </>
  )
}