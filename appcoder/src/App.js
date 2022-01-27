import './App.css';

import CardContainer from './components/CardContainer';

function App() {
  const saludar=()=>{
    console.log("holuu");

  };
  return (
    <div className="App">
      <h1>Holaa</h1>
      
      <CardContainer/>
    </div>
  );
}

export default App;
