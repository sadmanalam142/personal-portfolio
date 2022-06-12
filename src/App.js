import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
