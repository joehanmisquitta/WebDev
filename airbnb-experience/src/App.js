import './App.css';
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Data from "./components/Data"
import Card from "./components/card"

function App() {
  const Cards = Data.map(items => {
    return <Card 
    key={items.id} 
    item ={items} />
  })

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <section className="Card-List">
        {Cards}
      </section>
    </div>
  );
}

export default App;
