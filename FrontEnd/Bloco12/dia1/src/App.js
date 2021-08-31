function handleClick() {
  console.log(2);
}

export default function App() {
  return (
    <>
    <button onClick={handleClick}>Console.log(2)</button>
    </>
  );
}