import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Project></Project>
    </div>
  );
}

export default App;
