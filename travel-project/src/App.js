import './App.scss';
import Home from './components/Home/Home';
import Middle from './components/Middle/Middle';
import Navbar from './components/Navbar/Navbar';
import Design from './components/Design/Design';
import MainContent from './components/MainContent/MainContent';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Middle />
<Design/>
<MainContent />
    </div>
  );
}

export default App;
