import DisplayPokemon from "./displayPokemon";
import pokemons from './data';

export default function App() {
  return (
    <>
      <section>
        <DisplayPokemon pokemons={pokemons} />
      </section>
    </>
  )
}