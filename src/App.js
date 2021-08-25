
import './App.css';
import Products from './components/product/Products'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <Products />
      </header>
    </div>
  );
}

export default App;
