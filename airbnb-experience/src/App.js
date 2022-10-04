import './App.css';
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/card';
import Swimmer from "./images/swimmer.svg";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Card
        img={Swimmer}
        rating = "5.0"
        no_of_ratings = {6}
        country = "USA"
        description = "Life lessons with Katie Zaferes"
        cost = {136}
        unit = "Person"
      />
    </div>
  );
}

export default App;
