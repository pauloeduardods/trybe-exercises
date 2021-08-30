const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <ol>{Task('Olaaa')} {Task('Tryberrr')}</ol>
    </div>
  );
}

export default App;
