import './App.css';
import Footer from './components/footer';
import Face from './Images/Rectangle 90.jpg';
import Email from './Images/Mail.svg'
import linkedln from './Images/linkedin.svg'

export default function App() {
  return (
    <body className="App">
      <img src={Face} className="Face" ></img>
      <div className="App-Main">
        <text className="App-Info-Title">Joehan Misquitta</text>
        <text className="App-Info-Designation">Frontend Developer</text>
        <text className="App-Info-Website">joehanmisquitta.com</text>
        <button className="App-Info-Email">
          <img src={Email}></img>
          <text>Email</text>
        </button>
        <button className="App-Info-Linkedln">
          <img src={linkedln}></img>
          <text>Linkedln</text>
        </button>
      </div>
      <div>
        <Footer/>
      </div>
    </body>
  );
}
