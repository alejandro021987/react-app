import './App.css';

function App() {
  const name = false; //'John'; 
  return (
    <div className="App">
     <h1>Hello, { name? name: 'ReactApp' }!!!</h1>
    </div>
  );
}

export default App;
