import './App.css';
import ProductDesc from './components/ProductDesc';
import ProductImage from './components/ProductImage';
import ProductName from './components/ProductName';
function App() {
    return (
      <div className="App">
      <ProductImage/>
      <ProductName/>
      <ProductDesc/>
      </div>
    );
  }
  
  export default App;